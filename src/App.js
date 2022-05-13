import logo from "./logo.svg";
import "./App.css";
import SimonButton from "./components/SimonButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimonButton pitch={1} btnText={"1"} btnColor={"red"} />
        <SimonButton pitch={1.25} btnText={"2"} btnColor={"blue"} />
        <SimonButton pitch={1.5} btnText={"3"} btnColor={"yellow"} />
        <SimonButton pitch={2} btnText={"4"} btnColor={"green"} />
      </header>
    </div>
  );
}

export default App;
