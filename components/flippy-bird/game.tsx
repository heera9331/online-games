"use client";
import React, { useEffect, useState } from "react";
import Bird from "@/components/flippy-bird/Bird";
import Pipe from "@/components/flippy-bird/Pipe";

const Game: React.FC = () => {
  const [birdPosition, setBirdPosition] = useState(250);
  const [pipes, setPipes] = useState([{ topHeight: 200, gap: 150, left: 500 }]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gravity = 3;
  const jumpHeight = 50;

  useEffect(() => {
    if (isGameOver) return;

    const gameLoop = setInterval(() => {
      setBirdPosition((prev) => prev + gravity);

      setPipes((prev) =>
        prev.map((pipe) => ({ ...pipe, left: pipe.left - 5 }))
      );

      if (pipes[0].left < -50) {
        setPipes([
          ...pipes.slice(1),
          {
            topHeight: Math.random() * 200 + 50,
            gap: 150,
            left: 500,
          },
        ]);
        setScore((prev) => prev + 1);
      }

      // Collision Detection
      if (
        birdPosition < 0 ||
        birdPosition > window.innerHeight ||
        (pipes[0].left < 80 &&
          pipes[0].left > 20 &&
          (birdPosition < pipes[0].topHeight ||
            birdPosition > pipes[0].topHeight + pipes[0].gap))
      ) {
        setIsGameOver(true);
        clearInterval(gameLoop);
      }
    }, 30);

    return () => clearInterval(gameLoop);
  }, [birdPosition, pipes, isGameOver]);

  const handleJump = () => {
    if (!isGameOver) {
      setBirdPosition((prev) => prev - jumpHeight);
    }
  };

  return (
    <div
      className="bg-blue-300 h-screen w-full overflow-hidden relative"
      onClick={handleJump}
    >
      <div className="text-white text-2xl absolute top-5 left-5">{`Score: ${score}`}</div>
      {isGameOver && (
        <div className="text-center text-white text-3xl absolute inset-0 flex items-center justify-center">
          Game Over! Click to Restart.
        </div>
      )}
      <Bird position={birdPosition} />
      {pipes.map((pipe, index) => (
        <Pipe key={index} {...pipe} />
      ))}
    </div>
  );
};

export default Game;
