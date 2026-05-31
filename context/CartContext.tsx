"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;

  size?: string;
  finish?: string;

  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: CartItem) {
    setCart((prev) => {
      const existingItem = prev.find(
        (i) =>
          i.id === item.id &&
          i.size === item.size &&
          i.finish === item.finish
      );
  
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id &&
          i.size === item.size &&
          i.finish === item.finish
            ? {
                ...i,
                quantity: i.quantity + 1,
              }
            : i
        );
      }
  
      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(id: number) {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  function clearCart() {
    setCart([]);
  }

  function increaseQuantity(id: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id: number) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}