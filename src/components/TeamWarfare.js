import React, { useContext } from 'react';
import { StrategyContext } from './StrategyProvider';

import Content from './Content';

const TeamWarfare = () => {
  const strategy = useContext(StrategyContext);
  return (
    <>
      <h1 className='text-lg-center p-4 text-center'>
        Organizational {`(Team)`} Warfare
      </h1>
      {strategy.map(item => {
        if (item.id === 'Org-Warfare')
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

export default TeamWarfare;
