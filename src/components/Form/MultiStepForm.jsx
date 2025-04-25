import { useState } from 'react';
import Tab from './Tab';
import FormInputs from './FormInputs';
import { inputFields,handleChangeSetter } from './constant';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    uniName:'',
    curCompany:'',
    curTech :'',
  });
  console.log(formData);
  
  const tabs = ["Personal Details","Carrer Details","Married Details","Other Details"]

    const handleChange = (e)=>{
        handleChangeSetter(e,setFormData)
    }


  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-full mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className='flex px-3 py-5 mb-3 shadow-black shadow-xs rounded justify-around'>
            {
                tabs.map((el,index)=>{
                    return(
                      <Tab key={index}  title={el} handleTab={()=>setStep(index+1)}  isActive={index+1 == step?true:false}/>
                    )
                       
                })
            }
        </div>


      {step === 1 && (
        <FormInputs title={"Personal Information"} fieldDetails = {inputFields.slice(0,3)}
        handleChange={handleChange}
        formData={formData}
        nextStep = {nextStep}
        />
      )}
      {step === 2 && (
        <FormInputs title={"Carrer Details"} fieldDetails = {inputFields.slice(3,5)} 
        handleChange={handleChange}
        formData={formData}
        nextStep = {nextStep}
        prevStep = {prevStep}
        />
      )}
      {step === 3 && (
        <FormInputs title={"Married Details"} fieldDetails = {inputFields.slice(5,inputFields.length)} 
        handleChange={handleChange}
        formData={formData}
        nextStep = {nextStep}
        prevStep = {prevStep}
        />
      )}
      {step === 4 && (
        <FormInputs title={"Other Details"} fieldDetails = {[]} 
        formData={formData}
        prevStep = {prevStep}
        submit  =  {handleSubmit}
        />
      )}


    </form>
  );
}

export default MultiStepForm;
