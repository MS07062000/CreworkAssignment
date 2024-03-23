import React from "react";
import Category from "../../constants/category";

interface CategoriesProps {
  filterCategory: Category[];
  onFilterClick: (category: Category) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  filterCategory,
  onFilterClick,
}) => {
  return (
    <div className="justify-start items-start gap-4 inline-flex flex-wrap">
      {Object.values(Category).map((category: Category, index: number) => (
        <p
          key={index}
          className={`px-4 py-2 rounded border border-white text-sm font-medium font-['Poppins'] leading-tight ${
            filterCategory.includes(category)
              ? "bg-white text-stone-900"
              : "bg-stone-900 text-white"
          }`}
          onClick={() => onFilterClick(category)}
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default Categories;
