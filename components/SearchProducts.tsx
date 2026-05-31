"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function SearchProducts() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const query = search.toLowerCase();

    return (
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.tags?.some((tag) =>
        tag.toLowerCase().includes(query)
      )
    );
  });

  return (
    <>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-10 bg-zinc-900 border border-purple-500/20 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
      />

      {search.trim() !== "" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              href={`/producto/${product.slug}`}
              image={product.image}
            />
          ))}

        </div>
      )}
    </>
  );
}