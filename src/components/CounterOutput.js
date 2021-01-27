import React from "react";
import { useSelector } from "react-redux";

const CounterOutput = () => {
	const counter = useSelector((state) => state.counter);
	const name = useSelector((state) => state.name);
	return (
		<>
			Counter: {counter} : {name}
		</>
	);
};

export default CounterOutput;
