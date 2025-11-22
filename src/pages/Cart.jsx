import { useState } from "react";
import { useCart } from "../context/CartContext";

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

    console.log("Pedido simulado:", order);

    alert(
      "Tu pedido fue recibido (simulado).\n" +
        "Método de pago: " +
        (paymentMethod === "cash"
          ? "Pago al recibir"
          : "Transferencia/Depósito") +
        ".\nPodés conectar esto a un backend o WhatsApp más adelante."
    );

    clearCart();
  };

  return (
    <section className="py-5">
      <div className="container" style={{ maxWidth: "900px" }}>
        <h1 className="h3 mb-3">Carrito</h1>

        {items.length === 0 ? (
          <p className="text-muted">
            Tu carrito está vacío. Agregá una parrilla o accesorio desde el
            catálogo.
          </p>
        ) : (
          <>
            <ul className="list-group mb-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "80px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <div>
                      <h6 className="mb-1">{item.name}</h6>
                      <small className="text-muted">
                        ${item.price.toFixed(2)} c/u
                      </small>
                    </div>
                  </div>

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
                </li>
              ))}
            </ul>

            <div className="mb-4">
              <h2 className="h6 mb-2">Método de pago</h2>
              <div className="form-check">
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
              <div className="form-check">
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
                Podés conectar esto a un pago real (Stripe, Affirm, etc.) cuando
                tengas todo listo.
              </small>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>

              <div className="text-end">
                <div className="fw-bold fs-5 mb-2">
                  Total: ${totalPrice.toFixed(2)}
                </div>
                <button className="btn btn-danger" onClick={handleCheckout}>
                  Finalizar compra
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
