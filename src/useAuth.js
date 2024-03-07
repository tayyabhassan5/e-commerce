// useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = (protectedPaths = []) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const isProtectedPath = protectedPaths.includes(window.location.pathname);

    if (isProtectedPath && !token) {
    
      navigate('/login');
    }
  }, [navigate, protectedPaths]);

  return true; 
};
