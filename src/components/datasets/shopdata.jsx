import React, { useState } from 'react';
import axios from 'axios';

const ShopForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    description: '',
    category: '',
    email: '',
    ownerName: '',
    products: '',
    shopImage: null,
  });

  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'shopImage') {
      setForm((prev) => ({ ...prev, shopImage: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setLoading(true);

    // Basic validation
    if (!form.name || !form.phone) {
      setMsg('❌ Shop name and phone number are required.');
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('phone', form.phone);
      formData.append('description', form.description);
      formData.append('category', form.category);
      formData.append('email', form.email);
      formData.append('ownerName', form.ownerName);
      formData.append('products', JSON.stringify(form.products.split(',').map(p => p.trim())));
      if (form.shopImage) {
        formData.append('shopImage', form.shopImage);
      }

      const res = await axios.post('http://localhost:5000/api/create-shop', formData);
      setMsg('✅ Shop uploaded successfully!');
      setForm({
        name: '',
        phone: '',
        description: '',
        category: '',
        email: '',
        ownerName: '',
        products: '',
        shopImage: null,
      });
    } catch (err) {
      setMsg(err.response?.data?.error || '❌ Upload failed.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Shop</h2>

      {msg && <div className="text-sm text-center mb-4">{msg}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Shop Name *"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="text"
          name="ownerName"
          placeholder="Owner Name"
          value={form.ownerName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Grocery, Fashion)"
          value={form.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="text"
          name="products"
          placeholder="Products (comma-separated)"
          value={form.products}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="file"
          name="shopImage"
          accept="image/*"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Uploading...' : 'Submit Shop'}
        </button>
      </form>
    </div>
  );
};

export default ShopForm;
