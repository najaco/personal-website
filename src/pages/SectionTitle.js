import React, { Component } from "react";

const SectionTitle = (props) => {
  return (
    <div className="header">
      <div className="header_icon">
        <i class={props.icon_id} />
      </div>
      <span>
        <h1>{props.title}</h1>
      </span>
      <hr/>
    </div>
  );
}

export default SectionTitle;
