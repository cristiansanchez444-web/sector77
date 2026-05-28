"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function NarutoPackPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  function handleBuy() {
    addToCart({
      id: 1,
      title: "Naruto Pack",
      price: 4500,
      quantity: 0
    });

    router.push("/carrito");
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* IMAGEN */}
        <div className="relative bg-zinc-900 rounded-2xl h-[500px] border border-purple-500/20 overflow-hidden">

          <Image
            src="/stickers/naruto.webp"
            alt="Naruto Pack"
            fill
            className="object-cover"
          />

        </div>

        {/* INFO */}
        <div>

          <h1 className="text-5xl font-black mb-4">
            Naruto Pack
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Stickers holográficos premium de anime.
          </p>

          <span className="text-4xl font-black text-purple-400 block mb-8">
            $4500
          </span>

          <button
            onClick={handleBuy}
            className="bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-xl font-bold text-lg"
          >
            Comprar Ahora
          </button>

        </div>

      </div>

    </main>
  );
}