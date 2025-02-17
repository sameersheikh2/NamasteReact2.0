import React from "react";

const heading = React.createElement("h1", {}, "Hello world from ReactJS");

const parent = React.createElement("div", { id: "parent" }, heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
