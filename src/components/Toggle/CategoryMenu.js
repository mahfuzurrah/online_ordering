import React, { useState, useEffect, useRef } from "react";
import { CgMenuHotdog } from "react-icons/cg";

const CategoryMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button className="menu_btn" onClick={toggleMenu}>
        <CgMenuHotdog className="icons" />
      </button>
      {isMenuOpen && (
        <div className="category_list" ref={menuRef}>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default CategoryMenu;
