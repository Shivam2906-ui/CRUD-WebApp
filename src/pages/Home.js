import { useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addUser = (user) => {
    if (users.some((u) => u.email === user.email)) {
      alert("Email ID already exists!");
      return;
    }
    setUsers([...users, user]);
  };

  const deleteUser = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  const editUser = (updatedUser) => {
    setUsers(
      users.map((u) => (u.email === updatedUser.email ? updatedUser : u))
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Manage User</h1>
        <button className="flex items-center bg-blue-500 text-white p-2 rounded-full">
          + Add
        </button>
      </div>

      <SearchBar users={users} setSearchResults={setSearchResults} />

      <div className="mt-4 border p-6 rounded-lg">
        <div className="text-right mb-2 text-red-500 font-semibold">
          All fields are mandatory
        </div>
        <UserForm onSubmit={addUser} />
      </div>

      <UserList
        users={searchResults.length ? searchResults : users}
        onDelete={deleteUser}
      />
    </div>
  );
}
