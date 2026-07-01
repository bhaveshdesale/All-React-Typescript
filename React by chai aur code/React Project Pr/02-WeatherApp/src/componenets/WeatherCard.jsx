import React from 'react'

function WeatherCard({
  country,
  city,
  temperature,
  windSpeed,
  humidity
}) {
  return (
    <div className='weather-Card'>
      <p>Weather Data</p>
      <div className='weather-data'>
        <p>{`Country ${country}`}</p>
        <p>{`City ${city}`}</p>
        <p>{`Temperture ${temperature}`}</p>
        <p>{`Wind Speed ${windSpeed}`}</p>
        <p>{`Humdity ${humidity}`}</p>


      </div>
      
      
    </div>
  )
}

export default WeatherCard
