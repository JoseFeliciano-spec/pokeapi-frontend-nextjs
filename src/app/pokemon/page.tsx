import Image from "next/image";
import Link from "next/link";
import Card from "@mui/joy/Card";
import { toCapitalize } from "@/lib/toCapitalize";
import { getDetailsPokemon } from "@/server/getDetailsPokemon";
import { typeColors } from "@/lib/typeColors";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import PokemonStats from "@/components/ui/Stats";
import Chips from "@/components/ui/Chips";
import { getSearchPokemon } from "@/server/getSearchPokemon";
import { getNamesById } from "@/lib/getNamePokemon";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  try {
    const name = (await searchParams)?.name;
    const type = (await searchParams)?.type;

    const pokemon = await getDetailsPokemon(name);
    const allPokemons = await getSearchPokemon();
    const sprites = pokemon?.sprites?.other["official-artwork"];
    const color = pokemon ? typeColors[pokemon?.types[0]?.type?.name] : "#ccc";

    const names = pokemon
      ? getNamesById(allPokemons?.results, pokemon?.id)
      : null;

    const prevId = pokemon?.id > 1 ? pokemon.id - 1 : 1;
    const nextId = pokemon?.id + 1;

    if (!pokemon) {
      return (
        <div className="max-lg:container w-[65%] mx-auto mt-10">
          <p className="text-center text-xl font-bold text-red-500">
            No se pudo cargar la información del Pokémon. Por favor, intenta de
            nuevo más tarde.
          </p>
          <Link
            href="/pokedex"
            className="bg-gray-200 py-1 px-2 flex mt-5 items-center justify-center rounded-xl shadow-lg hover:bg-gray-300 transition max-w-fit mx-auto"
          >
            ← Regresar a la Pokedex
          </Link>
        </div>
      );
    }

    return (
      <div className="max-lg:container w-[65%] mx-auto">
        <Link
          href={`/pokedex`}
          className="bg-gray-200 py-1 px-2 max-md:mx-2 flex mt-5 items-center justify-center rounded-xl shadow-lg hover:bg-gray-300 transition max-w-fit"
          aria-label="Atrás"
        >
          <span className="text-base font-bold w-full">← Ir a la Pokedex</span>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-10 gap-4">
          <section className="max-md:mx-2">
            <h1 className="text-3xl font-bold">
              {toCapitalize(pokemon?.name)}
              <span className="text-2xl text-gray-300 font-medium">
                (#{pokemon?.id ?? "Cargando..."})
              </span>
            </h1>
            <div className="my-3 flex w-full gap-x-1">
              <Chips item={pokemon} />
            </div>
            <div className="flex relative justify-center items-start w-full rounded-lg">
              <div className="w-[25rem] h-[20rem] md:h-[32.5rem] relative overflow-hidden">
                <Image
                  src={
                    type === "shiny"
                      ? sprites?.front_shiny
                      : sprites?.front_default
                  }
                  alt="sprite-pokemon"
                  fill
                />
              </div>
              <div
                className="w-full h-full absolute rounded-lg"
                style={{
                  backgroundColor: color,
                  opacity: 0.3,
                }}
              ></div>
            </div>
          </section>
          <main className="max-md:mx-2">
            <h2
              className="max-w-fit font-semibold"
              style={{
                borderBottomWidth: "2px",
                borderBottomColor: color,
              }}
            >
              Acerca de
            </h2>

            <h3 className="mt-10 font-semibold">Habilidades</h3>
            <div className="flex flex-wrap gap-x-2 mt-2">
              {pokemon?.abilities?.map((item: any, key: number) => {
                return (
                  <div
                    key={key}
                    className="min-w-16 h-8 border-2 grid place-content-center rounded-full p-2"
                    style={{
                      borderColor: color,
                    }}
                  >
                    <p className="text-black">
                      {toCapitalize(item?.ability?.name)}
                    </p>
                  </div>
                );
              })}
            </div>
            <h3 className="mt-6 font-semibold">Versiones</h3>
            <div className="flex flex-wrap gap-x-2 mt-2">
              {["normal", "shiny"].map((item: any, key: number) => {
                return (
                  <Link
                    href={`?type=${item}&name=${pokemon?.name}`}
                    key={key}
                    className="min-w-16 h-8 border-2 grid place-content-center rounded-full p-2 cursor-pointer"
                    style={{
                      borderColor: type === item && color,
                    }}
                  >
                    <p className="text-black">{toCapitalize(item)}</p>
                  </Link>
                );
              })}
            </div>
            <div className="grid grid-cols-3 2xl:w-1/2 mt-6 gap-3">
              <Card className="flex justify-center items-center flex-col gap-y-2 shadow-md">
                <p className="font-semibold">Altura</p>
                <p className="font-semibold">
                  {parseInt(pokemon?.height) / 10} m
                </p>
              </Card>
              <Card className="flex justify-center items-center flex-col gap-y-2 shadow-md">
                <p className="font-semibold">Género</p>
                <div className="flex">
                  <IoMdFemale className="text-pink-600" />
                  <IoMdMale className="text-blue-600" />
                </div>
              </Card>
              <Card className="flex justify-center items-center flex-col gap-y-2 shadow-md">
                <p className="font-semibold">Peso</p>
                <p className="font-semibold">
                  {parseInt(pokemon?.weight) / 10} m
                </p>
              </Card>
            </div>

            <PokemonStats stats={pokemon?.stats} />
          </main>
        </div>

        {/* Botones de navegación */}
        <div className="flex my-5 justify-center items-center gap-x-5">
          <div className="md:fixed left-4 top-1/2 md:transform md:-translate-y-1/2 z-10">
            <Link
              href={`?name=${prevId}&type=${type}`}
              className="flex flex-col items-center bg-gray-200 p-2 md:p-4 rounded-xl shadow-lg hover:bg-gray-300 transition"
              aria-label="Anterior"
            >
              <span className="text-md md:text-lg font-bold">← Anterior</span>
              {names?.previous && (
                <p className="text-sm text-gray-600 mt-2">{names.previous}</p>
              )}
            </Link>
          </div>
          <div className="md:fixed right-4 top-1/2 md:transform md:-translate-y-1/2 z-10">
            <Link
              href={`?name=${nextId}&type=${type}`}
              className="flex flex-col items-center bg-gray-200 p-3 md:p-4 rounded-xl shadow-lg hover:bg-gray-300 transition"
              aria-label="Siguiente"
            >
              <span className="text-base md:text-lg font-bold">
                Siguiente →
              </span>
              {names?.next && (
                <p className="text-sm text-gray-600 mt-2">{names.next}</p>
              )}
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="max-lg:container w-[65%] mx-auto mt-10">
        <p className="text-center text-xl font-bold text-red-500">
          Ocurrió un error al cargar los datos. Por favor, intenta nuevamente
          más tarde.
        </p>
        <Link
          href="/pokedex"
          className="bg-gray-200 py-1 px-2 flex mt-5 items-center justify-center rounded-xl shadow-lg hover:bg-gray-300 transition max-w-fit mx-auto"
        >
          ← Regresar a la Pokedex
        </Link>
      </div>
    );
  }
}
