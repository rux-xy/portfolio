import React, { useEffect, useRef } from 'react';
export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    const letters = '01@#$%{}[]<>';
    const fontSize = 14;

    // Mutable state that resize can update
    let drops: number[] = [];

    const initDrops = () => {
      const columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * (canvas.height / fontSize));
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDrops(); // recalculate columns & drops after every resize
    };

    setCanvasSize();

    let lastTime = 0;
    const fps = 20;
    const interval = 1000 / fps;

    const draw = (time: number) => {
      animationFrameId = requestAnimationFrame(draw);
      const deltaTime = time - lastTime;
      if (deltaTime < interval) return;
      lastTime = time - deltaTime % interval;

      // Translucent black background to create trail effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Red text with low opacity
      ctx.fillStyle = 'rgba(255, 42, 42, 0.55)';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);
    window.addEventListener('resize', setCanvasSize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40" />
  );
};
