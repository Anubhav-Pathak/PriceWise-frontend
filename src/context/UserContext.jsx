import React, {useState, useEffect} from 'react';

const UserContext = React.createContext({
    user: {},
    setDamages: () => {}
});

export const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  return(
    <UserContext.Provider value={{user: user}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserContext;