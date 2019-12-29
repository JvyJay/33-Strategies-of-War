import React from 'react';
import Content from './Content';
import { defensiveWar } from '../data';

const DefensiveWarfare = () => {
  return (
    <>
      <h1 className='text-lg-center p-4'>Defensive Warfare</h1>
      {defensiveWar.map(item => (
        <Content
          key={item.strategy}
          img={item.img}
          title={item.title}
          subtitle={item.subtitle}
          content={item.content}
        />
      ))}
    </>
  );
};

export default DefensiveWarfare;
