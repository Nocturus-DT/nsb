import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // Carrega dados do localStorage na inicialização
  useEffect(() => {
    const savedUser = localStorage.getItem('nsbridge-user');
    const savedCart = localStorage.getItem('nsbridge-cart');
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Persiste usuário
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('nsbridge-user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nsbridge-user');
  };

  // Carrinho
  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem('nsbridge-cart', JSON.stringify(newCart));
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('nsbridge-cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('nsbridge-cart');
  };

  return (
    <AppContext.Provider value={{
      user, login, logout,
      cart, addToCart, removeFromCart, clearCart
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);