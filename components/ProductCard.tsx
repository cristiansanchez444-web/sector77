import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  price: string;
  href: string;
  image: string;
};

export default function ProductCard({
  title,
  description,
  price,
  href,
  image,
}: ProductCardProps) {
  return (
    <a
      href={href}
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300 block"
    >

      {/* IMAGEN */}
      <div className="relative h-64 bg-zinc-800">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

      </div>

      {/* INFO */}
      <div className="p-6">

        <h2 className="text-2xl font-black mb-2">
          {title}
        </h2>

        <p className="text-gray-400 mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">

          <span className="text-2xl font-black text-purple-400">
            {price}
          </span>

          <button className="bg-purple-600 hover:bg-purple-500 transition px-5 py-2 rounded-xl font-bold">
            Comprar
          </button>

        </div>

      </div>

    </a>
  );
}