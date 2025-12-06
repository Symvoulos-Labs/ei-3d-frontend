import { useState } from 'react';

// Mock authentication hook
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = () => {
    // In a real app, this would involve a call to an authentication service
    setIsAuthenticated(true);
  };

  const signOut = () => {
    // In a real app, this would involve clearing tokens and user data
    setIsAuthenticated(false);
  };

  return { isAuthenticated, signIn, signOut };
};
