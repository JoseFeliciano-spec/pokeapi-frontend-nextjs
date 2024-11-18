import Image from "next/image";
import { getAllPokemons } from "@/server/getAllPokemons";
import Card from "@mui/joy/Card";
import { toCapitalize } from "@/lib/toCapitalize";
import { typeColors } from "@/lib/typeColors";
import Chips from "@/components/ui/Chips";
export default async function Pokedex() {
  const pokemons = await getAllPokemons();
  console.log(pokemons);
  return (
    <div className="max-md:container w-[75%] mx-auto">
      <h1 className="text-center text-3xl font-bold mt-16">
        Pokemones
        <span className="text-2xl text-gray-300 font-medium">
          {" "}
          ({pokemons?.count})
        </span>
      </h1>
      <h3 className="text-center text-lg text-gray-500 font-medium mt-1">
        La mejor Pokedex, para observar a tus pokemones favoritos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-16 gap-y-10 my-8">
        {pokemons?.results?.map((item: any, key: number) => {
          return (
            <Card
              size="lg"
              key={key}
              className="border-lg relative h-72 max-sm:w-10/12 cursor-pointer max-md:mx-auto"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white w-14 h-14 shadow-lg rounded-full flex items-center justify-center">
                <p className="font-semibold text-sm">{item?.height / 10} m</p>
              </div>
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white w-14 h-14 shadow-lg rounded-full flex items-center justify-center">
                <p className="font-semibold text-sm"> {item?.weight / 10} kg</p>
              </div>

              <div className="flex justify-center items-center w-full">
                <div className="w-36 h-36 relative overflow-hidden">
                  <Image
                    src={item?.sprites?.front_default}
                    alt="sprite-pokemon"
                    fill
                  />
                </div>
              </div>

              <h2 className="text-center font-semibold">
                {toCapitalize(item?.name)}
              </h2>
              <div className="flex gap-2 flex-wrap">
                <Chips item={item} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
