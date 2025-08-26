import React, { useState } from "react";
import './Configurator.css';
import { useCustomization, bottleColors } from "../Waterbottle/customization";

function Configurator() {
  const [selectedVolume, setSelectedVolume] = useState("500ml"); // example extra option

  const { selectedBottleColor, setSelectedBottleColor } = useCustomization();

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
        {renderSection("Bottle Colors", bottleColors, selectedBottleColor, setSelectedBottleColor, true)}
        {renderSection("Volume", ["500ml", "750ml", "1000ml"], selectedVolume, setSelectedVolume)}
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
            {renderSection("Bottle Colors", bottleColors, selectedBottleColor, setSelectedBottleColor, true)}
            {renderSection("Volume", ["500ml", "750ml", "1000ml"], selectedVolume, setSelectedVolume)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Configurator;
