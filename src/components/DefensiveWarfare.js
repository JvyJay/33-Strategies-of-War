import React, { useContext, useEffect, useState } from 'react';
import { StrategyContext } from './StrategyProvider';
import Content from './Content';
import SearchForm from './SearchForm';

const DefensiveWarfare = () => {
  const strategy = useContext(StrategyContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setResults] = useState([]);

  const handleChanges = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const result = strategy.filter(item =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setResults(result);
  }, [searchTerm]);
  return (
    <>
      <h1 className='text-lg-center p-4 text-center'>Defensive Warfare</h1>
      <SearchForm value={searchTerm} handle={handleChanges} />
      {searchResults.map(item => {
        if (item.id === 'Defensive-Warfare')
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

export default DefensiveWarfare;
