import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import dayjs from "dayjs";

const Homepage = () => {
  // const [modeTemp, setModeTemp] = useState("celcius");
  const [location, setLocation] = useState("Jakarta");
  const [currentWeather, setCurrentWeather] = useState([]);
  const [currentDataLocation, setCurrentDataLocation] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [isReady, setIsReady] = useState("false");

  useEffect(() => {
    getCurrentWeather();
  }, []);

  const getCurrentWeather = async () => {
    await axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API}&q=${location}&days=7&aqi=no&alerts=no`)
      .then((ress) => {
        setCurrentWeather(ress.data.current);
        setCurrentDataLocation(ress.data.location);
        setForecast(ress.data.forecast.forecastday);
        setIsReady("true");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isReady) {
    return (
      <Layout>
        <div className="w-full px-4 md:px-0 md:w-[500px] mx-auto flex min-h-[100vh]">
          <div className="my-auto w-full">
            <div className="bg-gradient-to-r from-[#fdf6f6] to-[#FFD7A8] p-2 rounded-2xl flex flex-col">
              <div className="flex justify-evenly">
                <div>
                  <img src={currentWeather.condition?.icon.split("/64x64/").join("/128x128/")} alt="" />
                  <h2 className="font-semibold text-center text-sm">{currentWeather.condition?.text}</h2>
                </div>
                <div className="self-center">
                  <h2 className="font-normal text-6xl">{currentWeather.temp_c}°</h2>
                  <h2 className="font-normal text-base">{currentDataLocation.region}</h2>
                </div>
              </div>
              <div className="flex justify-evenly mt-2">
                <div className="text-center text-sm">
                  <h3 className="font-bold uppercase text-gray-400">Pressure</h3>
                  <p className="font-bold">{currentWeather.pressure_mb}mb</p>
                </div>
                <div className="text-center text-sm">
                  <h3 className="font-bold uppercase text-gray-400">Humidity</h3>
                  <p className="font-bold">{currentWeather.humidity}%</p>
                </div>
                <div className="text-center text-sm">
                  <h3 className="font-bold uppercase text-gray-400">Wind</h3>
                  <p className="font-bold">{currentWeather.wind_kph}km/h</p>
                </div>
              </div>
            </div>

            <div className="flex justify-evenly bg-white rounded-xl mt-5 px-2">
              {forecast.map((data) => {
                return (
                  <div key={data.date} className="">
                    <img src={data.day.condition?.icon} alt="" />
                    <h3 className="text-sm text-center text-gray-400 font-semibold">{dayjs(data.date).format("ddd")}</h3>
                    <h3 className="text-center font-bold">{data.day.avgtemp_c}°C</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Homepage;
