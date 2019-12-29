import React from 'react';
import Content from './Content';
import { dirtyWar } from '../data';

const DirtyWarfare = () => {
  return (
    <>
      <h1 className='text-lg-center p-4'>Unconventional {`(Dirty)`} Warfare</h1>
      {dirtyWar.map(item => (
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

export default DirtyWarfare;
