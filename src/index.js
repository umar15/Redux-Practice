import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import store from "./components/toolkit-counter/StoreTK";
// import store from "./components/with-createSlice/StoreCS";

ReactDOM.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<App />
		{/* </Provider> */}
	</React.StrictMode>,
	document.getElementById("root")
);
