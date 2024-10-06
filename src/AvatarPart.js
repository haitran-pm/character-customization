import React from "react";

function AvatarPart({ part: { cat, subcat, image, z_index } }) {
  const itemLink = !subcat
    ? `./character/${cat}/${image}.png`
    : `./character/${subcat}/${cat}/${image}.png`;
  return (
    <img
      className="avatar-part"
      src={itemLink}
      alt={`${cat} ${image}`}
      style={{ zindex: z_index }}
    />
  );
}

export default AvatarPart;
