import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import SearchProducts from "@/components/SearchProducts";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <Image
          src="/logo.png"
          alt="Sector 77"
          width={260}
          height={260}
          className="mb-8"
        />

        <h2 className="text-5xl md:text-7xl font-black mb-4">
          STICKERS
          <span className="text-purple-500"> PREMIUM</span>
        </h2>

        <p className="text-gray-400 max-w-2xl text-lg">
          Diseños únicos, holográficos y personalizados.
        </p>

        <a
          href="/categorias"
          className="mt-10 bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-xl font-bold text-lg inline-block"
        >
          Ver Categorías
        </a>

      </section>

      {/* BUSCADOR */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

      <h3 className="text-4xl font-black mb-4">
        Buscar Productos
      </h3>

      <p className="text-gray-400 mb-8">
        Encontrá rápidamente cualquier sticker o pack.
      </p>

      <SearchProducts />

    </section>


      {/* PRODUCTOS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h3 className="text-4xl font-black mb-10">
          Destacados
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.slice(0, 3).map((product) => (
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

      </section>

    </main>
  );
}