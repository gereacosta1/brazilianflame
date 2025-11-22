export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-4">
      <div className="container py-4 footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-mark" />
          <div className="footer-brand-text">
            <span className="footer-brand-name">Brazilian Flame</span>
            <span className="footer-brand-tagline">
              Churrasco perfecto en espacios pequeños.
            </span>
          </div>
        </div>

        <div className="footer-links">
          <a href="/catalogo">Parrillas</a>
          <a href="/catalogo">Accesorios</a>
          <a href="/sobre-nosotros">Sobre nosotros</a>
          <a href="/contacto">Contacto</a>
        </div>

        <div className="footer-meta">
          <span className="small">
            © {year} Brazilian Flame · Todos los derechos reservados
          </span>
          <span className="small footer-meta-note">
            Maqueta minimalista lista para convertirse en tienda real.
          </span>
        </div>
      </div>
    </footer>
  );
}
