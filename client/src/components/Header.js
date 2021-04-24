import React from "react";
import { Link } from "react-router-dom";

const Header = ({ prevPage }) => {
  return (
    <div>
      <Link to={`${prevPage}`}>Back</Link>
    </div>
  );
};

export default Header;
