import { useEffect, useState } from "react";

export function useHearts() {
  const [hearts, setHearts] = useState<
    { id: number; left: number; size: number }[]
  >([]);

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now();
      setHearts((prev) => [
        ...prev,
        { id, left: Math.random() * 100, size: Math.random() * 30 + 10 },
      ]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id));
      }, 4000);
    };

    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  return hearts;
}
