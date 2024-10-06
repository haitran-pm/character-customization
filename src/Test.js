import React from "react";
import PartItem from "./PartItem";

function Test({ part: { title, ids, ...part } }) {
  console.log(part);
  return (
    <div className="part-list-wrapper">
      <h2>{title}</h2>
      <div className="part-list">
        {ids.map((item, index) => {
          return (
            <React.Fragment key={item}>
              <PartItem id={item} part={part} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Test;
