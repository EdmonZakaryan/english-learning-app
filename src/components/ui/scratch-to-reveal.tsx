"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ScratchToRevealProps {
  children: React.ReactNode;
  scratchColor?: string;
  brushSize?: number;
  revealThreshold?: number;
  className?: string;
  onReveal?: () => void;
}

export const ScratchToReveal: React.FC<ScratchToRevealProps> = ({
  children,
  scratchColor = '#999999',
  brushSize = 20,
  revealThreshold = 50,
  className,
  onReveal
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchedPixels, setScratchedPixels] = useState(0);
  const [totalPixels, setTotalPixels] = useState(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill canvas with scratch color
    ctx.fillStyle = scratchColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set composite operation for erasing
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushSize;

    setTotalPixels(canvas.width * canvas.height);
  }, [scratchColor, brushSize]);

  const getEventPos = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const scratch = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const pos = getEventPos(e);
    
    if (isScratching) {
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      setIsScratching(true);
    }

    // Calculate scratched percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    
    const percentage = (transparent / totalPixels) * 100;
    setScratchedPixels(percentage);
    
    if (percentage > revealThreshold && !isRevealed) {
      setIsRevealed(true);
      onReveal?.();
      // Hide canvas to fully reveal content
      if (canvas) {
        canvas.style.opacity = '0';
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsScratching(true);
    scratch(e.nativeEvent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isScratching) {
      scratch(e.nativeEvent);
    }
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsScratching(true);
    scratch(e.nativeEvent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isScratching) {
      e.preventDefault();
      scratch(e.nativeEvent);
    }
  };

  const handleTouchEnd = () => {
    setIsScratching(false);
  };

  useEffect(() => {
    initCanvas();
    
    const handleResize = () => {
      setTimeout(initCanvas, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsScratching(false);
    const handleGlobalTouchEnd = () => setIsScratching(false);
    
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalTouchEnd);
    
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      style={{ touchAction: 'none' }}
    >
      {children}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 cursor-pointer transition-opacity duration-300"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          pointerEvents: isRevealed ? 'none' : 'auto'
        }}
      />
    </div>
  );
};