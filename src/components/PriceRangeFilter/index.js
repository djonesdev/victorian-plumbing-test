import { useState } from "react";

import "./styles.css";

export default function PriceRangeFilter({ getProductsByFilter }) {
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const isPriceFilterButtonActive = minAmount && maxAmount;

  const onClick = () => {
    getProductsByFilter({
      facets: {
        prices: [
          {
            // I'm  not sure where the identifier would come from for custom amounts, I imagine it's just a UUID though
            identifier: "",
            value: {
              gte: minAmount,
              lte: maxAmount,
            },
          },
        ],
      },
    });
  };

  return (
    <div className="filter-section-price-range">
      <div>
        <span className="price-input-label">£ </span>
        <input
          value={minAmount}
          type="number"
          onChange={(e) => setMinAmount(e.target.value)}
          className="price-input"
          placeholder="Min"
        />
      </div>
      <div>
        <span className="price-input-label">to </span>
        <input
          value={maxAmount}
          type="number"
          onChange={(e) => setMaxAmount(e.target.value)}
          className="price-input"
          placeholder="Max"
        />
      </div>
      <button
        onClick={onClick}
        className={`filter-button active-${!!isPriceFilterButtonActive}`}
      >
        Go
      </button>
    </div>
  );
}
