import React, {useState, useEffect} from 'react';

const UserContext = React.createContext({
    user: {},
    price: 0,
    setDamages: () => {}
});

export const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [price, setPrice] = useState(0);
  return(
    <UserContext.Provider value={{user: user, setUser: setUser, price: price, setPrice: setPrice}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserContext;