import React, { createContext, useContext, useState } from "react";

const CustomizationContext = createContext();


export const frameColors = [
  { name: "Silver", color: "#C0C0C0" },
  { name: "Brown", color: "#683434" },
  { name: "Green", color: "#1a5e1a" },
  { name: "Blue", color: "#659994" },
  { name: "Mauve", color: "#896599" },
  { name: "Orange", color: "#ffa500" },
  { name: "Grey", color: "#59555b" },
  { name: "White", color: "#ececec" },
];


export const screenColors = [
  { name: "Amoled", color: "#59555b" },
  { name: "Lcd", color: "#3A5BA0" },
  { name: "Dynamic amoled 2X", color: "#896599" },
];

export const backCoverColors = [
   { name: "Silver", color: "#C0C0C0" },
  { name: "Brown", color: "#683434" },
  { name: "Green", color: "#1a5e1a" },
  { name: "Blue", color: "#659994" },
  { name: "Mauve", color: "#896599" },
  { name: "Orange", color: "#ffa500" },
  { name: "Grey", color: "#59555b" },
  { name: "White", color: "#ececec" },
];


export const CustomizationProvider = ({ children }) => {
  const [selectedFrameColor, setSelectedFrameColor] = useState(frameColors[0]);
  const [selectedScreenColor, setSelectedScreenColor] = useState(screenColors[0]);
  const [selectedBackColor, setSelectedBackColor] = useState(backCoverColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        selectedFrameColor,
        setSelectedFrameColor,
        selectedScreenColor,
        setSelectedScreenColor,
        selectedBackColor,
        setSelectedBackColor,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => useContext(CustomizationContext);
