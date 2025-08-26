import React from "react";
import "./Configurator.css";
import { chairColors, useCustomization, cushionColors } from "../contexts/Custamization";

function Configurator() {
  const {
    material, setMaterial,
    legs, setLegs,
    selectedChairColor, setSelectedChairColor,
    selectedCushionColor, setSelectedCushionColor,
  } = useCustomization();

  const renderSection = (title, items, selectedItem, setSelected, isColor = false) => (
    <div className="configurator_section">
      <div className="configurator_section_title">{title}</div>
      <div className="configurator_section_values">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${isColor ? (item.color === selectedItem.color ? "item-active" : "") : (item === selectedItem ? "item-active" : "")}`}
            onClick={() => setSelected(item)}
          >
            {isColor && <div className="item_dot" style={{ backgroundColor: item.color }} />}
            <div className="item_lable">{isColor ? item.name : item}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>

      <div className="configurator d-none d-md-flex">
        {renderSection("Chair Materials", ["leather", "fabric"], material, setMaterial)}
        {renderSection("Chair Colours", chairColors, selectedChairColor, setSelectedChairColor, true)}
        {renderSection("Cushion Colours", cushionColors, selectedCushionColor, setSelectedCushionColor, true)}
        {renderSection("Legs", ["Modern", "Classic"], legs === 1 ? "Modern" : "Classic", val => setLegs(val === "Modern" ? 1 : 2))}
      </div>

      <div className="d-md-none">
        <button
          className="btn btn-primary w-100"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#configuratorOffcanvas"
          aria-controls="configuratorOffcanvas"
        >
          Open Configurator
        </button>

        <div
          className="offcanvas offcanvas-bottom"
          tabIndex="-1"
          id="configuratorOffcanvas"
          aria-labelledby="configuratorLabel"
          style={{ height: "70%" }}
        >
          <div className="offcanvas-header">
            <h5 id="configuratorLabel">Customize</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {renderSection("Chair Materials", ["leather", "fabric"], material, setMaterial)}
            {renderSection("Chair Colours", chairColors, selectedChairColor, setSelectedChairColor, true)}
            {renderSection("Cushion Colours", cushionColors, selectedCushionColor, setSelectedCushionColor, true)}
            {renderSection("Legs", ["Modern", "Classic"], legs === 1 ? "Modern" : "Classic", val => setLegs(val === "Modern" ? 1 : 2))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Configurator;
