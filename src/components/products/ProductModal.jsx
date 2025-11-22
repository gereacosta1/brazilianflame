import { Modal, Button } from "react-bootstrap";

export default function ProductModal({ product, show, onClose, onAdd }) {
  if (!product) return null;

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid rounded mb-3"
          style={{ maxHeight: "260px", objectFit: "cover", width: "100%" }}
        />
        <p className="text-muted">{product.description}</p>

        {product.details && (
          <ul className="small">
            {product.details.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        )}

        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fw-bold fs-5">${product.price.toFixed(2)}</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" size="sm" onClick={onClose}>
          Cerrar
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => {
            onAdd(product);
            onClose();
          }}
        >
          Agregar al carrito
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
