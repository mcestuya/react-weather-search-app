import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <h6>
        Last updated: <FormattedDate date={props.data.date} />
      </h6>
      <div className="WeatherInfo">
        <div className="row mt-1">
          <div className="left-col">
            <ul>
              <br />
              <li>
                <WeatherTemperature celsius={props.data.temperature} />
                <li className="text-capitalize"> {props.data.description} </li>
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="right-col">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={150} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
