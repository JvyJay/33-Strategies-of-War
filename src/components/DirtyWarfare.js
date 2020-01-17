import React from 'react';
import Content from './Content';
import { dirtyWar } from '../data';

const DirtyWarfare = () => {
  return (
    <>
      <h1 className='text-lg-center p-4 text-center'>
        Unconventional {`(Dirty)`} Warfare
      </h1>
      {dirtyWar.map(item => (
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

export default DirtyWarfare;
