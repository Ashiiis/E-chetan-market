import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config'; // import your initialized auth here
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
const SignupForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    if (form.password !== form.confirmPassword) {
      setMessage('❌ Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;
      setMessage(`✅ Account created for ${user.email}`);

      // Redirect or proceed to profile completion page...
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }

    setLoading(false);
  };

  return (
    <div className='signup'>
      <Navbar/>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      
      <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

      {message && <p className="text-center text-sm mb-3">{message}</p>}

      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Creating...' : 'Sign Up'}
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default SignupForm;
