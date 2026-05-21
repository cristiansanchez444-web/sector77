import ProductCard from "@/components/ProductCard";

export default function AnimePage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      {/* TITULO */}
      <section className="mb-12">

        <h1 className="text-5xl font-black text-purple-500 mb-4">
          Anime
        </h1>

        <p className="text-gray-400 text-lg">
          Stickers y packs premium de anime y manga.
        </p>

      </section>

      {/* PRODUCTOS */}
      <section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <ProductCard
            title="Naruto Pack"
            description="Stickers holográficos premium."
            price="$4500"
            href="/producto/naruto-pack"
            image="/stickers/naruto.webp"
          />

          <ProductCard
            title="One Piece Pack"
            description="Stickers holográficos premium."
            price="$4500"
            href="/producto/naruto-pack"
            image="/stickers/onepiece.jpg"
          />

          <ProductCard
            title="Dragon Ball Pack"
            description="Stickers holográficos premium."
            price="$4500"
            href="/producto/naruto-pack"
            image="/stickers/dragonball.webp"
          />

        </div>

      </section>

    </main>
  );
}