import useProducts from "./utils/useProducts";
import "./App.css";
import {
  ProductCard,
  Loader,
  FilterProducts,
  ProductListHeader,
  Modal,
} from "./components";
import { useEffect, useState } from "react";
import useModal from "./utils/useModal";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [sortBy, setSortBy] = useState({ label: "Recommended", value: 1 });
  const [filters, setFilters] = useState({
    query: "toilets",
    pageNumber: 0,
    size: 0,
    additionalPages: 0,
    sort: sortBy.value,
  });

  const { isModalOpen, setIsModalOpen } = useModal();
  const {
    products,
    pagination,
    isLoading,
    error,
    facets,
    fetchProducts,
    loadMore,
  } = useProducts(filters);
  const showLoadMoreButton = pagination?.total >= products.length + 1;

  useEffect(() => {
    fetchProducts({
      ...filters,
      sort: sortBy.value,
    });
  }, [sortBy]);

  useEffect(() => {
    const handler = (e) => setIsMobile({ matches: !e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }, []);

  const getMoreProducts = () => {
    const newFilters = {
      ...filters,
      pageNumber: filters.pageNumber + 1,
    };
    setFilters(newFilters);
    loadMore(newFilters);
  };

  const getProductsByFilter = (filterOptions) => {
    const newFilters = {
      ...filters,
      ...filterOptions,
    };
    setFilters(newFilters);
    fetchProducts(newFilters);
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error...</p>;

  return (
    <header className="app-container">
      {!isMobile && (
        <div className="filter-list">
          <FilterProducts
            getProductsByFilter={getProductsByFilter}
            facetOptions={facets}
          />
        </div>
      )}
      <div>
        <ProductListHeader
          pagination={pagination}
          setSortBy={setSortBy}
          setIsModalOpen={setIsModalOpen}
        />
        <Modal handleClose={() => setIsModalOpen(false)} show={isModalOpen}>
          <FilterProducts
            getProductsByFilter={getProductsByFilter}
            facetOptions={facets}
          />
        </Modal>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        {showLoadMoreButton && (
          <button className="load-more-button" onClick={getMoreProducts}>
            Load More
          </button>
        )}
      </div>
    </header>
  );
}

export default App;
