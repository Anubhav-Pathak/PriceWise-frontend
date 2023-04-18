import './App.css';
import React, {useState} from 'react';
import Appbar from './components/Landing/appbar';
import Footer from './components/Landing/f';
import Modal from './ui/Modal';
import Form from './components/Form/Form';
import About from './components/Landing/About';

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    {showModal && <Modal setShowModal={setShowModal}><Form /></Modal>}
      <Appbar/>
      <div className="App text-white flex flex-col items-center justify-center gap-4">
        <h1 className='text-4xl font-bold'>Car Price Prediction</h1>
        <p className='text-xl'>Predict the price of your car</p>
        <button onClick={() => setShowModal(!showModal)} className='px-4 py-2 bg-purple-500 w-52 mt-8 rounded hover:bg-purple-700'>Predict</button>
      </div>
      <Footer/>
      
    </>
  )
}

export default App ;
