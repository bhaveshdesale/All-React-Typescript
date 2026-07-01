import { useState } from 'react'
import './App.css'
import Header from './componenets/Header'
import InputBox from './componenets/InputBox'
import WeatherCard from './componenets/WeatherCard'
import Footer from './componenets/Footer'
import useWeatherData from './hooks/useWeatherData'
import LoadingState from './componenets/LoadingState'
function App() {

  const [city, setCity]=useState("");
  const [searchCity, setSearchCity]=useState("");
  const [loading, setLoading]=useState();
  const [error, setError]=useState();
const weatherData=useWeatherData(searchCity);


const onBtnClick=()=>{
 setSearchCity(city)
}


  return (
   <div className='main-body'>
    <Header/>
     <main
     className='main'>
      <InputBox
      label="City"
      city={city}
      onCityChange={(city)=> setCity(city)}
      onButtonChange={onBtnClick}
        />

        {weatherData?.main?  <WeatherCard 
      country={weatherData["sys"]?.["country"]}
      city={weatherData["name"]}
      temperature={weatherData["main"]?.["temp"]}
      windSpeed={weatherData["wind"]?.["speed"]}
      humidity={weatherData["main"]?.["humidity"]}
      /> : <LoadingState/>}
        
       
     </main>
  <Footer/>
   </div>
  )
}

export default App
