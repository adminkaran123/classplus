import React, { useState } from "react";

export default function Search({ setSearch, search, handleSearch }) {
  const [showSearch, setShowSearch] = useState(false);
  let getLocalSearch = localStorage.getItem("recent-search")
    ? JSON.parse(localStorage.getItem("recent-search"))
    : [];
  const saveToLocal = (item) => {
    let getLocalSearch = localStorage.getItem("recent-search")
      ? JSON.parse(localStorage.getItem("recent-search"))
      : [];
    if (item !== "") {
      if (getLocalSearch.length < 5) {
        if (getLocalSearch.indexOf(item) == -1) {
          getLocalSearch.splice(item, getLocalSearch.indexOf(item));
        }
        getLocalSearch.unshift(item);
        getLocalSearch.pop();
      }
    }

    localStorage.setItem("recent-search", JSON.stringify(getLocalSearch));
  };
  return (
    <div className="search-wrapper">
      <h1>Search Photos</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(search);
          saveToLocal(search);
          setShowSearch(false);
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onClick={() => {
            setShowSearch(true);
          }}
        />
        <button type="submit">Search</button>
        {showSearch && (
          <ul id="searchSuggestion" class="dropdown-content">
            <li className="search-header">Recent Searches:</li>
            {getLocalSearch.map((item) => {
              return (
                <li>
                  <a
                    href="javascript:void();"
                    onClick={() => {
                      setSearch(item);
                      setShowSearch(false);
                      handleSearch(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => {
                  setSearch("");
                  setShowSearch(false);
                  handleSearch("");
                }}
              >
                Clear
              </button>
            </li>
          </ul>
        )}
      </form>
    </div>
  );
}
