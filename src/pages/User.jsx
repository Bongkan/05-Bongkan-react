import React from "react";

const User = ({ users }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <table className="table-auto w-3/6 border-collapse border border-gray-200 mt-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.lastName}</td>
              <td className="border p-2">{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
