import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container-xxl">
        <div className="appInfo">
          <Weather defaultCity="Philippines" />
        </div>
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://lucid-feynman-8ef81b.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            Chessa Estuya{" "}
          </a>
          and is
          <a
            href="https://github.com/mcestuya/react-weather-search-app"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
