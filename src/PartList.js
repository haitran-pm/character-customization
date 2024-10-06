import React from "react";
import PartItem from "./PartItem";

function PartList({
  part: { title, ids, ...part },
  handleClickPart,
  selectedPart,
}) {
  if (ids.length === 0) return;
  return (
    <div className="part-list-wrapper">
      <h2>{title}</h2>
      <div className="part-list">
        {ids.map((item, index) => {
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
