import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  viewState,
  searchTextState,
  productFilteredState,
  filteredCounts,
} from "../../recoil/ProductData";
const Sidebar = () => {
  const [view, setView] = useRecoilState(viewState);
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const [filter, setFilter] = useRecoilState(productFilteredState);
  const totalItems = useRecoilValue(filteredCounts);
  return (
    <div className="columns is-multiline">
      <div className="column is-12">
        <h2 className="subtitle">({totalItems}) products</h2>
        <div className="field has-addons">
          <div className="control">
            <button
              className={`button ${view == "column" ? `is-dark` : null}`}
              onClick={() => setView("column")}
            >
              <i class="fas fa-th-large"></i>
            </button>
          </div>
          <div className="control">
            <button
              className={`button ${view == "row" ? `is-dark` : null}`}
              onClick={() => setView("row")}
            >
              <i class="fas fa-grip-horizontal"></i>
            </button>
          </div>
        </div>
        <h3 className="subtitle is-6 mb-2">Search Products</h3>
        <input
          class="input"
          type="text"
          placeholder="Search your product..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="column is-12">
        <h3 className="subtitle is-6 mb-2">Filter</h3>
        <div class="select is-fullwidth">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">Show all</option>
            <option value="beverages">Beverages</option>
            <option value="biryanis">Biryanis</option>
            <option value="burgers">Burgers</option>
            <option value="cakes&desserts">Cakes and Desserts</option>
            <option value="chinese">Chinese</option>
            <option value="pastas">Pastas</option>
            <option value="pizzas">Pizzas</option>
            <option value="salads">Salads</option>
            <option value="sandwiches">Sandwiches</option>
            <option value="snacks">Snacks</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
