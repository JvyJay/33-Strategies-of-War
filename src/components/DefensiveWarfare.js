import React, { useContext } from 'react';
import { StrategyContext } from './StrategyProvider';
import Content from './Content';

const DefensiveWarfare = () => {
  const strategy = useContext(StrategyContext);
  return (
    <>
      <h1 className='text-lg-center p-4 text-center'>Defensive Warfare</h1>
      {strategy.map(item => {
        if (item.id === 'Defensive-Warfare')
          return (
            <div key={item.strategy} className='container'>
              <Content
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                content={item.content}
              />
            </div>
          );
      })}
    </>
  );
};

export default DefensiveWarfare;
