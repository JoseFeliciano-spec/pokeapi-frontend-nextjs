import Image from "next/image";
import Button from "@mui/joy/Button";
import pokemonLogo from "@/assets/png/image.png";

export default function Header() {
  return (
    <header className="max-md:container w-[75%] mx-auto">
      <div className="w-full flex justify-between items-center">
        <Image src={pokemonLogo} width={120} height={120} alt="Logo" />

        <div className="flex items-center gap-x-3">
          <Button className="rounded-full" size="lg" variant="plain">
            <p className="text-lg font-semibold p-[0.07rem]">Inicio</p>
          </Button>
          <Button className="rounded-full" size="lg">
            <p className="text-lg font-semibold p-[0.07rem]">Pokedex</p>
          </Button>
        </div>
      </div>
    </header>
  );
}
