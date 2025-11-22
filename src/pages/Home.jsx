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
      {/* HERO */}
      <section className="hero-section">
        <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
          <div className="hero-text">
            <span className="hero-kicker">Churrasco brasileño en tu balcón</span>
            <h1 className="hero-title">
              Churrasco perfecto,
              <span className="hero-title-highlight"> sin complicarte la vida.</span>
            </h1>
            <p className="hero-subtitle">
              Parrillas y rotisseries modernas pensadas para balcones, terrazas
              y hogares pequeños. Minimalistas, potentes y listas para usar.
            </p>

            <div className="hero-actions">
              <Link to="/catalogo" className="btn btn-danger btn-lg">
                Ver parrillas
              </Link>
              <Link to="/catalogo" className="btn btn-outline-dark btn-lg hero-ghost-btn">
                Ver accesorios
              </Link>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-pill">
                <span className="hero-meta-dot" />
                Más de 10.000 hogares ya cocinaron con Brazilian Flame.
              </div>
              <span className="hero-meta-text">
                Instalación rápida · Soporte en español
              </span>
            </div>
          </div>

          <div className="hero-media w-100 w-md-50">
            <div className="hero-img-frame">
              <img
                src="/hero-grill.jpg"
                alt="Personas disfrutando de una parrilla Brazilian Flame"
                className="img-fluid hero-img"
              />
              <div className="hero-floating-card">
                <span className="hero-floating-label">Listo para usar en minutos</span>
                <span className="hero-floating-text">
                  Enchufás, ponés la carne y listo. Sin humo excesivo ni complicaciones.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-5">
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

      {/* DESTACADOS */}
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
