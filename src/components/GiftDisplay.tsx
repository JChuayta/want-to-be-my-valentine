export function GifDisplay({ gif, isBig }: { gif: string; isBig: boolean }) {
  return (
    <img src={gif} alt="Cat GIF" className={`gif ${isBig ? "big" : ""}`} />
  );
}

export function MessageDisplay({ message }: { message: string }) {
  return <p className="message">{message}</p>;
}
