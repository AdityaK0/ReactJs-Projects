import React from 'react'

function FormInputs({title,fieldDetails,formData,nextStep,prevStep,submit,handleChange}) {
  return (
    <div className='m-auto max-w-102 min-h-75'>
    <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
    <div className="mb-4">
     { fieldDetails &&
        fieldDetails.map((el,index)=>{
            return (
                
                <div className="mb-4" key={index}>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                   {el.label}:
                  <input
                    type={el.type}
                    name={el.name}
                    value={formData[el.name]}
                    onChange={handleChange}
                    required = {el.required}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
            )
        })
     }
     
    </div>

    <div className='flex  justify-center gap-[20%]'>
        {       
            prevStep && 
            <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back
          </button>
        }

        {
            nextStep && 
            <button
            type="button"
            onClick={nextStep}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
        }
        {
            submit && 
            <button
            type="button"
            onClick={submit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        }
    </div>

  </div>
  )
}

export default FormInputs