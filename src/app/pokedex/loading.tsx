import { PokemonCardSkeleton } from "@/components/ui/PokemonCardSkeleton";
export default function Loading() {
  return (
    <div className="container md:w-[75%] mx-auto px-10">
      {/* Título con contador */}
      <div className="mt-16 text-center space-y-1">
        <div className="flex items-center justify-center gap-2">
          <div className="h-9 w-48 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-8 w-24 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        {/* Subtítulo */}
        <div className="h-7 w-28 md:w-96 mx-auto bg-gray-200 rounded-lg animate-pulse" />
      </div>

      <div className="h-7 w-full mb-10 mt-6 bg-gray-200 rounded-lg animate-pulse" />

      {/* Grid de Pokémon */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-16 gap-y-10 my-8">
        {/* Generamos 10 skeletons de cartas */}
        {[...Array(10)].map((_, index) => (
          <PokemonCardSkeleton key={index} />
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mb-8">
        <div className="h-10 w-72 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
