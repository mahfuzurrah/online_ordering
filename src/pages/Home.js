import React from "react";
import MultiFilters from "../components/Filter/MultiFilters";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoryMenu from "../components/Toggle/CategoryMenu";


function Home() {
  const icons = ['coffee', 'heart', 'smile'];

  const handleIconSelect = (selectedIcon) => {
    console.log('Selected Icon:', selectedIcon);
  };

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner_text">
            <h1>Order, Enjoy, Repeat</h1>
          </div>
        </div>
      </section>
      <section className="menu_list">
        <div className="container">
          <div className="section_title">
            <h2>Pickup Menu</h2>
            <div className="filter_area">
              <SearchBar icons={icons} onIconSelect={handleIconSelect} />
              <CategoryMenu/>
            </div>
          </div>
          <MultiFilters />
        </div>
      </section>
    </>
  );
}

export default Home;
