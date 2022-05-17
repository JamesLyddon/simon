import logo from "./logo.svg";
import "./App.css";
import SimonButton from "./components/SimonButton";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const button1 = document.getElementById(1);
    const button2 = document.getElementById(2);
    const button3 = document.getElementById(3);
    const button4 = document.getElementById(4);

    setTimeout(() => {
      button1.click();
    }, 250);
    setTimeout(() => {
      button2.click();
    }, 500);
    setTimeout(() => {
      button3.click();
    }, 750);
    setTimeout(() => {
      button4.click();
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <SimonButton id={1} pitch={1} btnText={"1"} btnColor={"red"} />
        <SimonButton id={2} pitch={1.25} btnText={"2"} btnColor={"blue"} />
        <SimonButton id={3} pitch={1.5} btnText={"3"} btnColor={"yellow"} />
        <SimonButton id={4} pitch={2} btnText={"4"} btnColor={"green"} />
      </header>
    </div>
  );
}

export default App;
