import React, { useState, useEffect } from "react";

function UserForm({ addUser, editingUser }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "",
    location: "",
    department: "",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => !field)) {
      alert("All fields are mandatory.");
      return;
    }
    addUser(formData);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      role: "",
      location: "",
      department: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-4 rounded-lg mb-4 relative"
    >
      <div className="absolute right-4 top-4 text-gray-600">
        All fields are mandatory
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>First Name <span className="text-red-700">*</span></label>
          <input
            type="text"
            name="firstName"
            className="border rounded-lg p-2 w-full"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name <span className="text-red-700">*</span></label>
          <input
            type="text"
            name="lastName"
            className="border rounded-lg p-2 w-full"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone <span className="text-red-700">*</span></label>
          <input
            type="text"
            name="phone"
            className="border rounded-lg p-2 w-full"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email ID <span className="text-red-700">*</span></label>
          <input
            type="email"
            name="email"
            className="border rounded-lg p-2 w-full"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Role <span className="text-red-700">*</span></label>
          <input
            type="text"
            name="role"
            className="border rounded-lg p-2 w-full"
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location <span className="text-red-700">*</span></label>
          <input
            type="text"
            name="location"
            className="border rounded-lg p-2 w-full"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label>Department <span className="text-red-700">*</span></label>
        <input
          type="text"
          name="department"
          className="border rounded-lg p-2 w-full"
          value={formData.department}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
      >
        {editingUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;
