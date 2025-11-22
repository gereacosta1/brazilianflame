export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="small">
          © {year} GrillStore · Todos los derechos reservados
        </span>
        <span className="small text-muted">
          Maqueta minimalista lista para convertirse en tienda real.
        </span>
      </div>
    </footer>
  );
}
