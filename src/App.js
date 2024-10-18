import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addUser = (user) => {
    // Prevent duplicate email entries
    const duplicate = users.some(
      (existingUser) => existingUser.email === user.email
    );
    if (!duplicate) {
      if (editingUser) {
        // If editing, update the user
        setUsers(users.map((u) => (u.email === editingUser.email ? user : u)));
        setEditingUser(null);
      } else {
        // If adding, add new user
        setUsers([...users, user]);
      }
    } else {
      alert("Email ID already exists.");
    }
  };

  const editUser = (email) => {
    const user = users.find((u) => u.email === email);
    setEditingUser(user);
  };

  const deleteUser = (email) => {
    setUsers(users.filter((u) => u.email !== email));
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 bg-slate-300">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-green-500">Manage Users</h1>
        <button className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600">
          + Add
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for email"
          className="border rounded-lg p-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <UserForm addUser={addUser} editingUser={editingUser} />

      <UserList
        users={filteredUsers}
        editUser={editUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
