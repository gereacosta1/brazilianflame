import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h1 className="display-6 mb-3">Página no encontrada</h1>
        <p className="text-muted mb-4">
          La página que estás buscando no existe o fue movida.
        </p>
        <Link to="/" className="btn btn-dark">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
