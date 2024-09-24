// import React, { useState, createContext } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems(cartItems.filter(item => item.id !== itemId));
//   };

//   const getItemCount = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getItemCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If the item already exists, update its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
