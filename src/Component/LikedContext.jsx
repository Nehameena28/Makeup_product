
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleLike = (product) => {
    const isAlreadyLiked = likedProducts.some(p => p.id === product.id);
    if (isAlreadyLiked) {
      setLikedProducts(prev => prev.filter(p => p.id !== product.id));
      toast.success("Product unliked! 💔");
    } else {
      setLikedProducts(prev => [...prev, product]);
      toast.success("Added to favorites! ❤️");
    }
  };

  const addToCart = (product) => {
    const isAlreadyInCart = cart.some(p => p.id === product.id);
    if (!isAlreadyInCart) {
      setCart(prev => [...prev, product]);
    }
     toast.success("Item added to cart! 🛒");
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(p => p.id !== productId));
    toast.success("Item removed from cart! 🛒");
  };

  return (
    <LikedContext.Provider
      value={{ likedProducts, toggleLike, cart, addToCart, removeFromCart }}
    >
      {children}
    </LikedContext.Provider>
  );
};
