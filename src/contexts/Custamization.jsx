import React, { createContext, use } from 'react';
import { useState, useContext } from 'react';

const CustomizationContext = createContext({});
export const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

export const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

export const CustomizationProvider = (props) => {

    const [material, setMaterial] = useState('leather');
    const [legs , setLegs] = useState(1);
    const [selectedChairColor , setSelectedChairColor] = useState(chairColors[0]);
    const [selectedCushionColor , setSelectedCushionColor] = useState(cushionColors[0]);



  return  <CustomizationContext.Provider value={{
      material, setMaterial,
      legs, setLegs,
      selectedChairColor, setSelectedChairColor,
      selectedCushionColor, setSelectedCushionColor
    }}>
      {props.children}
    </CustomizationContext.Provider>;
};

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    if (!context) {
        throw new Error('useCustomization must be used within a CustomizationProvider');
    }
    return context;
    }