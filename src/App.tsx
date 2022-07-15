import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { useAuthentication } from './hooks/useAuthentication';

const App:React.FC = () => {
  const {isLogged} = useAuthentication();
  // const nav = useNavigate();
  const logged = isLogged();
  console.log('logged', logged);

  if(!logged) {
    return <Navigate to="/login"/>
  }


  return (
    <div className="container">
      <Navbar/>
      <Outlet/>
    </div>    
  );
}

export default App;
