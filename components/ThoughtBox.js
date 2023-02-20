import React from "react";
import Button from "./Buttons/Button";

export default function ThoughtBox(props) {
  const onClick = () => {
    props.selectParagraph(props.id);
  };
  return (
    <div className="thoughtbox">
      <h2>{props.title}</h2>
      <span>
        {props.headline}
        <span id="dots">...</span>
      </span>
      <Button
        className="thought-button"
        clickHandler={onClick}
        label={"Read more"}
        position="thought-button-layout"
      />
    </div>
  );
}
