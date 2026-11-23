import { useState, useEffect } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // Cart state from Lab 3
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Search, filter, and sort state for Lab 4
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // 1. Debounce effect: wait 300ms after typing stops before updating debouncedSearch
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  // Derived filtered and sorted list (without mutating original products array)
  const filteredProducts = products
    .filter((product) => {
      const matchesKeyword = product.title
        .toLowerCase()
        .includes(debouncedSearch.trim().toLowerCase());
      const matchesCategory =
        category === "All" || product.category === category;
      return matchesKeyword && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "price-asc") return a.price - b.price;
      if (sortOrder === "price-desc") return b.price - a.price;
      return 0;
    });

  // 2. Document title effect: update browser tab title when result count changes
  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  const handleAddToCart = (productTitle) => {
    setCartCount((prevCount) => prevCount + 1);
    setLastAdded(productTitle);
  };

  const handleClearFilters = () => {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
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
        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
          category={category}
          onCategoryChange={setCategory}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          onClearFilters={handleClearFilters}
        />

        <div className="catalog-meta">
          <h2>Featured Products</h2>
          <span>
            Showing {filteredProducts.length} of {products.length} products
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <p className="empty-title">
              No products found. Try a different keyword or category.
            </p>
            <button
              type="button"
              className="clear-btn"
              onClick={handleClearFilters}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <section className="product-grid">
            {filteredProducts.map((product) => (
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
        )}
      </main>
    </div>
  );
}

export default App;