"use client";

import Image from "next/image";
import { useState } from "react";
import { UnfoldHorizontal } from "lucide-react";

const Slider1 = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect);
    }
  };

  const handleInteractionStart = () => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

    setIsDragging(true);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarCompensation}px`;
  };
  const handleInteractionEnd = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    setIsDragging(false);
  };
  return (
    <div
      className="lg:min-w-[450px] xl:min-w-[600px] max-w-[600px] aspect-[12/10] relative shrink-0"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <div className="relative w-full aspect-[12/10] m-auto overflow-hidden select-none">
        <Image
          alt=""
          fill
          draggable={false}
          priority
          src="/assets/restorations/2/after.jpg"
          className="object-cover"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full aspect-[12/10] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            alt=""
            src="/assets/restorations/2/before.jpg"
            className="object-cover"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full p-2 translate-x-[-45%] translate-y-[-50%] top-[50%]">
            <UnfoldHorizontal size={24} className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
