import React from "react";

function PartItem({
  id = 1,
  part: { folder, height = "60", top = "50%", ...part },
  selected = false,
  handleClickPart,
}) {
  return (
    <div
      className={!selected ? "part-item" : "part-item part-item-selected"}
      onClick={handleClickPart}
    >
      <img
        src={`${folder}${id}.png`}
        alt={`${part.cat} ${id}`}
        height={height}
        style={{ top }}
      />
    </div>
  );
}

export default PartItem;
