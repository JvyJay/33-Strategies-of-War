import React from 'react';
import Content from './Content';
import { teamWar } from '../data';

const TeamWarfare = () => {
  return (
    <>
      <h1 className='text-lg-center p-4'>Organizational {`(Team)`} Warfare</h1>
      {teamWar.map(item => (
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

export default TeamWarfare;
