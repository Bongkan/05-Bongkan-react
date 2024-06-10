import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <div className="flex justify-end bg-gray-200 border-b-2 border-black pr-3">
    <Link className="p-3" to="/">
      Home
    </Link>
    <Link className="p-3" to="/owner">
      Owner
    </Link>
  </div>
);

export default Nav;
