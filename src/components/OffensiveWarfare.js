import React from 'react';
import Content from './Content';
import { offensiveWar } from '../data';

const OffensiveWarfare = () => {
  return (
    <>
      <h1 className='text-lg-center p-4'>Offensive Warfare</h1>
      {offensiveWar.map(item => (
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

export default OffensiveWarfare;
