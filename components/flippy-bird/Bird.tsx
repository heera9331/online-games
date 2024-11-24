import React, { useEffect, useState } from "react";

interface BirdProps {
  position: number;
}

const Bird: React.FC<BirdProps> = ({ position }) => {
  return (
    <div
      className="bg-yellow-500 w-10 h-10 rounded-full absolute"
      style={{ top: `${position}px`, left: "50px" }}
    />
  );
};

export default Bird;
