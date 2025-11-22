import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          <span className="navbar-brand-logo">
            <span className="brand-mark" />
            <span>Brazilian Flame</span>
          </span>
        </Link>

        {/* TOGGLER MOBILE */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-md-4 me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink end className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalogo">
                Parrillas y accesorios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobre-nosotros">
                Sobre nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>
          </ul>

          {/* BOTÓN CARRITO */}
          <Link
            to="/carrito"
            className="btn btn-outline-light btn-sm navbar-cart-btn d-flex align-items-center gap-2"
          >
            <span>🛒 Carrito</span>
            {totalItems > 0 && (
              <span className="badge bg-danger rounded-pill">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
