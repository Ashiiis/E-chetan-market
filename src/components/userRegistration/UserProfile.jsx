import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
const UserProfilePage = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
    profilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePhoto') {
      setForm({ ...form, profilePhoto: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data logic here
    console.log(form);
  };

  return (
    <div className='userprofile'>
        <Navbar/>
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <label htmlFor="profilePhoto" className="cursor-pointer">
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                {form.profilePhoto ? (
                  <img
                    src={URL.createObjectURL(form.profilePhoto)}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Upload
                  </div>
                )}
              </div>
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </div>

          {/* Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />

          {/* Mobile Number */}
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />

          {/* Address */}
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            rows={3}
            className="w-full border border-gray-300 px-4 py-2 rounded resize-none"
          ></textarea>

          {/* Change Password */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Change Password</h3>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default UserProfilePage;
