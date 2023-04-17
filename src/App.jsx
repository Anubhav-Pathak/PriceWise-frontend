import './App.css';
import React, {useState} from 'react';
import Appbar from './components/Landing/appbar';
import Footer from './components/Landing/f';
import Modal from './ui/Modal';
import About from './components/Landing/About';

import Uploader from './components/Landing/Uploader';
function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    {showModal && <Modal setShowModal={setShowModal}><Uploader /></Modal>}
      <Appbar/>
      {/* <About/> */}
      <main>
        <div className="App">
          <h1 className='text-4xl text-green-300'>Price-Wise FrontEnd Template</h1>
          <button onClick={() => setShowModal(!showModal)} className='px-4 py-2 bg-purple-600'>Predict</button>
        </div>
      </main>
      <Footer/>
      
    </>
  )
}

export default App ;
