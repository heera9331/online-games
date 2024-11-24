"use client";
import React from "react";

interface PipeProps {
  topHeight: number;
  gap: number;
  left: number;
}

const Pipe: React.FC<PipeProps> = ({ topHeight, gap, left }) => {
  return (
    <div>
      <div
        className="bg-green-500 absolute w-12"
        style={{ height: `${topHeight}px`, left: `${left}px`, top: "0px" }}
      />
      <div
        className="bg-green-500 absolute w-12"
        style={{
          height: `calc(100vh - ${topHeight + gap}px)`,
          left: `${left}px`,
          top: `${topHeight + gap}px`,
        }}
      />
    </div>
  );
};

export default Pipe;
