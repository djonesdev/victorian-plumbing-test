import FacetOptionList from "../FacetOptionFilter";
import Text from "../Text";

import "./styles.css";

export default function FilterProducts({ getProductsByFilter, facetOptions }) {
  return (
    <div className="filter-container">
      <Text type="primary" size="lrg" className="filter-title">Filter By</Text>
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
