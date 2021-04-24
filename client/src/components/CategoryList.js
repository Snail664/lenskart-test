// node modules
import React from "react";
import { Link } from "react-router-dom";

// misc
import uniqPropFromArrOfObj from "../utils/uniqPropFromArrOfObj";

const CategoryList = ({ products }) => {
  // use helper function to return array of uniqe categories
  const renderCategories = uniqPropFromArrOfObj(products, "category").map(
    (category, index) => {
      // map over returned array and render item
      return (
        <div className="p-5 m-5 w-100 h-100 bg-dark rounded" key={index}>
          <Link to={`/categories/${category}`}>
            <h2 className="text-white">{category}</h2>
          </Link>
        </div>
      );
    }
  );
  return (
    <div className="text-center">
      <h1>Category List</h1>
      <h4>Please select a category</h4>
      <div className="d-flex flex-wrap justify-content-center">
        {renderCategories}
      </div>
    </div>
  );
};

export default CategoryList;
