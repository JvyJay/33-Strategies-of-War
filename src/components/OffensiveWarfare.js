import React from 'react';
import Content from './Content';
import { offensiveWar } from '../data';

const OffensiveWarfare = () => {
  return (
    <>
      <h1 className='text-lg-center p-4 text-center'>Offensive Warfare</h1>
      {offensiveWar.map(item => (
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

export default OffensiveWarfare;
