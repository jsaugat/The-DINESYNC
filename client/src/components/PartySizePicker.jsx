import React, { useEffect, useRef, useState } from "react";
import { Slider } from "@/shadcn/ui/slider";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function PartySizePicker() {
  const [partySize, setPartySize] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  const minNumber = 1;
  const maxNumber = 10;
  const sensitivity = 0.03; // Adjust sensitivity as needed

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const delta = event.movementX * sensitivity;
      const newNumber = Math.min(
        Math.max(partySize + delta, minNumber),
        maxNumber
      );
      setPartySize(newNumber);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, partySize]);

  return (
    <main className="Slider mt-4">
      <label className="text-[0.9rem] text-googleBlue">Set a Party Size</label>
      <section className="flex gap-3 border border-neutral-800 p-2 pl-5 rounded-full mt-2">
        <Slider
          min={1}
          max={10}
          step={1}
          defaultValue={[1]}
          value={[partySize]}
          onValueChange={([value]) => setPartySize(value)}
        />
        {/* Counter */}
        <div className="flex justify-center items-center gap-1 rounded-full border border-onyx p-1 max-w-fit">
          <KeyboardArrowLeftIcon
            fontSize="small"
            onClick={() => setPartySize((prev) => (prev <= 1 ? 1 : prev - 1))}
            className={`${partySize <= 1 ? "text-neutral-500 pointer-events-none" : null} flex place-content-center rounded-full hover:border hover:border-onyx hover:bg-onyx/50`}
          />
          <span
            ref={dragRef}
            style={{
              cursor: isDragging ? "grabbing" : "w-resize",
              userSelect: "none",
            }}
            onMouseDown={handleMouseDown}
            className="flex justify-center w-4 text-[1rem]"
          >
            {partySize.toFixed(0)}
          </span>
          <KeyboardArrowRightIcon
            fontSize="small"
            onClick={() =>
              setPartySize((prev) => (prev >= 10 ? 10 : prev + 1))
            }
            className={`${partySize >= 10 ? "text-neutral-500 pointer-events-none" : null} h-full rounded-full hover:border hover:border-onyx hover:bg-onyx/50`}
          />
        </div>
      </section>
    </main>
  );
}
