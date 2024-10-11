import React from "react";
import AvatarPart from "./AvatarPart";

function Avatar({ avatar }) {
  return (
    <div className="avatar">
      {Object.entries(avatar).map(([cat, values]) => {
        return (
          <React.Fragment key={`${cat}_${values.image}`}>
            <AvatarPart part={{ cat, ...values }} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Avatar;
