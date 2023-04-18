import React, {useEffect, useRef, useState} from 'react'
import { FileUploader } from "react-drag-drop-files";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

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

  const handleChange = (fileData) => {
    setFile(fileData);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoad(false);
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
      console.log(data);

    }
    catch (error){
      console.log(error);
    }
    finally{
      setLoad(false);
    }
  }


  return (
    <>
    { !load ? (
      <form onSubmit={submitHandler} action='POST' encType='multipart/form-data' className='grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center'>
        <h1 className='text-2xl sm:text-4xl text-black font-bold col-span-full'>Upload your Car Details</h1>
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
    </>
  )
}

export default Form