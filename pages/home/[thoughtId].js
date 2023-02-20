import React from "react";

export default function thoughtid(props) {
  
  console.log(props);
  return (
    <div className="home">
      <h2>{props.title}</h2>
      <span>{props.content}</span>
    </div>
  );
}
