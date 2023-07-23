import { useState, useEffect } from "react";
import Text from "../Text";

import "./styles.css";
import DropdownSelector from "../DropdownSelector";

export default function ProductListHeader({ pagination, setSortBy, setIsModalOpen }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handler = (e) => setIsMobile({ matches: !e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }, []);

  const dropdownOptions = [
    { label: "Recommended", value: 1 },
    { label: "Lowest Price", value: 2 },
    { label: "Highest Price", value: 3 },
    { label: "Highest discount", value: 4 },
  ];

  return (
    <div className="dropdown-container">
      {isMobile && (
        <button onClick={() => setIsModalOpen(true)} className="mobile-filter-modal-button">Filter</button>
      )}
      <DropdownSelector
        options={dropdownOptions}
        setSelectedOption={setSortBy}
      />
      {pagination && !isMobile && (
        <Text type="primary" size="lrg">
          {pagination.total} results
        </Text>
      )}
    </div>
  );
}
