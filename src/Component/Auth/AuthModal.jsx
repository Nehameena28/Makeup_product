import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return isLogin ? (
    <Login 
      onClose={onClose} 
      switchToRegister={() => setIsLogin(false)} 
    />
  ) : (
    <Register 
      onClose={onClose} 
      switchToLogin={() => setIsLogin(true)} 
    />
  );
};

export default AuthModal;