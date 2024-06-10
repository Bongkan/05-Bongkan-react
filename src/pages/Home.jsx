import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import User from "./User";

const Home = ({ users, addUser, setUsers }) => {
  const [view, setView] = useState("home");
  const [renderField, setrenderField] = useState("");
  const [sectorBanner, setsectorBanner] = useState("React - Assessment");

  useEffect(() => {
    if (view === "admin") {
      setrenderField(
        <Admin users={users} addUser={addUser} setUsers={setUsers} />
      );
      setsectorBanner("Home - Admin Sector");
    } else if (view === "user") {
      setrenderField(<User users={users} />);
      setsectorBanner("Home - User Sector");
    }
  }, [view, users]);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-8">Generation Thailand</h1>
      <h1 className="text-4xl font-bold my-8">{sectorBanner}</h1>

      <div className="space-x-4 mb-8">
        <button
          onClick={() => setView("user")}
          className="px-4 py-2 bg-yellow-500 text-white rounded shadow"
        >
          User Home Sector
        </button>
        <button
          onClick={() => setView("admin")}
          className="px-4 py-2 bg-red-500 text-white rounded shadow"
        >
          Admin Home Sector
        </button>
      </div>
      {renderField}
    </div>
  );
};

export default Home;
