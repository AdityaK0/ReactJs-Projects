import React,{useEffect, useState} from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'
import WeatherHistory from './WeatherHistory'

function Weather() {
  const [weatherData,setWeatherData] = useState({})
  const [query,setQuery] = useState("")
  const [error,setError] = useState("")
  const [history,setHistory] = useState([])


  function localStorageConfig(data){
    let localStorageData = JSON.parse(localStorage.getItem("History")) || []
    let newHistory = {city:query,data}

    if (localStorageData) {
      
       let newList =[...localStorageData]
       newList.push(newHistory)
       localStorage.setItem("History",JSON.stringify(newList))
    }
    else{
        localStorage.setItem("History",JSON.stringify([newHistory]))
    }
  }

  async function fetchWeather(city){
    let searchQuerry = city || query
    console.log(searchQuerry,"querry");
    
    try {
        if (searchQuerry.trim().length<1) return setError("Please Enter the Input field Data")

        const localHistory = JSON.parse(localStorage.getItem("History")) || [];
        const cachedData = localHistory.find((item) => item.city === searchQuerry);

        if (cachedData) {
            setWeatherData(cachedData.data);
            setError("");
        }
        else{
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuerry}&appid=e829c7fe2fd239a435200fd5df4e9f1b&units=metric`)
                setWeatherData(response.data)
                localStorageConfig(response.data)
                setError("")
            } catch (error) {
                setError(error.message)
            }

        }


    } 
    catch (error) {
        setError(error.message)
        
    }

  }
  function onSelectHistoryCity(city){
    setQuery(city)
    fetchWeather(city)
  }



  useEffect(()=>{
    setHistory(
        (JSON.parse(localStorage.getItem("History")) || []).map((item) => item.city).reverse()
      );

  },[weatherData])

  return (
    <div className='h-screen flex flex-wrap mt-5 gap-3  items-center justify-center'>
        <div className='flex flex-col items-center'>
            <h1 className='text-center m-2 text-lg font-bold' >Weather Finder</h1>
            <div className='h-10 flex justify-between p-2'>
            {
                error? 
                <div>
                    <p className='text-red-600 font-bold'>ERROR : {error}</p>
                </div>:null
            }

            </div>


            <div className='flex gap-2'>
            <input type="text"  className='border outline-none shadow-xs rounded px-2 py-1 shadow-black' value={query} onChange={({target})=>setQuery(target.value)}/>
            <button className='border outline-none cursor-pointer shadow-xs rounded px-2 py-1 shadow-black' onClick={()=>fetchWeather()}>Fetch</button> 
            </div>
            
            <WeatherCard weatherData={weatherData}/>

        </div>

        <WeatherHistory history={history} onSelect={onSelectHistoryCity}/>


    </div>
  )
}

export default Weather