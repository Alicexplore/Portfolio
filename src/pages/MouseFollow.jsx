import React, { useState, useEffect } from "react";

const MouseFollow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const dampingFactor = 0.8; 
    setCirclePosition((prevPosition) => ({
      x: prevPosition.x + (mousePosition.x - prevPosition.x) * dampingFactor,
      y: prevPosition.y + (mousePosition.y - prevPosition.y) * dampingFactor,
    }));
  }, [mousePosition]);

  return (
    <div
      className="fixed z-[100] mix-blend-difference pointer-events-none cursor-pointer"
      style={{
        top: circlePosition.y -10, 
        left: circlePosition.x -10,
      }}
    >
      <div className="invisible lg:visible p-5 rounded-full bg-[#fff] dark:bg-[#fff]"></div>
      {/* <div className="invisible lg:visible p-5 rounded-full bg-[#2525cd] dark:bg-[#2525cd]"></div> */}
    </div>
  );
};

export default MouseFollow;