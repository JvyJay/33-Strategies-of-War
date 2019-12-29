import React from 'react';
import Content from './Content';
import { selfDirectedWar } from '../data';

const SelfList = () => {
  return (
    <>
      <h1 className='text-lg-center p-4'>Self-Directed Warfare</h1>
      {selfDirectedWar.map(item => (
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

export default SelfList;
