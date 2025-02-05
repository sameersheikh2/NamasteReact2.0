import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hello world from ReactJS");

// const parent = React.createElement("div", { id: "parent" }, heading);

const Header = () => (
  <div>
    <h1>{title}This is header from functional component</h1> //NEW WAY
  </div>
);

const title = <h1>Hello this is react element</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
