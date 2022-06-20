import React from "react";

const CurrentWeather = (props) => {
  return (
    <div className="bg-gradient-to-r from-[#fdf6f6] to-[#FFD7A8] p-2 rounded-2xl flex flex-col">
      <div className="flex justify-evenly">
        <div>
          <img src={props.currentWeather.condition?.icon.split("/64x64/").join("/128x128/")} alt="" />
          <h2 className="font-semibold text-center text-sm">{props.currentWeather.condition?.text}</h2>
        </div>
        <div className="self-center">
          <h2 className="font-normal text-7xl">{props.currentWeather.temp_c}°</h2>
          <h2 className="font-normal text-base">{props.currentDataLocation.region}</h2>
        </div>
      </div>
      <div className="flex justify-evenly mt-2">
        <div className="text-center text-sm">
          <h3 className="font-bold uppercase text-gray-400">Pressure</h3>
          <p className="font-bold">{props.currentWeather.pressure_mb}mb</p>
        </div>
        <div className="text-center text-sm">
          <h3 className="font-bold uppercase text-gray-400">Humidity</h3>
          <p className="font-bold">{props.currentWeather.humidity}%</p>
        </div>
        <div className="text-center text-sm">
          <h3 className="font-bold uppercase text-gray-400">Wind</h3>
          <p className="font-bold">{props.currentWeather.wind_kph}km/h</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
