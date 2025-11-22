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
        {/* HEADER + FILTROS */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
          <div>
            <h1 className="h3 mb-1">Catálogo de productos</h1>
            <p className="text-muted mb-1">
              Elegí tu parrilla, cuchillos o accesorios ideales para tu espacio.
            </p>
            <p className="small text-muted mb-0">
              {filtered.length} producto
              {filtered.length !== 1 && "s"} disponible
              {filtered.length !== 1 && "s"}
              {category !== "all" && " en esta categoría"}.
            </p>
          </div>

          <div className="d-flex flex-wrap gap-2 bg-white rounded-pill p-2 shadow-sm">
            {CATEGORIES.map((c) => {
              const isActive = category === c.id;
              return (
                <button
                  key={c.id}
                  className={
                    "btn btn-sm rounded-pill " +
                    (isActive ? "btn-danger text-white" : "btn-light text-dark")
                  }
                  onClick={() => setCategory(c.id)}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* GRID DE PRODUCTOS */}
        <ProductGrid
          products={filtered}
          onAdd={addToCart}
          onView={(p) => setSelected(p)}
        />

        {/* MODAL DE PRODUCTO */}
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
