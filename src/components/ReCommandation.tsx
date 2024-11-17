import { recommendationData } from "@/constant/data";
import { RecommendationItem } from "./RecommendationItem";

export function ReCommandation() {
    return (
      <>
        <h1 className="text-2xl font-bold text-center sm:text-left">Recommandations</h1>
        <p className="text-gray-600 text-center sm:text-left">Discover similar products</p>
        <div className="pt-5 flex flex-col items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {recommendationData.map((item) => (
              <RecommendationItem
                key={item.id}
                price={item.price}
                title={item.title}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
  