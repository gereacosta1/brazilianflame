export default function ProductCard({ product, onAdd, onView }) {
  const shortDesc =
    product.description.length > 80
      ? product.description.slice(0, 80) + "..."
      : product.description;

  const categoryLabelMap = {
    parrillas: "Parrilla",
    accesorios: "Accesorio",
    cuchillos: "Cuchillo",
  };

  const categoryLabel =
    categoryLabelMap[product.category] ?? product.category ?? "Producto";

  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <div className="card shadow-sm h-100 border-0">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ objectFit: "cover", height: "180px" }}
        />

        <div className="card-body d-flex flex-column">
          <span className="badge bg-light text-muted text-uppercase mb-1">
            {categoryLabel}
          </span>

          <h5 className="card-title mb-1">{product.name}</h5>
          <p className="text-muted small mb-2">{shortDesc}</p>

          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-bold">${product.price.toFixed(2)}</span>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-dark btn-sm w-50"
                onClick={() => onView(product)}
              >
                Ver detalles
              </button>
              <button
                className="btn btn-danger btn-sm w-50"
                onClick={() => onAdd(product)}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
