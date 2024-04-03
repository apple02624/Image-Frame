import React, { useState, useContext, useRef } from "react";
import Image from "./Image";
import { PositionContext } from "@/app/view";

interface ImageFrameProps {
  images: string[];
}

const ImageFrame: React.FC<ImageFrameProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const { x, y, setX, setY } = useContext(PositionContext);

  const [position, setPosition] = useState({ x: x, y: y });
  const [startPosition, setStartPosition] = useState({
    x: position.x,
    y: position.y,
  });
  const [scale, setScale] = useState(1);
  const frameRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (imageUrl: string) => {
    if (selectedImage === imageUrl) {
      setSelectedImage(null);
    } else {
      setSelectedImage(imageUrl);
    }
  };

  const handleImageDragStart = (e: React.MouseEvent<HTMLImageElement>) => {
    setDragging(true);
    const { left, top } = frameRef.current!.getBoundingClientRect();
    setStartPosition({
      x: e.clientX - left - x,
      y: e.clientY - top - y,
    });
  };

  const handleImageDrag = (e: React.MouseEvent<HTMLImageElement>) => {
    if (dragging && selectedImage) {
      const { left, top } = frameRef.current!.getBoundingClientRect();
      setPosition({
        x: e.clientX - left - startPosition.x,
        y: e.clientY - top - startPosition.y,
      });
      setX(e.clientX - left - startPosition.x);
      setY(e.clientY - top - startPosition.y);
    }
  };

  const handleImageDragEnd = () => {
    setDragging(false);
    setStartPosition({ x: 0, y: 0 });
  };

  const handleImageScroll = (e: React.WheelEvent<HTMLImageElement>) => {
    const zoomIntensity = 0.001;
    const newScale = scale + e.deltaY * -zoomIntensity;
    setScale(Math.max(0.1, newScale));
  };

  return (
    <div
      className="relative max-w-full p-10 h-fit bg-slate-300 border-double border-[10px] border-slate-400"
      ref={frameRef}
    >
      {images.map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl}
          onClick={() => handleImageClick(imageUrl)}
          isSelected={selectedImage === imageUrl}
          onDragStart={handleImageDragStart}
          onDrag={handleImageDrag}
          onDragEnd={handleImageDragEnd}
          onWheel={handleImageScroll}
          position={position}
          scale={scale}
        />
      ))}
    </div>
  );
};

export default ImageFrame;
