import React from "react";
import AvatarPart from "./AvatarPart";

function Avatar({ avatar }) {
  return (
    <div className="avatar">
      {avatar.map(({ ...part }) => {
        return (
          <React.Fragment key={`${part.cat}_${part.image}`}>
            <AvatarPart part={part} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Avatar;
