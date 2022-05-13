import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test pitch={1} btnText={"1"} btnColor={"red"} />
        <Test pitch={1.25} btnText={"2"} btnColor={"blue"} />
        <Test pitch={1.5} btnText={"3"} btnColor={"yellow"} />
        <Test pitch={2} btnText={"4"} btnColor={"green"} />
      </header>
    </div>
  );
}

export default App;
