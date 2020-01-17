import React from 'react';
import Content from './Content';
import { teamWar } from '../data';

const TeamWarfare = () => {
  return (
    <>
      <h1 className='text-lg-center p-4 text-center'>
        Organizational {`(Team)`} Warfare
      </h1>
      {teamWar.map(item => (
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

export default TeamWarfare;
