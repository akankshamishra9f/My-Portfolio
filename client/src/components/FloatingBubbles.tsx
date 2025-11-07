
export default function FloatingBubbles() {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    left: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-primary/10 to-pink-500/10 backdrop-blur-sm border border-primary/20"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: `-${bubble.size}px`,
            animation: `floatUp ${bubble.duration}s ease-in-out ${bubble.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
