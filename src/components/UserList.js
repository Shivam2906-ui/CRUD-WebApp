import React from "react";

function UserList({ users, editUser, deleteUser }) {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl mb-4 font-semibold">User List</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Phone No.</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Department</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">
                {user.firstName} {user.lastName}
              </td>
              <td className="border px-4 py-2">{user.phone}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.location}</td>
              <td className="border px-4 py-2">{user.department}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => editUser(user.email)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 ml-2 rounded"
                  onClick={() => deleteUser(user.email)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
