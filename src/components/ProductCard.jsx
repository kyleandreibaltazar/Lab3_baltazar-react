import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  const formattedPrice = `₱${price.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <article className={`product-card ${!inStock ? "out-of-stock" : ""}`}>
      <div>
        <div className="card-top">
          <span className="category-tag">{category}</span>
          {children && <div className="badge-container">{children}</div>}
        </div>

        <div className="card-body">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">{formattedPrice}</p>
        </div>
      </div>

      <div className="card-footer">
        <span className={`stock-status ${inStock ? "in" : "out"}`}>
          {inStock ? "In Stock" : "Out of Stock"}
        </span>

        <button
          type="button"
          className="add-btn"
          disabled={!inStock}
          onClick={() => onAddToCart(title)}
        >
          {inStock ? "+ Add to Cart" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;