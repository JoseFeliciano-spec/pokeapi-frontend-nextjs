import Card from "@mui/joy/Card";
import Skeleton from "@mui/joy/Skeleton";
export const PokemonCardSkeleton = () => {
  return (
    <Card
      size="lg"
      className="border-lg relative h-72 w-full max-md:mx-auto"
    >
      {/* Círculo de altura */}
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        <Skeleton
          variant="circular"
          width={56}
          height={56}
          animation="wave"
          sx={{ bgcolor: "grey.200" }}
        />
      </div>

      {/* Círculo de peso */}
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
        <Skeleton
          variant="circular"
          width={56}
          height={56}
          animation="wave"
          sx={{ bgcolor: "grey.200" }}
        />
      </div>

      {/* Imagen del Pokemon */}
      <div className="flex justify-center items-center w-full">
        <div className="w-36 h-36 relative">
          <Skeleton
            variant="rectangular"
            width={144}
            height={144}
            animation="wave"
            sx={{
              bgcolor: "grey.200",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>

      {/* Nombre del Pokemon */}
      <div className="text-center">
        <Skeleton
          variant="text"
          width={120}
          height={24}
          animation="wave"
          sx={{
            bgcolor: "grey.200",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Chips de tipos */}
      <div className="flex gap-2 flex-wrap mt-2">
        <Skeleton
          variant="rectangular"
          width={60}
          height={24}
          animation="wave"
          sx={{
            bgcolor: "grey.200",
            borderRadius: "16px",
          }}
        />
        <Skeleton
          variant="rectangular"
          width={60}
          height={24}
          animation="wave"
          sx={{
            bgcolor: "grey.200",
            borderRadius: "16px",
          }}
        />
      </div>
    </Card>
  );
};
