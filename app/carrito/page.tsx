"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CarritoPage() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  async function handleCheckout() {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await response.json();

      console.log(data);

      if (data.init_point) {
        router.push(data.init_point);
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-black text-purple-500 mb-10">
        Carrito
      </h1>

      <div className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-8">

        {cart.length === 0 ? (
          <p className="text-gray-400">
            Tu carrito está vacío.
          </p>
        ) : (
          <>
            <div className="space-y-6 mb-10">

              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-zinc-800 pb-6"
                >

                  <div>

                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-gray-400">
                      Producto premium.
                    </p>

                  </div>

                  <div className="flex items-center gap-4">

                    <span className="text-2xl font-black text-purple-400">
                      ${item.price}
                    </span>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-xl font-bold"
                    >
                      Eliminar
                    </button>

                  </div>

                </div>
              ))}

            </div>

            <div className="flex items-center justify-between mb-10">

              <span className="text-3xl font-black">
                Total:
              </span>

              <span className="text-4xl font-black text-purple-500">
                ${total}
              </span>

            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-purple-600 hover:bg-purple-500 transition py-4 rounded-2xl text-xl font-black"
            >
              Finalizar Compra
            </button>

          </>
        )}

      </div>

    </main>
  );
}