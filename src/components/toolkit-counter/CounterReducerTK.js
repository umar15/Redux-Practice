import { createReducer } from "@reduxjs/toolkit";
import { decrementAction, incrementAction, resetAction } from "./ActionsTK";

const CounterReducerTK = createReducer(0, {
	[incrementAction]: (state) => state + 1,
	[decrementAction]: (state) => state - 1,
	[resetAction]: 0,
});

export default CounterReducerTK;
