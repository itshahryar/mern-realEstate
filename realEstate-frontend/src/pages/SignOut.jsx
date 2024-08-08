import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/actions'; // Adjust the path to your actions file

const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      // Make an API call to sign out the user
      await fetch('/api/signout', {
        method: 'POST',
        credentials: 'include', // To include cookies in the request
      });
      
      // Clear user state from Redux
      dispatch(clearUser());

      // Redirect to sign-in page
      navigate('/sign-in');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className='text-slate-700 hover:underline cursor-pointer'
    >
      Sign Out
    </button>
  );
};

export default SignOut;