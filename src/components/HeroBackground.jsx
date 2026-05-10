import React, { useEffect, useRef } from "react";

const HeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width;
    let height;
    let particles = [];
    let animationFrameId;
    const mouse = { x: -1000, y: -1000, active: false };

    const PARTICLE_COUNT = 120;
    const CONNECTION_DIST = 150;
    const MOUSE_RADIUS = 250;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.baseSize = Math.random() * 2 + 1;
        this.size = this.baseSize;
        this.energy = 0;

        this.color =
          Math.random() > 0.5
            ? { r: 59, g: 130, b: 246 } // blue
            : { r: 139, g: 92, b: 246 }; // purple
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_RADIUS) {
            const ratio = 1 - dist / MOUSE_RADIUS;
            this.energy = Math.min(this.energy + 0.05, ratio);

            const angle = Math.atan2(dy, dx);
            this.vx += Math.cos(angle) * ratio * 0.15;
            this.vy += Math.sin(angle) * ratio * 0.15;
          } else {
            this.energy *= 0.95;
          }
        } else {
          this.energy *= 0.95;
        }

        this.size = this.baseSize + this.energy * 3;

        this.vx *= 0.98;
        this.vy *= 0.98;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        const alpha = 0.2 + this.energy * 0.6;
        const glowSize = this.size * 4;

        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          glowSize,
        );

        gradient.addColorStop(
          0,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`,
        );
        gradient.addColorStop(
          1,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`,
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255,255,255,${alpha + 0.2})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    };

    const drawConnections = () => {
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha =
              (1 - dist / CONNECTION_DIST) * 0.15 * (1 + p1.energy + p2.energy);

            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawConnections();

      ctx.globalCompositeOperation = "source-over";
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", setSize);

    setSize();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default HeroBackground;
