import React, { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext';

const Predict = () => {

    const ctxUser = useContext(UserContext);

    useEffect(async () => {
        try {
            const response = await fetch(`${baseURL}/predict`, {})
            if (!response.ok()) throw Error("OOPS! Something went wrong !")
            ctxUser.damages = await response.data();
        }
        catch{
            
        }

    }, [])


    return (
        <div></div>
    )
}

export default Predict