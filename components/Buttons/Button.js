import React from "react";

export default function Button(props) {
  return (
    <div className={props.position}>
      <div className={props.className} onClick={props.clickHandler}>
        {props.label}
      </div>
    </div>
  );
}
