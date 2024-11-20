import { typeColors } from "@/lib/typeColors";
import { toCapitalize } from "@/lib/toCapitalize";
export default function Chips({ item }: { item: any }) {
  return item?.types?.map((item: any) => {
    const nameBackground = typeColors[item?.type?.name.toString()];
    const className = `w-16 h-8 p-2 rounded-full flex justify-center items-center`;
    return (
      <div
        className={className}
        style={{
          backgroundColor: nameBackground,
        }}
        key={item?.type?.name}
      >
        <p className="text-sm text-white font-semibold">
          {toCapitalize(item?.type?.name)}
        </p>
      </div>
    );
  });
}
