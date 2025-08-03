import React from 'react';
import { useCart } from './cardContext';

const CartPage = () => {
  const { cartItems, total } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <div className="text-right text-lg font-semibold text-green-700">Subtotal: ₹{total}</div>

      <div className="mt-4 space-y-4">
        {cartItems.map((item, i) => (
          <div key={i} className="flex gap-4 items-center border p-2 rounded-md shadow-sm">
            <img src={item.image || '/default-product.jpg'} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="font-bold text-green-600">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
