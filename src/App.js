import React from 'react';
import { StrategyProvider } from './components/StrategyProvider';
import NavRouter from './components/NavRouter';
import Footer from './components/Footer';

import './main.css';

const App = () => {
  return (
    <StrategyProvider>
      <div>
        <NavRouter />
        <Footer />
      </div>
    </StrategyProvider>
  );
};

export default App;
