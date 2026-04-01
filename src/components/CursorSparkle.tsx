"use client";

import { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  speed: number;
}

export default function CursorSparkle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparkles = useRef<Sparkle[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const lastSpawn = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      const now = Date.now();
      if (now - lastSpawn.current > 40) {
        lastSpawn.current = now;
        for (let i = 0; i < 2; i++) {
          sparkles.current.push({
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            size: Math.random() * 3 + 1.5,
            opacity: 1,
            rotation: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.5 + 0.3,
          });
        }
      }
    };
    window.addEventListener("mousemove", move);

    const drawStar = (
      cx: number,
      cy: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
      }
      ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Center dot
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(228, 195, 90, ${opacity})`;
      ctx.fill();
      ctx.restore();
    };

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparkles.current.forEach((s) => {
        s.opacity -= 0.02;
        s.y -= s.speed;
        s.rotation += 0.02;
        drawStar(s.x, s.y, s.size, s.rotation, Math.max(s.opacity, 0));
      });

      sparkles.current = sparkles.current.filter((s) => s.opacity > 0);
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 hidden md:block"
    />
  );
}
