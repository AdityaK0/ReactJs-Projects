import React,{useState} from 'react'
import { useId } from 'react';
import DropList from './DropList';

function DropDown() {
    let id = useId()
    const [country,setCountry] = useState("")
    const [city,setCity] = useState("")
    const countryData = [
        {
            name: "India",
            cities: ["Delhi", "Mumbai"]
        },
        {
            name: "USA",
            cities: ["New York", "Los Angeles", "Chicago"]
        },
        {
            name: "UK",
            cities: ["London", "Manchester", "Birmingham"]
        },
        {
            name: "Canada",
            cities: ["Toronto", "Vancouver", "Montreal"]
        },
        {
            name: "Australia",
            cities: ["Sydney", "Melbourne", "Brisbane"]
        }
    ];
   
    const handleCountryChange = (event) =>{

     let countryDetails = countryData.find((c) => c.name == event.target.value)
     console.log(countryData);
     setCountry(countryDetails)
     
    }

    const handleCityChange = (event) =>{
        setCity(event.target.value)
    }
    

  return (
    <div className='flex h-screen justify-center items-center gap-2'>

        <DropList options={countryData.map((el)=>el.name)} onSelect={handleCountryChange}  title={"Country"}/>
        {  country?
        <DropList options={country.cities} onSelect={handleCityChange}  title={"City"}/>
         :null
        }

        {
            country && city && (
                <span>Country : {country.name}  City : {city}</span>
            )
        }
        
    </div>
  )
}

export default DropDown

// import React ,{useState} from 'react'

// function DropDown() {
//     const [country,setCountry] = useState("")
//     const countryData = [
//         {
//             name: "India",
//             cities: ["Delhi", "Mumbai"]
//         },
//         {
//             name: "USA",
//             cities: ["New York", "Los Angeles", "Chicago"]
//         },
//         {
//             name: "UK",
//             cities: ["London", "Manchester", "Birmingham"]
//         },
//         {
//             name: "Canada",
//             cities: ["Toronto", "Vancouver", "Montreal"]
//         },
//         {
//             name: "Australia",
//             cities: ["Sydney", "Melbourne", "Brisbane"]
//         }
//     ];
    
//   return (
//     <div className='shadow-2xs shadow-black flex justify-center w-102 border h-102 items-center p-2 '>
//      <select name="" id="" onChange={(e)=>setCountry(e.target.value)}>
//        <option value="" disabled>Select Country</option>
//         {countryData.map(el=>(<option value={el.name}> {el.name } </option>))}
//      </select>
//      {
//         country?<select>
//            {
//             countryData.map(el => {
//                 if (el.name == country) {
//                   return  el.cities.map((el1)=>  (<option value={el1}>{el1}</option>))
                   
//                  }
                
//             } )
//            }
//         </select>:null

//      }
//     </div>
//   )
// }

// export default DropDown