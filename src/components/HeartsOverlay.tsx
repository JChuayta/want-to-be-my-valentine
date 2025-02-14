export function HeartsOverlay({
  hearts,
}: {
  hearts: { id: number; left: number; size: number }[];
}) {
  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}