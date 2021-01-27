import "./App.css";
import CounterInput from "./components/CounterInput";
import CounterOutput from "./components/CounterOutput";
import CounterInputTK from "./components/toolkit-counter/CounterInputTK";
import CounterOutputTK from "./components/toolkit-counter/CounterOutputTK";

function App() {
	return (
		<div className="App">
			<CounterOutputTK />
			<br />
			<CounterInputTK />
		</div>
	);
}

export default App;
