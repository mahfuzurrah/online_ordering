import React, { useEffect, useState } from "react";
import { items } from "./FoodList";

const MultiFilters = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(items);

  const filters = ["All", "Hot Dishes", "Cold Dishes", "Soup", "Grill"];

  const handleFilterButtonClick = (selectedCategory) => {
    setSelectedFilter(selectedCategory);
  };

  useEffect(() => {
    filterItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  const filterItems = () => {
    if (selectedFilter === "All") {
      setFilteredItems([...items]);
    } else {
      const tempItems = items.filter(
        (item) => item.category === selectedFilter
      );
      setFilteredItems(tempItems);
    }
  };

  return (
    <div>
      <div className="overflow_area">
        <div className="buttons-container">
          {filters.map((category, idx) => (
            <button
              key={`filters-${idx}`}
              onClick={() => handleFilterButtonClick(category)}
              className={`c_btn ${selectedFilter === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="items-container">
        <div className="row">
          {filteredItems.map((item, idx) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={`item-${idx}`}>
              <div className="card">
                <div className="img_box">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item_info_price">
                  <span>{item.review}</span>
                  <p>${item.price}</p>
                </div>
                <h5 className="mt-2">{item.name}</h5>
                <p className="mt-2">{item.description}</p>
                <button className="btn mt-3">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiFilters;
