import { useState } from "react";
import "./App.css";
import { GifDisplay, MessageDisplay } from "./components/GiftDisplay";
import { HeartsOverlay } from "./components/HeartsOverlay";
import { useHearts } from "./hooks/useHearts";
import { bubuDuduGifs } from "./utils/gifts";
import { messages } from "./utils/messages";

const getRandomIndex = (length: number, excludeIndices: number[] = []) => {
  let newIndex;
  const allExcludedIndices = [...excludeIndices, 0, length - 1, length - 2];
  do {
    newIndex = Math.floor(Math.random() * length);
  } while (allExcludedIndices.includes(newIndex));
  return newIndex;
};

export default function App() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(-1);
  const [showButtons, setShowButtons] = useState(true);
  const [yesSize, setYesSize] = useState(1);
  const [noSize, setNoSize] = useState(1);
  const hearts = useHearts();

  const handleNoClick = () => {
    setCurrentGifIndex(
      getRandomIndex(bubuDuduGifs.length, [currentGifIndex])
    );
    setMessageIndex((prev) => (prev + 1) % messages.length);
    setYesSize((prev) => prev + 0.2);
    setNoSize((prev) => Math.max(prev - 0.1, 0.5));
  };

  const handleYesClick = () => {
    setShowButtons(false);
    setCurrentGifIndex(bubuDuduGifs.length - 1);

    setTimeout(() => {
      setCurrentGifIndex(bubuDuduGifs.length - 2);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="background"></div>
      <h1 className="title">¿Quieres ser mi San Valentín? 💖</h1>
      <div className="gif-container">
        <GifDisplay gif={bubuDuduGifs[currentGifIndex]} isBig={!showButtons} />
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
      ) : (
        <p className="final-message">
          Sabía que querías ser mi San Valentín 😘 <br />
          Te amo mucho amorcito 💖
        </p>
      )}
      {messageIndex >= 0 && showButtons && (
        <MessageDisplay message={messages[messageIndex]} />
      )}
      <HeartsOverlay hearts={hearts} />
    </div>
  );
}
