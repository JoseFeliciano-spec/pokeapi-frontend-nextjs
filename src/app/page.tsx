import Image from "next/image";
import Button from "@mui/joy/Button";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import charizard from "@/assets/png/charizard.png";
export default function Home() {
  return (
    <>
      <main className="max-md:container w-[75%] mx-auto mt-10">
        <div className="flex justify-center items-center mb-12 mt-8 gap-x-2">
          <AvatarGroup>
            <Avatar
              alt="Remy Sharp"
              src={"https://avatar.iran.liara.run/public/boy"}
            />
            <Avatar
              alt="Travis Howard"
              src={"https://avatar.iran.liara.run/public/boy"}
            />
            <Avatar
              alt="Cindy Baker"
              src={"https://avatar.iran.liara.run/public/boy"}
            />
            <Avatar>+2</Avatar>
          </AvatarGroup>
          <p className="text-gray-500">+100k usos al mes</p>
        </div>
        <h1 className="text-center text-5xl font-bold">
          Descubre y observa a tus Pokémon favoritos <br /> con esta increíble
          aplicación
        </h1>
        <div className="flex justify-center items-center flex-col my-7">
          <Button className="rounded-full" size="lg">
            <p className="text-lg font-semibold p-[0.07rem]">Ir a la Pokedex</p>
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <Image src={charizard} width={470} height={470} alt="Logo" />
        </div>
      </main>
    </>
  );
}
