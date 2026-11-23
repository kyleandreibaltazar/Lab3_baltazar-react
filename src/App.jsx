import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const handleAddToCart = (productTitle) => {
    setCartCount((prevCount) => prevCount + 1);
    setLastAdded(productTitle);
  };

  return (
    <div className="app-wrapper">
      <header className="store-header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-icon">C</div>
            <div className="brand-text">
              <h1>CvSU Mini Store</h1>
              <span>Campus Tech &amp; Essentials</span>
            </div>
          </div>

          <div
            className={`cart-banner ${cartCount > 0 ? "has-items" : ""}`}
            role="status"
            aria-live="polite"
          >
            <span className="cart-dot" />
            {cartCount === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <p>
                Items added to cart: <strong>{cartCount}</strong> (Last added:{" "}
                <strong>{lastAdded}</strong>)
              </p>
            )}
          </div>
        </div>
      </header>

      <main className="app-container">
        <div className="catalog-meta">
          <h2>Featured Products</h2>
          <span>Showing {products.length} items</span>
        </div>

        <section className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
            >
              {product.badge && <span>{product.badge}</span>}
            </ProductCard>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;