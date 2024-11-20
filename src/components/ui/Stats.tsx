export default function PokemonStats({ stats }: any) {
  const statColors: any = {
    hp: "bg-red-500",
    attack: "bg-orange-500",
    defense: "bg-blue-500",
    "special-attack": "bg-yellow-500",
    "special-defense": "bg-green-500",
    speed: "bg-purple-500",
  };

  return (
    <div className="">
      <h3 className="mt-6 font-semibold">Estadísticas</h3>

      <div className="space-y-4 mt-2">
        {stats.map((item: any) => (
          <div key={item?.stat?.name}>
            <div className="flex items-center justify-center gap-x-2">
              <div className="flex justify-between gap-x-2 basis-2/5 w-full">
                <span className="text-gray-600 capitalize max-md:text-sm">
                  {item?.stat.name}
                </span>
                <span className="font-bold text-gray-800 max-md:text-sm">
                  {item?.base_stat}
                </span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${statColors[item?.stat.name]}`}
                  style={{ width: `${item?.base_stat}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
