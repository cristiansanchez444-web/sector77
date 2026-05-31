"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CarritoPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const router = useRouter();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  async function handleCheckout() {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          items: cart.map((item) => ({
            id: item.id.toString(),
            title: item.title,
            quantity: item.quantity,
            unit_price: item.price,
            currency_id: "ARS",
          })),
        }),
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

                    <div className="text-gray-400">

                    {item.size && (
                    <p>
                      Tamaño: {
                        item.size === "small"
                          ? "4 cm"
                          : item.size === "medium"
                          ? "7-8 cm"
                          : "10-12 cm"
                      }
                    </p>
                  )}

                  {item.finish && (
                    <p>
                      Terminación: {
                        item.finish === "classic"
                          ? "Clásico"
                          : "Premium"
                      }
                    </p>
                  )}

                    </div>
                    <div className="flex items-center gap-3 mt-2">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-zinc-800 hover:bg-zinc-700 w-8 h-8 rounded-lg font-black"
                      >
                        -
                      </button>

                      <span className="text-purple-400 font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-zinc-800 hover:bg-zinc-700 w-8 h-8 rounded-lg font-black"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <span className="text-2xl font-black text-purple-400">
                      ${item.price * item.quantity}
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