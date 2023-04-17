import React, { useEffect } from 'react'

const Predict = () => {

    

    useEffect(async () => {
        try {
            const response = await fetch(`${baseURL}/predict`, {})
            if (!response.ok()) throw Error("OOPS! Something went wrong !")
            const data = await response.data();
            
        }
        catch{

        }

    }, [])


    return (
        <div></div>
    )
}

export default Predict