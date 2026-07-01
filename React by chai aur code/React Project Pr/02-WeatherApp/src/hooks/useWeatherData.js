import { useEffect } from "react";
import { useState } from "react";

function useWeatherData(city){
  const [weatherData, setWeatherData]=useState({});
  useEffect(()=>{
    if(!city) return 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=388a813bb271ff84ab039a3a03255424`)
    .then((res)=> res.json())
    .then((res)=> {console.log(res);
      setWeatherData(res)
    })
  
  
  },[city])
  return weatherData;

}

export default useWeatherData;