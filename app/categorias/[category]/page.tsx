import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {

  const { category } = await params;

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  if (categoryProducts.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-black">
          Categoría no encontrada
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <section className="mb-12">

        <h1 className="text-5xl font-black text-purple-500 mb-4 capitalize">
          {category}
        </h1>

        <p className="text-gray-400 text-lg">
          Productos premium de {category}.
        </p>

      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {categoryProducts.map((product) => (
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

    </main>
  );
}