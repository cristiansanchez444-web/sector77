"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function ProductPage() {

  const params = useParams();
  const slug = params.slug as string;

  const { addToCart } = useCart();
  const router = useRouter();

  const [size, setSize] = useState("small");
  const [finish, setFinish] = useState("classic");

  const product = products.find(
    (p) => p.slug === slug
  );

  const dynamicPrice =
  product?.category === "futbol"
    ? product.pricing?.[size]?.[finish]
    : product?.numericPrice;

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
      price: dynamicPrice,
    
      size,
      finish,
    
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

          {/* TAMAÑO */}

          <div className="mb-6">

          <h3 className="font-bold mb-3">
            Tamaño
          </h3>

          <div className="flex gap-3">

            <button
              onClick={() => setSize("small")}
              className={`px-4 py-2 rounded-xl border ${
                size === "small"
                  ? "bg-purple-600 border-purple-600"
                  : "border-zinc-700"
              }`}
            >
              4 cm
            </button>

            <button
              onClick={() => setSize("medium")}
              className={`px-4 py-2 rounded-xl border ${
                size === "medium"
                  ? "bg-purple-600 border-purple-600"
                  : "border-zinc-700"
              }`}
            >
              7-8 cm
            </button>

            <button
              onClick={() => setSize("large")}
              className={`px-4 py-2 rounded-xl border ${
                size === "large"
                  ? "bg-purple-600 border-purple-600"
                  : "border-zinc-700"
              }`}
            >
              10-12 cm
            </button>

          </div>

          </div>

          {/* TERMINACIÓN */}
          <div className="mb-8">

          <h3 className="font-bold mb-3">
            Terminación
          </h3>

          <div className="flex gap-3">

            <button
              onClick={() => setFinish("classic")}
              className={`px-4 py-2 rounded-xl border ${
                finish === "classic"
                  ? "bg-purple-600 border-purple-600"
                  : "border-zinc-700"
              }`}
            >
              Clásico
            </button>

            <button
              onClick={() => setFinish("premium")}
              className={`px-4 py-2 rounded-xl border ${
                finish === "premium"
                  ? "bg-purple-600 border-purple-600"
                  : "border-zinc-700"
              }`}
            >
              Premium
            </button>

          </div>

          </div>

          <span className="text-4xl font-black text-purple-400 block mb-8">
              ${dynamicPrice}
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