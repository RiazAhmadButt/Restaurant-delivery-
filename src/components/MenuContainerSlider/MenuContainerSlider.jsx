import React, { useRef, useState } from "react";
import "./MenuContainerSlider.css";

const MenuContainerSlider = () => {
  const menuContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleSlideRight = () => {
    if (menuContainerRef.current) {
      menuContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - menuContainerRef.current.offsetLeft);
    setScrollLeft(menuContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - menuContainerRef.current.offsetLeft;
    const walk = x - startX; // Calculate how far the mouse has moved
    menuContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="menu-container">
      <div
        className="menu-categories-container"
        ref={menuContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
      >
        <div className="menu-category">Popular (1)</div>
        <div className="menu-category">Appetizers (2)</div>
        <div className="menu-category">Pasta (2)</div>
        <div className="menu-category">Fries (3)</div>
        <div className="menu-category">Cheesy Delight (4)</div>
        <div className="menu-category">Burgers (4)</div>
        <div className="menu-category">Pizza (4)</div>
        <div className="menu-category">Beverages (4)</div>
        <div className="menu-category">Family deal (4)</div>
      </div>
      <div className="dropdown-button" onClick={handleSlideRight}>
        <div className="arrow-container">
          <span className="vector">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default MenuContainerSlider;
