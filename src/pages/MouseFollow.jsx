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
    const dampingFactor = 0.1; 
    setCirclePosition((prevPosition) => ({
      x: prevPosition.x + (mousePosition.x - prevPosition.x) * dampingFactor,
      y: prevPosition.y + (mousePosition.y - prevPosition.y) * dampingFactor,
    }));
  }, [mousePosition]);

  return (
    <div
      className="fixed z-10"
      style={{
        top: circlePosition.y - -10, 
        left: circlePosition.x - -10, 
      }}
    >
      {/* <div className="invisible lg:visible p-10 rounded-full bg-[#2e2e2d] dark:bg-[#F2F2F2] dark:text-[#2e2e2d] text-[#F2F2F2]">hey</div> */}
    </div>
  );
};

export default MouseFollow;