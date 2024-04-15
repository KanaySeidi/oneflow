import React from "react";
import backgroundImage from "../assets/Rectangle.jpg"; // Import the image
import { introBtns } from "../utils/introBtns";

function Intro() {
  return (
    <>
      <div
        className="w-screen bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col mx-24 py-32 gap-4">
          <h2 className="text-7xl" style={{ color: "#013A4C" }}>
            Work wonders
          </h2>
          <p className="text-2xl w-1/2" style={{ color: "#013A4C" }}>
            Be more effective with smart contracts that make work faster, and
            life easier.
          </p>
          <div className="flex justify-between w-1/4">
            {introBtns.map((btn) => (
              <button
                className="rounded-md h-8 text-xs"
                style={{
                  backgroundColor: btn.bgColor,
                  width: btn.width,
                  border: btn.border,
                  color: btn.color,
                }}
                key={btn.id}
              >
                {btn.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
