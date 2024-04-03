import React from "react";

interface ImageProps {
  src: string;
  isSelected: boolean;
  onClick: () => void;
  onDragStart: (e: React.MouseEvent<HTMLImageElement>) => void;
  onDrag: (e: React.MouseEvent<HTMLImageElement>) => void;
  onDragEnd: () => void;
  onWheel: (e: React.WheelEvent<HTMLImageElement>) => void;
  position: { x: number; y: number };
  scale: number;
}

const Image: React.FC<ImageProps> = ({
  src,
  isSelected,
  onClick,
  onDragStart,
  onDrag,
  onDragEnd,
  onWheel,
  position,
  scale,
}) => {
  return (
    <div className="relative h-fit w-fit">
      <img
        src={src}
        alt="Image"
        className={`${isSelected ? "border-4 border-blue-500" : ""}`}
        style={{
          marginLeft: position.x,
          marginTop: position.y,
          transform: `scale(${scale})`,
        }}
        onClick={onClick}
        onMouseDown={onDragStart}
        onMouseMove={onDrag}
        onMouseUp={onDragEnd}
        onMouseOut={onDragEnd}
        onWheel={onWheel}
        draggable={false}
      />
    </div>
  );
};

export default Image;
