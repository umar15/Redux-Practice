import { configureStore } from "@reduxjs/toolkit";
import CounterReducerTK from "./CounterReducerTK";

const store = configureStore({
	reducer: {
		counter: CounterReducerTK,
	},
});

export default store;
