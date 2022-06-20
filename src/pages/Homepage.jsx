import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";

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
            <CurrentWeather currentWeather={currentWeather} currentDataLocation={currentDataLocation} />

            <Forecast forecast={forecast} />
          </div>
        </div>
      </Layout>
    );
  }
};

export default Homepage;
