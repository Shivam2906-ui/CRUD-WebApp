import { useState } from "react";

export default function SearchBar({ users, setSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const results = users.filter((user) => user.email.includes(value));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search by Email"
      className="border p-2 w-full mb-4"
    />
  );
}
