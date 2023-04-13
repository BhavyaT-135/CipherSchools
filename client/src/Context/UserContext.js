import { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Getting the user object using axios call to backend login api and setting the user in the state
    // Passing the email address and password in the body of the request
    axios.post('http://localhost:5000/api/v1/auth/login', { email: 'bhavyat@gmail.com', password: '12345678' })
      .then(res => {
        console.log(res.data.user)
        setUser(res.data.user)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
