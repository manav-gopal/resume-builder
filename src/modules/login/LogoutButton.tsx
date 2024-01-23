import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from 'src/stores/reducers/userDataReducer';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';
import path from 'path';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const userData: any = useSelector((state) => state.userData);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Your server endpoint to handle logout (clear the server-side session if applicable)
      // await axios.post('/api/auth/logout');
  
      // Clear the JWT token stored in cookies
      Cookies.remove('access_token', null, { path: '/', httpOnly: true, secure: false, expires: new Date(0) });
  
      // Clear the user data in the Redux store
      dispatch(setUserData(null));
  
      // Redirect to the home page or login page after logout
      router.push('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
