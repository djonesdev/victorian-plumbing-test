import PriceRangeFilter from "../PriceRangeFilter";
import Text from "../Text";

import "./styles.css";

export default function FacetOptionList({ facet, getProductsByFilter }) {
  const { displayName, options, identifier } = facet;

  const onClickFacetOption = (option) => {
    getProductsByFilter({
      facets: {
        [identifier]: [
          {
            identifier: option.identifier,
            value: option.value,
          },
        ],
      },
    });
  };

  return (
    <div className="filter-section">
      <Text type="primary" size="lrg" className="filter-subtitle">{displayName}</Text>
      {identifier === "prices" && (
        <PriceRangeFilter getProductsByFilter={getProductsByFilter} />
      )}
      <ul>
        {options.map((option) => (
          <li>
            <div className="facet-option-container">
              <input
                type="checkbox"
                onClick={() => onClickFacetOption(option)}
                aria-label="FacetCheckBox"
              />
              <Text type="primary" size="md">
                {option.displayValue}
              </Text>
              {option.productCount && (
                <Text type="secondary" size="md">
                  ({option.productCount})
                </Text>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
