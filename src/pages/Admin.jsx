import React, { useState } from "react";

const Admin = ({ users, addUser, setUsers }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = () => {
    const newUser = { name, lastName, position };
    addUser(newUser);
    setName("");
    setLastName("");
    setPosition("");
  };

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="text-center flex flex-col items-center">
      <div className="mb-8 mt-5">
        <h2 className="text-2xl font-bold mb-4">Create User Here</h2>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 m-2 rounded"
        />
        <input
          placeholder="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2 m-2 rounded"
        />
        <input
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="border p-2 m-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-purple-700 text-white rounded shadow"
        >
          Save
        </button>
      </div>
      <table className="table-auto w-3/6 border-collapse border border-gray-200 mt-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Position</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.lastName}</td>
              <td className="border p-2">{user.position}</td>
              <td className="border p-2">
                <button
                  className="bg-red-600 rounded py-1 px-2 text-white"
                  onClick={() => deleteUser(index)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
