import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/products/ProductCard";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import ProductModal from "../components/products/ProductModal";

export default function Home() {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState(null);
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="hero-section text-center text-md-start py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
          <div className="hero-text">
            <h1 className="display-5 fw-bold mb-3">
              Churrasco perfecto, sin complicarte la vida.
            </h1>
            <p className="lead text-muted mb-4">
              Parrillas y rotisseries modernas pensadas para balcones, terrazas
              y hogares pequeños. Minimalistas, potentes y listas para usar.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Link to="/catalogo" className="btn btn-danger btn-lg">
                Ver parrillas
              </Link>
              <Link to="/catalogo" className="btn btn-outline-dark btn-lg">
                Ver accesorios
              </Link>
            </div>
            <p className="small text-muted mt-3">
              Más de 10.000 hogares ya cocinaron con Brazilian Flame.
            </p>
          </div>

          <div className="w-100 w-md-50">
            <img
              src="/hero-grill.jpg"
              alt="Personas disfrutando de una parrilla Brazilian Flame"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <h2 className="h5 text-center mb-3 section-title">Cómo funciona</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card hero-step-card h-100 text-center">
                <div className="card-body">
                  <h3 className="h6 mb-1">1. Elegís tu modelo</h3>
                  <p className="small text-muted mb-0">
                    Seleccioná la parrilla o kit que mejor se adapte a tu
                    espacio y cantidad de personas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card hero-step-card h-100 text-center">
                <div className="card-body">
                  <h3 className="h6 mb-1">2. Envío rápido</h3>
                  <p className="small text-muted mb-0">
                    Te la enviamos lista para instalar, con soporte en español
                    si necesitás ayuda.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card hero-step-card h-100 text-center">
                <div className="card-body">
                  <h3 className="h6 mb-1">3. Churrasco en casa</h3>
                  <p className="small text-muted mb-0">
                    Solo encendés, ponés la carne y disfrutás con amigos o
                    familia sin complicarte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h5 mb-0 section-title">Productos destacados</h2>
            <Link to="/catalogo" className="small text-danger">
              Ver todo el catálogo
            </Link>
          </div>

          <div className="row">
            {featured.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAdd={addToCart}
                onView={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selected}
        show={!!selected}
        onClose={() => setSelected(null)}
        onAdd={addToCart}
      />
    </>
  );
}
