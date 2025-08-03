// src/context/CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
