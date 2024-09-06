import "./catalog.css";
import { useState, useMemo } from "react";

const Filter = ({ filterCatalog, allCatalog }) => {
  const [activeCatalog, setActiveCatalog] = useState(allCatalog[0]);

  const handleFilter = (catalog) => {
    setActiveCatalog(catalog);
    filterCatalog(catalog);
  };

  return (
    <ul>
      {allCatalog.map((catalog, index) => (
        <li
          key={index}
          onClick={() => handleFilter(catalog)}
          className={catalog === activeCatalog ? "active" : ""}
        >
          {catalog.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
