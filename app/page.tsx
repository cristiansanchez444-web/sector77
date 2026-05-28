import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

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
          href="/categorias/anime"
          className="mt-10 bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-xl font-bold text-lg inline-block"
        >
          Ver Categorías
        </a>

      </section>

      {/* CATEGORÍAS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h3 className="text-4xl font-black mb-10">
          Categorías
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* ANIME */}
          <a
            href="/categorias/anime"
            className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300 cursor-pointer block"
          >

            <h4 className="text-2xl font-bold mb-2 text-purple-400">
              Anime
            </h4>

            <p className="text-gray-400">
              Stickers de anime y manga.
            </p>

          </a>

          {/* GAMING */}
          <a
            href="/categorias/gaming"
            className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300 cursor-pointer block"
          >

            <h4 className="text-2xl font-bold mb-2 text-purple-400">
              Gaming
            </h4>

            <p className="text-gray-400">
              Diseños gamer y retro.
            </p>

          </a>

          {/* AUTOS */}
          <a
            href="/categorias/autos"
            className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300 cursor-pointer block"
          >

            <h4 className="text-2xl font-bold mb-2 text-purple-400">
              Autos
            </h4>

            <p className="text-gray-400">
              Stickers para autos y motos.
            </p>

          </a>

          {/* PERSONALIZADOS */}
          <a
            href="/categorias/personalizados"
            className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300 cursor-pointer block"
          >

            <h4 className="text-2xl font-bold mb-2 text-purple-400">
              Personalizados
            </h4>

            <p className="text-gray-400">
              Diseños personalizados únicos.
            </p>

          </a>

        </div>

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