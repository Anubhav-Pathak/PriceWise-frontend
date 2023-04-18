import React, {useContext, useEffect, useRef, useState} from 'react'
import { FileUploader } from "react-drag-drop-files";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import UserContext from '../../context/UserContext';
import Generate from './Generate';

const fileTypes = ["JPG", "PNG", "JPEG"];
const baseURL = "http://127.0.0.1:5000";

const Form = () => {

  const currentYear = new Date().getFullYear();
  const [load, setLoad] = useState(false);

  const nameRef = useRef();
  const modelRef = useRef();
  const carNumberRef = useRef();
  const manufacturingRef = useRef();
  const priceRef = useRef();
  const [file, setFile] = useState();

  const contextUser = useContext(UserContext);

  const handleChange = (fileData) => {
    setFile(fileData);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoad(true);
    contextUser.setUser({
      name: nameRef.current.value,
      model: modelRef.current.value,
      carNumber: carNumberRef.current.value,
      manufacturing: manufacturingRef.current.value,
      price: priceRef.current.value,
    });
    let form = new FormData();
    for (let i of file) form.append("files", i);
    form.append("manufacturing", manufacturingRef.current.value);
    form.append("price", priceRef.current.value);
    try{
      const response = await fetch(`${baseURL}/predict`, {
        method:"POST",
        body: form
      });
      if(!response.ok) throw Error("Oops ! Something Went Wrong !")
      const data = await response.json();
      contextUser.setPrice(data);
    }
    catch (error){
      console.log(error);
    }
    finally{
      setLoad(false);
    }
  }

  const generatePDF = async () => {

    const response = await fetch(`${baseURL}/pdf`, {
      method:"POST",
      body: JSON.stringify({
        name: contextUser.name,
        model: contextUser.model,
        carNumber: contextUser.carNumber,
        manufacturing: contextUser.manufacturing,
        price: contextUser.price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(!response.ok) throw Error("Oops ! Something Went Wrong !")
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
    { !load && contextUser.price === 0 ? (
      <form onSubmit={submitHandler} action='POST' encType='multipart/form-data' className='grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center'>
        <h1 className='text-2xl sm:text-4xl text-black font-bold col-span-full'>Upload your Car Details </h1>
        <div>
          <Input ref={nameRef} label="Name" input={{id:"name", type:"text"}} />
          <Input ref={modelRef} label="Car Model" input={{id:"model", type:"text"}} />
          <Input ref={carNumberRef} label="Vehicle Number" input={{id:"vehicleNumber", type:"text"}} />
          <Input ref={manufacturingRef} label="Manufacture Year" input={{id:"manufacturing", type: "number", min: "1980", max:`${currentYear}`, step:"1", defaultValue: `${currentYear}`}} />
          <Input ref={priceRef} label="Showroom Price" input={{id:"price", type: "number"}} />
        </div>
        <FileUploader handleChange={handleChange} name="files" types={fileTypes} multiple={true} label="Upload Car Images" />
        <input type='submit' value={"Predict"} className="mt-8 text-white font-bold px-4 py-2 bg-purple-500 rounded hover:bg-purple-700 col-span-full" />
      </form>
      ) : <Spinner />
    }
    {!load && contextUser.price !== 0 && <Generate generatePDF={generatePDF}/>}
    </>
  )
}

export default Form