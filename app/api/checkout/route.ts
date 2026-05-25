import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export async function POST() {
  try {
    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: [
          {
            id: "naruto-pack",
            title: "Naruto Pack",
            quantity: 1,
            unit_price: 4500,
            currency_id: "ARS",
          },
        ],

        back_urls: {
          success: "http://localhost:3000/gracias",
          failure: "http://localhost:3000/carrito",
          pending: "http://localhost:3000/carrito",
        },

      },
    });

    return NextResponse.json({
      init_point: response.init_point,
    });

  } catch (error) {
    console.log("MP ERROR:", error);

    return NextResponse.json(
      {
        error: "Error creando checkout",
      },
      {
        status: 500,
      }
    );
  }
}