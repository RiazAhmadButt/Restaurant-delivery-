import React, { useRef, useState, useEffect } from "react";
import "./MenuContainerSlider.css";

const MenuContainerSlider = () => {
  const menuContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const handleSlideRight = () => {
    if (menuContainerRef.current) {
      menuContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  const handleSlideLeft = () => {
    if (menuContainerRef.current) {
      menuContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); 
    setIsDragging(true);
    setStartX(e.pageX - menuContainerRef.current.offsetLeft);
    setScrollLeft(menuContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - menuContainerRef.current.offsetLeft;
    const walk = x - startX; 
    menuContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Handle touch events for mobile devices
  const handleTouchStart = (e) => {
    e.preventDefault(); // Prevent default scrolling behavior
    setIsDragging(true);
    const touch = e.touches[0];
    setStartX(touch.pageX - menuContainerRef.current.offsetLeft);
    setScrollLeft(menuContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - menuContainerRef.current.offsetLeft;
    const walk = x - startX; 
    menuContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="menu-container">
      <div
        className="menu-categories-container"
        ref={menuContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
      {!isSmallScreen && (
        <>
          
          <div className="dropdown-button" onClick={handleSlideRight}>
            <div className="arrow-container">
              <span className="vectorss">&gt;</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuContainerSlider;
