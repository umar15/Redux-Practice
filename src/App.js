import "./App.css";
import CounterInput from "./components/CounterInput";
import CounterOutput from "./components/CounterOutput";

function App() {
	return (
		<div className="App">
			<CounterOutput />
			<br />
			<CounterInput />
		</div>
	);
}

export default App;
