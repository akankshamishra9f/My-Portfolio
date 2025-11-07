
import { useState } from "react";

export default function FloatingBubbles() {
  const [poppedBubbles, setPoppedBubbles] = useState<number[]>([]);

  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    left: Math.random() * 100,
  }));

  const handleBubbleClick = (id: number) => {
    setPoppedBubbles([...poppedBubbles, id]);
    setTimeout(() => {
      setPoppedBubbles(prev => prev.filter(bubbleId => bubbleId !== id));
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full bg-gradient-to-br from-primary/10 to-pink-500/10 backdrop-blur-sm border border-primary/20 cursor-pointer pointer-events-auto transition-all duration-300 hover:scale-110 hover:border-primary/40 ${
            poppedBubbles.includes(bubble.id) ? 'animate-[popBubble_0.6s_ease-out]' : ''
          }`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: `-${bubble.size}px`,
            animation: poppedBubbles.includes(bubble.id) 
              ? `popBubble 0.6s ease-out` 
              : `floatUp ${bubble.duration}s ease-in-out ${bubble.delay}s infinite`,
          }}
          onClick={() => handleBubbleClick(bubble.id)}
        />
      ))}
    </div>
  );
}
