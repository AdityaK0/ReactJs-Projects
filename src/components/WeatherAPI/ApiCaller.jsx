import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiCaller() {
  let [weatherData, setWeatherData] = useState({});
  let [querryData, setQuerryData] = useState("");
  let [gotData, setGotData] = useState(false);
  let [recentHistory,setRecentHistory] = useState([])
  let [recentCity,setRecentCity] = useState([])
  let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${querryData}&appid=e829c7fe2fd239a435200fd5df4e9f1b&units=metric`;


  async function fetchWeather(){
    const response = await axios.get(api_url);
    // console.log(response);
    console.log("Response Data",response.data);
    
    setWeatherData(response.data);
    let getLocalStorageItem = localStorage.getItem("Recent History")
    let getSpecificCity = localStorage.getItem("City History")
    
    if(getLocalStorageItem){
      
      let updateList  = JSON.parse(getLocalStorageItem)
      updateList.push(response.data)
      localStorage.setItem("Recent History", JSON.stringify(updateList))
    }
    else{
      localStorage.setItem("Recent History", JSON.stringify([response.data]));
    }

    if(getSpecificCity){
      let updateList  = JSON.parse(getSpecificCity)
      updateList.push(querryData)
      localStorage.setItem("City History", JSON.stringify(updateList))

    }
    else{
      localStorage.setItem("City History", JSON.stringify([querryData]));
    }
    
    setGotData(true);
    setHX()
    setQuerryData("")

  }

   function CallAPI() {
    try {
        console.log(recentCity);
        
        let isCached = recentCity.find(el => el === querryData)
        if (isCached) {
          console.log("WE HAVE DAATA");
          let LocalLIST = JSON.parse(localStorage.getItem("Recent History"))
          LocalLIST.map((el)=>{
            if(el.name === querryData){
               setWeatherData(el)
            }
          })

          
        }
        else{
          fetchWeather()
        }
         
          
       }

    catch (error) {
      console.log("Got Error ->", error);
    }
  }

  function setHX(){
    setRecentHistory((prev)=>{
      let getLocalStorageItem = JSON.parse(localStorage.getItem("Recent History"))
      if (getLocalStorageItem) {
        return getLocalStorageItem
      }
      else{
        return prev
      }


    })

    setRecentCity((prev)=>{
      let getLocalStorageItem = JSON.parse(localStorage.getItem("City History"))
      if (getLocalStorageItem) {
        return getLocalStorageItem
      }
      else{
        return prev
      }
      
    })

    

  }
    useEffect(()=>{
      setHX()
      

      return ()=>{}
    },[])

  return (
    <div className="h-screen flex gap-3 justify-center items-center">
    <div className="flex flex-col justify-center items-center w-102">
      <h1 className="text-center m-2">Api Weather Finder</h1>
      <div className="flex gap-2">
      <input
        className="shadow-sx border shadow-black outline-none rounded  "
        type="text"
        value={querryData}
        onChange={({ target }) => setQuerryData(target.value)}
      />
      <button className="border rounded outline-none px-3 bg-black cursor-pointer font-medium text-xs text-white" onClick={CallAPI}>Call API</button>
      </div>

      
      {Object.keys(weatherData).length>0 ? 
        <div className="flex flex-col gap-1 justify-between">
          <h3>API DATA</h3>
          <div>{weatherData?.name}</div>
          <p>Current Tempreture : {weatherData?.main?.temp}</p>
          <p>
            Coordinates {"=>"} Longitude : {weatherData?.coord?.lon} & Latitiude
            : {weatherData?.coord?.lat}
          </p>
        </div>
      : 
        <div>No Data</div>
      }


    </div>

      <div className="border h-72 w-52 rounded p-3 overflow-y-auto">
        <h3 className="text-center m-1">Recent Searched History</h3>

          {
            recentHistory?
            <ul>
               {
                recentHistory.map((el)=>(<li className="bg-black p-2 mb-1 text-white rounded">{el.name}</li>))
               }
            </ul>

            :null
          }

      </div>
    </div>
  );
}

export default ApiCaller;
