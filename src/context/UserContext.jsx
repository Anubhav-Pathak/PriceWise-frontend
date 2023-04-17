import React, {useState, useEffect} from 'react';

const UserContext = React.createContext({
    damages: {},
    setDamages: () => {}
});

export const UserContextProvider = (props) => {
  const [damages, setDamages] = useState({});
  return(
    <UserContext.Provider value={{damages: damages, setDamages: setDamages}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserContext;