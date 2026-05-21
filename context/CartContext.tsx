"use client";

import { createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setCart((prev) => [...prev, item]);
  }

  function removeFromCart(id: number) {
  setCart((prev) =>
    prev.filter((item) => item.id !== id)
  );
}

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}