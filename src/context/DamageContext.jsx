import React, {useState, useEffect} from 'react';

const DamageContext = React.createContext({
    damages: {},
    setDamages: () => {}
});

export const DamageContextProvider = (props) => {
  const [damages, setDamages] = useState({});
  return(
    <DamageContext.Provider value={{damages: damages, setDamages: setDamages}}>
        {props.children}
    </DamageContext.Provider>
  )
}

export default DamageContext;