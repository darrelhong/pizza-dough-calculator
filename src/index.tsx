/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import { Route, Router, Routes } from "@solidjs/router";

import App from "./App";
import Notes from "./Notes";
import { initialiseTheme } from "./utils/dark-mode";

initialiseTheme();

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  ),
  root!,
);
