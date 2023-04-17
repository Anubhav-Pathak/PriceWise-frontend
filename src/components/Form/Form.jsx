import React, {useEffect, useRef, useState} from 'react'
import { FileUploader } from "react-drag-drop-files";
import Input from "../../ui/Input";
import axios from 'axios';

const fileTypes = ["JPG", "PNG", "GIF"];
const baseURL = "http://127.0.0.1:5000";

const Form = () => {

  const currentYear = new Date().getFullYear();

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
    let form = new FormData();
    for (let i of file) form.append("files[]", i);
    try{
      const response = await fetch(`http://127.0.0.1:5000/predict`, {
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
  }


  return (
    <form onSubmit={submitHandler} action='POST' encType='multipart/form-data'>
      {/* <div>
        <Input ref={nameRef} label="Name" input={{id:"name", type:"text"}} />
        <Input ref={modelRef} label="Car Model" input={{id:"model", type:"text"}} />
        <Input ref={carNumberRef} label="Vehicle Number" input={{id:"vehicleNumber", type:"text"}} />
        <Input ref={manufacturingRef} label="Manufacture Year" input={{id:"manufacturing", type: "number", min: "1980", max:`${currentYear}`, step:"1", defaultValue: `${currentYear}`}} />
        <Input ref={priceRef} label="Showroom Price" input={{id:"price", type: "number"}} />
      </div> */}
      <FileUploader handleChange={handleChange} name="files[]" types={fileTypes} multiple={true} label="Upload Car Images" />
      <input type='submit' value={"Predict"} className="mb-12 text-black px-4 py-2" />
    </form>
  )
}

export default Form