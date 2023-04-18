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
      {/* <About/> */}
      <main>
        <div className="App">
          <button onClick={() => setShowModal(!showModal)} className='px-4 py-2 bg-purple-600'>Predict</button>
        </div>
      </main>
      <Footer/>
      
    </>
  )
}

export default App ;
