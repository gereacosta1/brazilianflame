import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAdd, onView }) {
  return (
    <div className="row">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onAdd={onAdd}
          onView={onView}
        />
      ))}
    </div>
  );
}
