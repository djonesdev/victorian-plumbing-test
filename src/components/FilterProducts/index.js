import FacetOptionList from "../FacetOptionFilter";

import "./styles.css";

export default function FilterProducts({ getProductsByFilter, facetOptions }) {
  return (
    <div className="filter-container">
      <h4 className="filter-title">Filter By</h4>
      <div className="price-filter-container">
        {facetOptions?.map((facet) => (
          <FacetOptionList
            facet={facet}
            getProductsByFilter={getProductsByFilter}
          />
        ))}
      </div>
    </div>
  );
}
