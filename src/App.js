import React from "react";
import Counter from "./components/Counter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import MultiplyByInput from "./components/MultiplyByInput";


import {Row} from "reactstrap";
function App() {
  return (
    <div>
      <center>
        <h1>Counter</h1>
      </center>
      <Row>
        <Counter/>
        <IncreaseByTwoCounter/>
        <DecreaseCounter/>
        <IncreaseCounter/>
        <MultiplyByInput/>
      </Row>
    </div>
  );
}

export default App;
