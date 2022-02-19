import React from "react";
import ReactDOM from "react-dom";
import CustomAnimatedHighlight from "../src";

const App = () => (
  <CustomAnimatedHighlight title="56" subtitle="Essa é a sua idade" subtitleColor="gray"/>
);

ReactDOM.render(<App />, document.getElementById("root"));