import { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [page, setPage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  return (
    <PortfolioContext.Provider value={null}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
