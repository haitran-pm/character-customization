import React from "react";
import PartItem from "./PartItem";

function PartList({ part, handleClickPart, selectedPart }) {
  const ids = Array.from(Array(part.length), (_, i) => i + 1);
  return (
    <div className="part-list-wrapper">
      <h2>{part.title}</h2>
      <div className="part-list">
        {ids.map((item) => {
          return (
            <React.Fragment key={item}>
              <PartItem
                id={item}
                part={part}
                handleClickPart={() => handleClickPart(part.cat, item)}
                selected={item === selectedPart}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default PartList;
