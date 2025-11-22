import { useState } from "react";
import productsData from "../data/products";
import ProductGrid from "../components/products/ProductGrid";
import ProductModal from "../components/products/ProductModal";
import { useCart } from "../context/CartContext";

const CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "parrillas", label: "Parrillas" },
  { id: "accesorios", label: "Accesorios" },
  { id: "cuchillos", label: "Cuchillos" },
];

export default function Catalog() {
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null);
  const { addToCart } = useCart();

  const filtered =
    category === "all"
      ? productsData
      : productsData.filter((p) => p.category === category);

  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
          <div>
            <h1 className="h3 mb-1">Catálogo de productos</h1>
            <p className="text-muted mb-0">
              Elegí tu parrilla, cuchillos o accesorios ideales para tu espacio.
            </p>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={
                  "btn btn-sm " +
                  (category === c.id ? "btn-danger" : "btn-outline-dark")
                }
                onClick={() => setCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <ProductGrid
          products={filtered}
          onAdd={addToCart}
          onView={(p) => setSelected(p)}
        />

        <ProductModal
          product={selected}
          show={!!selected}
          onClose={() => setSelected(null)}
          onAdd={addToCart}
        />
      </div>
    </section>
  );
}
