import PenaIcon from "@/app/assets/svg/pena";
import Button from "../button";

interface FilterCategoryProps {}

const FilterCategory: React.FC<FilterCategoryProps> = () => {
  const listCategory = [
    {
      name: "cocktail",
      label: "Cocktail",
    },
    {
      name: "shooters",
      label: "Shooters",
    },
    {
      name: "premium_spirits",
      label: "Premium Spirits",
    },
    {
      name: "non_alcoholic_beverages",
      label: "Non-Alcoholic Beverages",
    },
  ];

  return (
    <div className="flex items-center bg-[#1E1E1E] my-4 py-4 px-6 rounded-lg">
      <div className="flex px-2">Category</div>
      <div className="flex">
        {listCategory.map((list, idx) => {
          return (
            <div key={idx} className="px-1">
              <Button className="rounded-xl">{list.label}</Button>
            </div>
          );
        })}
      </div>
      <div className="flex px-1 cursor-pointer">
        <PenaIcon />
      </div>
    </div>
  );
};

export default FilterCategory;