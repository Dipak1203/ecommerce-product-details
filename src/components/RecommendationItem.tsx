import Image from "next/image";
export function RecommendationItem({
  url,
  title,
  price,
}: {
  url: string;
  title: string;
  price: number;
}) {
  return (
    <div className="">
      <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg ">
        <Image
          alt="recommendation_image"
          width={200}
          className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          height={200}
          src={url}
        />
      </div>
      <div className="flex flex-col ">
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-gray-600">Rs.{price.toFixed(2)}</p>
        <button className="bg-primary w-40 text-white px-4 py-2 rounded hover:border-yellow transition">
          View Details
        </button>
      </div>
    </div>
  );
}
