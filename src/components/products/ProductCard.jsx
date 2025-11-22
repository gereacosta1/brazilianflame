export default function ProductCard({ product, onAdd, onView }) {
  const shortDesc =
    product.description.length > 70
      ? product.description.slice(0, 70) + "..."
      : product.description;

  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <div className="card shadow-sm h-100">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ objectFit: "cover", height: "180px" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="text-muted small">{shortDesc}</p>

          <div className="mt-auto d-flex flex-column gap-2">
            <div className="d-flex justify-content-between align-items-center">
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
