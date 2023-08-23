import { qb, useFeature } from "../causal";

// For the sake of simplicity, just a map of descriptions
const nameToDescription = new Map([
  ["eggs", "Versatile protein source, perfect for many recipes."],
  ["bread", "Fluffy staple, excellent for sandwiches and toasts."],
  ["milk", "Nutritious dairy product for drinks and cooking."],
  ["pear", "Juicy fruit, sweet with a grainy texture."],
  ["banana", "Rich in potassium, ideal for quick snacks."],
  ["carrot", "Crunchy veggie, great raw or in dishes."],
]);

export function XSell({ productName }: { productName: string }) {
  const date = new Date();

  const feature = useFeature(
    qb().getCrossSellFeature({ productName, dayOfWeek: date.getDay() })
  );

  if (feature == "OFF") return <></>;

  return (
    <div className="flex flex-col bg-white sm:flex-row items-left justify-center space-y-4 sm:space-y-0 sm:space-x-4 min-h-[280px]">
      {feature?.results?.map((s, index) => {
        const capitalized = s.charAt(0).toUpperCase() + s.slice(1);

        return (
          <button
            className="w-[178px] min-h-[280px] border border-gray-300 shadow-md "
            data-testid="carousel-button"
            onClick={() =>
              feature?.signalCrossSellItemClick({ productName: s })
            }
            key={index}
          >
            <img className="h-[102px] " src={`/${s}.png`}></img>
            <div className="m-4 text-left font-bold text-xl min-h-[28px]">
              {capitalized}
            </div>
            <div className="m-4 text-left min-h-[100px]">
              {nameToDescription.get(s)}
            </div>
          </button>
        );
      })}
    </div>
  );
}
