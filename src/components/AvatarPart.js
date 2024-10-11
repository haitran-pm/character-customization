import React from "react";

function AvatarPart({ part: { cat, folder, image, z_index } }) {
  return (
    <img
      className="avatar-part"
      src={`${folder}${image}.png`}
      alt={`${cat} ${image}`}
      style={{ zindex: z_index }}
    />
  );
}

export default AvatarPart;
