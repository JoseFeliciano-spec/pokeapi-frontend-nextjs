import dynamic from "next/dynamic";
import { getAllPokemons } from "@/server/getAllPokemons";
import PaginationControlled from "@/components/ui/Pagination";
import { PokemonCardSkeleton } from "@/components/ui/PokemonCardSkeleton";

const ListPokemonDynamic = dynamic(
  () => import("@/components/pokedex/ListPokemon"),
  {
    loading: () => {
      return (
        <>
          {Array(10)
            .fill(5)
            .map((_, index) => (
              <PokemonCardSkeleton key={index} />
            ))}
        </>
      );
    },
  }
);

const SearchDynamic = dynamic(() => import("@/components/ui/Search"), {
  loading: () => {
    return (
      <>
        <div className="h-7 w-full bg-gray-200 rounded-lg animate-pulse" />
      </>
    );
  },
  ssr: false,
});

export default async function Pokedex({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  try {
    const pageNo = (await searchParams)?.pageNo;
    const pokemons = await getAllPokemons(pageNo ?? 1);

    if (!pokemons || pokemons?.results?.length === 0) {
      return (
        <div className="max-md:container w-[75%] mx-auto text-center mt-16">
          <h1 className="text-3xl font-bold text-red-500">Sin datos</h1>
          <p className="text-gray-500 mt-4">
            No se pudieron cargar los pokemones. Por favor, intenta nuevamente
            más tarde.
          </p>
        </div>
      );
    }

    return (
      <div className="max-md:container w-[75%] mx-auto">
        <h1 className="text-center text-3xl font-bold mt-16">
          Pokemones
          <span className="text-2xl text-gray-300 font-medium">
            ({pokemons?.count ?? "Cargando..."} Pokemones)
          </span>
        </h1>
        <h3 className="text-center text-lg text-gray-500 font-medium mt-1">
          La mejor Pokedex, para observar a tus pokemones favoritos
        </h3>
        <div className="w-full mb-8 mt-4 px-3">
          <SearchDynamic />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-16 gap-y-10 my-8">
          {pokemons !== undefined && <ListPokemonDynamic pokemons={pokemons} />}
        </div>
        {pokemons !== undefined && (
          <PaginationControlled
            totalPages={(parseInt(pokemons?.count ?? 20) / 20)}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error("Error al cargar los datos:", error);

    return (
      <div className="max-md:container w-[75%] mx-auto text-center mt-16">
        <h1 className="text-3xl font-bold text-red-500">Ocurrió un error</h1>
        <p className="text-gray-500 mt-4">
          No se pudieron cargar los datos de la Pokedex. Por favor, intenta
          nuevamente más tarde.
        </p>
      </div>
    );
  }
}
