import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Philippines" />
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://lucid-feynman-8ef81b.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            {" "}
            Chessa Estuya{" "}
          </a>
          and is
          <a
            href="https://github.com/mcestuya/react-weather-search-app"
            target="blank"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
