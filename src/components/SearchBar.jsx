import "./SearchBar.css";

function SearchBar({
  searchText,
  onSearchChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortChange,
  onClearFilters,
}) {
  return (
    <section className="search-bar" aria-label="Product search and filters">
      <div className="search-input-group">
        <label htmlFor="search-keyword" className="sr-only">
          Search products
        </label>
        <input
          id="search-keyword"
          type="text"
          className="search-input"
          placeholder="Search products by name..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filter-controls">
        <div className="control-group">
          <label htmlFor="category-select">Category</label>
          <select
            id="category-select"
            className="filter-select"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="School Supplies">School Supplies</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="sort-select">Sort By</label>
          <select
            id="sort-select"
            className="filter-select"
            value={sortOrder}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <button
          type="button"
          className="clear-btn"
          onClick={onClearFilters}
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
}

export default SearchBar;