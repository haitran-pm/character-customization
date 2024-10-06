import React from "react";

function PartItem({
  id = 1,
  part: { cat = "body", subcat, height = "60", top = "50%" },
  selected = false,
  handleClickPart,
}) {
  const itemLink = !subcat
    ? `./character/${cat}/${id}.png`
    : `./character/${subcat}/${cat}/${id}.png`;
  return (
    <div
      className={!selected ? "part-item" : "part-item part-item-selected"}
      onClick={handleClickPart}
    >
      <img
        src={itemLink}
        alt={`${cat} ${id}`}
        height={height}
        style={{ top }}
      />
    </div>
  );
}

export default PartItem;
