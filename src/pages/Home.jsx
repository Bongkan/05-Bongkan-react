import React from "react";

const Home = () => {
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
    </div>
  );
};

export default Home;
