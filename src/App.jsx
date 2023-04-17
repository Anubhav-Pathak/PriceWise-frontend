import './App.css';
import React from 'react';
import Appbar from './components/Landing/appbar';
import Footer from './components/Landing/f';
function App() {

  return (
    <>
      <Appbar/>
      <main>
        <div className="App">
          <h1 className='text-4xl text-green-300'>Price-Wise FrontEnd Template</h1>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App ;
