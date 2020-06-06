//Assignment_01, ref book of Dave Ceddia=> http://react-guide-backup.surge.sh/
//Author: Salman Moin
//Date: 07-Jun-2020
//Version: 1.0

import React from "react";
import ReactDOM from "react-dom";
import "./first.css";

function Hi() {
  return (
    <div>
      Hello World!
      <br />
      Hello Salman!
      <br />
      Hello <strong> Salman </strong>!
      <br />
      <h2>This is heading</h2>
      <p>This is paragraph</p>
      <ul>
        <li>KFC</li>
        <li>McDonald</li>
        <li>Pizza Hut</li>
      </ul>
      <ol>
        <li>JS</li>
        <li>React</li>
        <li>React Native</li>
      </ol>
      <br />
      Total marks [english, math, computer] = {85 + 90 + 95} and percent is:
      {((85 + 90 + 95) / 300) * 100}%
      <br />
      <p className="name"> Using 'className' of React while using ccs file </p>
    </div>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
