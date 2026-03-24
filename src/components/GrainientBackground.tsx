import React, { useEffect, useRef } from 'react';

const GrainientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w: number, h: number;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Grain effect
    const noise = () => {
      const idata = ctx.createImageData(w, h);
      const buffer32 = new Uint32Array(idata.data.buffer);
      for (let i = 0; i < buffer32.length; i++) {
        if (Math.random() < 0.05) {
          buffer32[i] = 0x05ffffff; // Very subtle white noise
        }
      }
      return idata;
    };

    // Simple animated gradient bubbles
    let time = 0;
    const render = () => {
      time += 0.01;
      
      // Clear with base color
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);

      // Draw soft gradient blobs
      const drawBlob = (x: number, y: number, radius: number, color: string) => {
        const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
        grad.addColorStop(0, color);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      };

      // Animated positions
      const x1 = w * (0.5 + 0.3 * Math.cos(time * 0.5));
      const y1 = h * (0.3 + 0.2 * Math.sin(time * 0.3));
      drawBlob(x1, y1, w * 0.6, 'rgba(14, 210, 218, 0.1)'); // Cyan

      const x2 = w * (0.3 + 0.2 * Math.sin(time * 0.4));
      const y2 = h * (0.7 + 0.1 * Math.cos(time * 0.6));
      drawBlob(x2, y2, w * 0.5, 'rgba(95, 41, 199, 0.08)'); // Purple

      // Add noise on top
      ctx.putImageData(noise(), 0, 0);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="grainient-container fixed inset-0 z-[-1]">
      <canvas ref={canvasRef} data-testid="grainient-canvas" />
    </div>
  );
};

export default GrainientBackground;
