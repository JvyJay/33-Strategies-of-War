import React from 'react';
import { StrategyContext } from './components/StrategyProvider';
import NavRouter from './components/NavRouter';
import Footer from './components/Footer';
import data from './data';

import './main.css';

const App = () => {
  return (
    <StrategyContext.Provider value={data}>
      <div>
        <NavRouter />
        <Footer />
      </div>
    </StrategyContext.Provider>
  );
};

export default App;
