import { useState } from "react";
import { useCart } from "../context/CartContext";

// 👉 PONÉ ACÁ TU LINK DE PAGO REAL (Stripe Payment Link, MercadoPago, PayPal, etc.)
const PAYMENT_LINK_URL = "https://TU_LINK_DE_PAGO_AQUI.com";

export default function Cart() {
  const {
    items,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleCheckout = () => {
    if (!items.length) return;

    const order = {
      items,
      total: totalPrice,
      paymentMethod,
      createdAt: new Date().toISOString(),
    };

    // Guardamos el pedido para debug / registro simple
    try {
      localStorage.setItem("bf_last_order", JSON.stringify(order));
    } catch (err) {
      console.warn("No se pudo guardar el pedido en localStorage:", err);
    }

    console.log("Pedido listo para enviar al backend / pago:", order);

    if (PAYMENT_LINK_URL && PAYMENT_LINK_URL.startsWith("http")) {
      // 👉 Acá se hace la "magia": redirigís al link de pago que definas
      window.location.href = PAYMENT_LINK_URL;
    } else {
      // Fallback por si no configuraste el link todavía
      alert(
        "Tu pedido fue generado (simulado), pero todavía no configuraste un método de pago real.\n\n" +
          "Editá la constante PAYMENT_LINK_URL en Cart.jsx con tu link de Stripe / MercadoPago / PayPal."
      );
    }
  };

  return (
    <section className="py-5">
      <div className="container" style={{ maxWidth: "1000px" }}>
        <h1 className="h3 mb-4">Carrito</h1>

        {items.length === 0 ? (
          <p className="text-muted">
            Tu carrito está vacío. Agregá una parrilla o accesorio desde el
            catálogo.
          </p>
        ) : (
          <div className="row g-4">
            {/* LISTA DE PRODUCTOS */}
            <div className="col-lg-8">
              <ul className="list-group">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item border-0 mb-3 shadow-sm rounded-3"
                  >
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                      {/* Imagen + info */}
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "80px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "0.75rem",
                          }}
                        />
                        <div>
                          <h6 className="mb-1">{item.name}</h6>
                          <small className="text-muted">
                            ${item.price.toFixed(2)} c/u
                          </small>
                        </div>
                      </div>

                      {/* Cantidad */}
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>

                      {/* Subtotal + quitar */}
                      <div className="text-end">
                        <div className="fw-bold mb-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          className="btn btn-sm btn-link text-danger p-0"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESUMEN Y PAGO */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h6 mb-3">Resumen de compra</h2>

                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted small">Subtotal</span>
                    <span className="fw-semibold">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <small className="text-muted d-block mb-3">
                    Envío e impuestos se pueden definir más adelante.
                  </small>

                  <hr className="my-3" />

                  <h3 className="h6 mb-2">Método de pago preferido</h3>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="payCash"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="payCash">
                      Pago al recibir (efectivo / POS)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="payTransfer"
                      name="payment"
                      value="transfer"
                      checked={paymentMethod === "transfer"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="payTransfer">
                      Transferencia / depósito (te enviamos los datos luego)
                    </label>
                  </div>

                  <small className="text-muted d-block mt-1">
                    El botón de abajo te puede llevar directamente a un link de
                    pago (Stripe, MercadoPago, PayPal, etc.).
                  </small>

                  <button
                    className="btn btn-danger w-100 mt-3"
                    onClick={handleCheckout}
                  >
                    Finalizar compra y pagar
                  </button>

                  <button
                    className="btn btn-outline-secondary w-100 mt-2"
                    onClick={clearCart}
                  >
                    Vaciar carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
