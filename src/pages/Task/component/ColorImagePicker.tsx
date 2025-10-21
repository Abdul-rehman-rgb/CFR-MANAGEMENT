import React from "react";
import note1 from '../../../../public/images/task/note1.svg'
import note2 from '../../../../public/images/task/note2.svg'
import note3 from '../../../../public/images/task/note3.svg'
import note4 from '../../../../public/images/task/note4.svg'

interface ColorOption {
  name: string;
  image: string;
  colorClass: string;
  hoverClass: string;
}

interface ColorImagePickerProps {
  onAddNote: (colorClass: string) => void;
}

const colors: ColorOption[] = [
  { name: "blue", image: note1, colorClass: "bg-blue-200 dark:bg-blue-800", hoverClass: "hover:bg-blue-400 dark:hover:bg-blue-600" },
  { name: "green", image: note2, colorClass: "bg-green-200 dark:bg-green-800", hoverClass: "hover:bg-green-400 dark:hover:bg-green-600" },
  { name: "red", image: note3, colorClass: "bg-red-200 dark:bg-red-800", hoverClass: "hover:bg-red-400 dark:hover:bg-red-600" },
  { name: "yellow", image: note4, colorClass: "bg-yellow-200 dark:bg-yellow-800", hoverClass: "hover:bg-yellow-400 dark:hover:bg-yellow-600" },
];

const ColorImagePicker: React.FC<ColorImagePickerProps> = ({ onAddNote }) => {
  return (
    <div className="flex justify-start items-center w-[120px] relative max-sm:w-[700px]">
      {colors.map((color, index) => {
        const size = 30 + index * 6;
        return (
          <div
            key={index}
            className="absolute group cursor-pointer"
            style={{
              left: `${index * 20}px`,
              zIndex: index,
            }}
            onClick={() => onAddNote(color.colorClass)}
          >
            <div className="relative rounded-md">
              <img
                src={color.image}
                alt={color.name}
                className="rounded-md opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorImagePicker;
