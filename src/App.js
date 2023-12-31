import React, { useState, useEffect } from 'react';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import MainHeader from './Component/MainHeader/MainHeader';
import AuthContext from './store/auth-context';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //to check wheather user is loggged in or not

  useEffect(() => {

    const StoreUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (StoreUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true)
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (

    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>

  );
}

export default App;
