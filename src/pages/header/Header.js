import React from "react";
import "./header.css";

const header = (props) => {
    console.log(props)
  return (
    <div>
      {" "}
      {/* <div>
        {props.obj.name}
        {props.obj.id}
      </div> */}
      <header>
        <div className="header">
          <span className="pos1">
            <a href="#">OnePage</a>
          </span>
          <span className="icon">
            <i className="icofont-listing-box"></i>
          </span>
        </div>
      </header>
    </div>
  );
};
export default header;




// import React, { Component } from 'react'

// export default class header extends Component {
//   render() {
//     return (
//       <div>header</div>
//     )
//   }
// }

