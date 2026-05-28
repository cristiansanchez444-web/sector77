"use client";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function ProductPage() {

  const params = useParams();
  const slug = params.slug as string;

  const { addToCart } = useCart();
  const router = useRouter();

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-black">
          Producto no encontrado
        </h1>
      </main>
    );
  }

  function handleBuy() {
    addToCart({
      id: product!.id,
      title: product!.title,
      price: product!.numericPrice,
      quantity: 1,
    });

    router.push("/carrito");
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* IMAGEN */}
        <div className="relative bg-zinc-900 rounded-2xl h-[500px] border border-purple-500/20 overflow-hidden">

          <Image
            src={product!.image}
            alt={product!.title}
            fill
            className="object-cover"
          />

        </div>

        {/* INFO */}
        <div>

          <h1 className="text-5xl font-black mb-4">
            {product!.title}
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            {product!.description}
          </p>

          <span className="text-4xl font-black text-purple-400 block mb-8">
            {product!.price}
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