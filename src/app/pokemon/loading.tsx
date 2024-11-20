export default function Loading() {
  return (
    <div className="max-lg:container w-[65%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-16 gap-4">
        {/* Section izquierda */}
        <section className="max-md:mx-2 animate-pulse">
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
          <div className="mt-2 h-6 w-1/3 bg-gray-300 rounded"></div>
          <div className="my-3 flex gap-x-1">
            <div className="h-8 w-16 bg-gray-300 rounded-full"></div>
            <div className="h-8 w-16 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex relative justify-center items-start w-full rounded-lg mt-4">
            <div className="w-[25rem] h-[32.5rem] bg-gray-200 rounded-lg"></div>
          </div>
        </section>

        {/* Section derecha */}
        <main className="max-md:mx-2 animate-pulse">
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>

          <h3 className="mt-10 font-semibold">Habilidades</h3>
          <div className="flex flex-wrap gap-x-2 mt-2">
            <div className="min-w-16 h-8 bg-gray-300 rounded-full p-2"></div>
            <div className="min-w-16 h-8 bg-gray-300 rounded-full p-2"></div>
            <div className="min-w-16 h-8 bg-gray-300 rounded-full p-2"></div>
          </div>

          <h3 className="mt-6 font-semibold">Versiones</h3>
          <div className="flex flex-wrap gap-x-2 mt-2">
            <div className="min-w-16 h-8 bg-gray-300 rounded-full p-2"></div>
            <div className="min-w-16 h-8 bg-gray-300 rounded-full p-2"></div>
          </div>

          <PokemonStatsSkeleton />
        </main>
      </div>

      {/* Botones de navegación */}
      <div className="flex my-5 justify-center items-center gap-x-5 animate-pulse">
        <div className="h-12 w-24 bg-gray-300 rounded"></div>
        <div className="h-12 w-24 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

function PokemonStatsSkeleton() {
  return (
    <div className="">
      <h3 className="mt-6 font-semibold">Estadísticas</h3>

      <div className="space-y-4 mt-2 animate-pulse">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <div className="flex items-center justify-center gap-x-2">
                <div className="flex justify-between gap-x-2 basis-2/5 w-full">
                  <span className="h-4 w-16 bg-gray-300 rounded"></span>
                  <span className="h-4 w-8 bg-gray-300 rounded"></span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-300"
                    style={{ width: `${Math.random() * 60 + 30}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
