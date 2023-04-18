import React, {useContext} from 'react'
import UserContext from '../../context/UserContext';

const Generate = (props) => {
    const contextUser = useContext(UserContext);
  return (
    <div className='text-black absolute inset-0 flex flex-col gap-8 place-content-center place-items-center bg-white'>
        <h1 className='text-2xl'>Predicted Price: <strong>Rs. {contextUser.price}</strong></h1> 
        <button onClick={props.generatePDF} className='px-4 py-2 bg-purple-500 hover:bg-purple-700'>Generate PDF</button>
    </div>
  )
}

export default Generate