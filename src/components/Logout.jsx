import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; 
import { useNavigate } from 'react-router-dom'; 

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      navigate('/'); 
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <button className='underline font-bold' onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
