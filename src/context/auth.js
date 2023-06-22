import { useState, useEffect } from 'react';
import { firebaseAuth } from './firebase';
import { firebaseAuth } from './config';

// Define your authentication functions here


export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return { currentUser };
};