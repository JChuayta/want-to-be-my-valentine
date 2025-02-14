import { useEffect, useState } from "react";
import "./App.css";

const catGifs = [
  "https://media.giphy.com/media/JFawGLFMCJNDi/giphy.gif",
  "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
];

const messages = [
  "¿Segura que no quieres ser mi San Valentín? 🥺",
  "¿Segura, segura? 😢",
  "¿En serio no quieres? 💔",
  "Me estás rompiendo el corazón... 💔",
  "Todavía estás a tiempo de cambiar de opinión 😏"
];

export default function App() {
  const getRandomGif = (excludeIndex?: number) => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * catGifs.length);
    } while (newIndex === excludeIndex);
    return newIndex;
  };

  const [currentGifIndex, setCurrentGifIndex] = useState(getRandomGif());
  const [messageIndex, setMessageIndex] = useState(-1); // -1 para que no muestre el mensaje al inicio
  const [showButtons, setShowButtons] = useState(true);
  const [yesSize, setYesSize] = useState(1);
  const [noSize, setNoSize] = useState(1);
  const [hearts, setHearts] = useState<{ id: number; left: number; size: number }[]>([]);

  const createHeart = () => {
    const id = Date.now();
    const newHeart = {
      id,
      left: Math.random() * 100, // Posición aleatoria
      size: Math.random() * 30 + 10 // Tamaño entre 10px y 40px
    };
    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 4000); // Desaparece después de 4s
  };

  useEffect(() => {
    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  const handleNoClick = () => {
    setCurrentGifIndex(getRandomGif(currentGifIndex));
    setMessageIndex((prev) => (prev + 1) % messages.length); // Muestra mensajes en orden
    setYesSize((prev) => prev + 0.2);
    setNoSize((prev) => Math.max(prev - 0.1, 0.5)); // Mínimo tamaño 0.5
  };

  const handleYesClick = () => {
    setShowButtons(false);
  };

  return (
    <div className="container">
      <div className="background"></div>
      <h1 className="title">¿Quieres ser mi San Valentín? 💖</h1>

      <div className="gif-container">
        <img 
          src={catGifs[currentGifIndex]} 
          alt="Cat GIF" 
          className={`gif ${!showButtons ? "big" : ""}`} 
        />
      </div>
      
      {showButtons ? (
        <div className="buttons">
          <button 
            className="yes" 
            onClick={handleYesClick}
            style={{ transform: `scale(${yesSize})` }}
          >
            Sí 💕
          </button>
          <button 
            className="no" 
            onClick={handleNoClick}
            style={{ transform: `scale(${noSize})` }}
          >
            No 💔
          </button>
        </div>
      ) : null}

      {messageIndex >= 0 && showButtons && <p className="message">{messages[messageIndex]}</p>}
      {!showButtons && <p className="final-message">Sabía que querías ser mi San Valentín ❤️</p>}

      <div className="hearts-container">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart"
            style={{ left: `${heart.left}%`, width: `${heart.size}px`, height: `${heart.size}px` }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
}
