import React from "react";
import dayjs from "dayjs";

const Forecast = (props) => {
  return (
    <div className="flex justify-evenly bg-white rounded-xl mt-5 px-2">
      {props.forecast.map((data) => {
        return (
          <div key={data.date} className="">
            <img src={data.day.condition?.icon} alt="" />
            <h3 className="text-sm text-center text-gray-400 font-semibold">{dayjs(data.date).format("ddd")}</h3>
            <h3 className="text-center font-bold">{data.day.avgtemp_c}°C</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
