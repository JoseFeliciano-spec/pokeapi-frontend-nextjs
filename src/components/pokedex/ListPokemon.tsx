"use client";
import Image from "next/image";
import Link from "next/link";
import Card from "@mui/joy/Card";
import { toCapitalize } from "@/lib/toCapitalize";
import Chips from "@/components/ui/Chips";

export default function ListPokemon({ pokemons }: any) {
  return (
    pokemons !== undefined &&
    pokemons?.results?.map((item: any, key: number) => {
      return (
        <Link href={`/pokemon?name=${item?.name}`}>
          <Card
            size="lg"
            key={key}
            className="border-lg relative min-h-[18.5rem] max-sm:w-10/12 cursor-pointer max-md:mx-auto"
          >
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white w-14 h-14 shadow-lg rounded-full flex items-center justify-center">
              <p className="font-semibold text-sm">{item?.height / 10} m</p>
            </div>
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white w-14 h-14 shadow-lg rounded-full flex items-center justify-center">
              <p className="font-semibold text-sm">{item?.weight / 10} kg</p>
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
        </Link>
      );
    })
  );
}
