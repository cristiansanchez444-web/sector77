"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const { cart } = useCart();

  return (
    <Link
      href="/carrito"
      className="hover:text-purple-400 transition flex items-center gap-2"
    >

      <span>
        Carrito
      </span>

      <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
        {cart.length}
      </span>

    </Link>
  );
}