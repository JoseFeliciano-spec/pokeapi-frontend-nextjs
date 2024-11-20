import Image from "next/image";
import Link from "next/link";
import Button from "@mui/joy/Button";
import DrawerLocal from "./Drawer";
import pokemonLogo from "@/assets/png/image.png";

export default function Header() {
  return (
    <header className="max-md:container w-[75%] mx-auto px-3 sticky top-0 bg-white z-10">
      <div className="w-full flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={pokemonLogo}
            width={120}
            className="cursor-pointer"
            height={120}
            alt="Logo"
          />
        </Link>

        <div className="flex items-center gap-x-3">
          <div className="hidden md:block">
            <Button className="rounded-full " size="lg" variant="plain">
              <Link href={"/"}>
                <p className="text-lg font-semibold p-[0.07rem]">Inicio</p>
              </Link>
            </Button>
          </div>

          <div className="hidden md:block">
            <Button className="rounded-full  " size="lg">
              <Link href={"/pokedex"}>
                <p className="text-lg font-semibold p-[0.07rem]">Pokedex</p>
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <DrawerLocal />
          </div>
        </div>
      </div>
    </header>
  );
}
