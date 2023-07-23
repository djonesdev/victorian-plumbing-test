import { useState, useEffect } from "react";
import axios from "axios";


function useProducts(filters) {
  const url = `${process.env.REACT_APP_BASE_URL}/interviews/listings?apikey=${process.env.REACT_APP_API_KEY}`;
  const [products, setProducts] = useState([]);
  const [currentFilters, setCurrentFilters] = useState(null)
  const [paginationData, setPaginationData] = useState(null)
  const [facetData, setFacetData] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async (filters) => {
    const response = await axios.post(url, filters);
    setProducts(response.data.products);
    setCurrentFilters(filters)
    setPaginationData(response.data.pagination)    
    setFacetData(response.data.facets)
  }

  const loadMore = async (filters) => {
    const response = await axios.post(url, filters);
    setProducts([...products, ...response.data.products]);
    setCurrentFilters(filters)
  }

  useEffect(() => {
    async function callUrl() {
      setError(null);
      setIsLoading(true);
      try {
        fetchProducts(filters)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    callUrl();
  }, [url]);


  return {
    products,
    currentFilters,
    pagination: paginationData,
    facets: facetData,
    fetchProducts,
    loadMore,
    isLoading,
    error,
  };
}

export default useProducts;
