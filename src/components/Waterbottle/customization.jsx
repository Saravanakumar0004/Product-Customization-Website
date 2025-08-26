import React, { createContext, useContext, useState } from "react";

const CustomizationContext = createContext();

export const bottleColors = [
  { name: "Brown", color: "#683434" },
  { name: "Green", color: "#1a5e1a" },
  { name: "Blue", color: "#659994" },
  { name: "Mauve", color: "#896599" },
  { name: "Orange", color: "#ffa500" },
  { name: "Grey", color: "#59555b" },
  { name: "White", color: "#ececec" },
  { name: "Transparent", color: "#a3d5ff" },
  { name: "Dark Blue", color: "#3A5BA0" },
  { name: "Red", color: "#b22222" },
  { name: "Yellow", color: "#FFD700" },
  { name: "Teal", color: "#008080" },
  { name: "Purple", color: "#800080" },
  { name: "Pink", color: "#ff69b4" },
  { name: "Cyan", color: "#00FFFF" },
  { name: "Silver", color: "#C0C0C0" },
  { name: "Gold", color: "#FFD700" },
  { name: "Dark Grey", color: "#2F4F4F" },
  { name: "Olive", color: "#556B2F" },
];



export const CustomizationProvider = ({ children }) => {
  const [selectedBottleColor, setSelectedBottleColor] = useState(bottleColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        selectedBottleColor,
        setSelectedBottleColor,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => useContext(CustomizationContext);
