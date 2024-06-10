import React, { useState } from "react";
import Admin from "./Admin";
import User from "./User";

const Home = ({ users, addUser, setUsers }) => {
  const [view, setView] = useState("home");

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-8">
        Generation Thailand React - Assessment
      </h1>
      <div className="space-x-4 mb-8">
        <button
          onClick={() => setView("user")}
          className="px-4 py-2 bg-green-500 text-white rounded shadow"
        >
          User Home Sector
        </button>
        <button
          onClick={() => setView("admin")}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          Admin Home Sector
        </button>
      </div>
      {view === "admin" && (
        <Admin users={users} addUser={addUser} setUsers={setUsers} />
      )}
      {view === "user" && <User users={users} />}
    </div>
  );
};

export default Home;
