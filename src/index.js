import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const rows = JSON.parse(document.getElementById("user-data").dataset.users);
const rootElement = document.getElementById("root");

ReactDOM.render(<App rows={rows} />, rootElement);
