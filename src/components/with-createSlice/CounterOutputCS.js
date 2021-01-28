import React from "react";
import { useSelector } from "react-redux";

const CounterOutputTK = () => {
	const counter = useSelector((state) => state.counter);

	return <>Counter: {counter}</>;
};

export default CounterOutputTK;
