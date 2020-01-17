import React from 'react';
import Content from './Content';
import { defensiveWar } from '../data';

const DefensiveWarfare = () => {
  return (
    <>
      <h1 className='text-lg-center p-4 text-center'>Defensive Warfare</h1>
      {defensiveWar.map(item => (
        <div className='container'>
          <Content
            key={item.strategy}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
          />
        </div>
      ))}
    </>
  );
};

export default DefensiveWarfare;
