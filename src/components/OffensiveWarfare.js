import React, { useContext, useEffect, useState } from 'react';
import { StrategyContext } from './StrategyProvider';
import Content from './Content';
import SearchForm from './SearchForm';

const OffensiveWarfare = () => {
  const strategy = useContext(StrategyContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setResults] = useState([]);

  // Search form typing functionality
  const handleChanges = event => {
    setSearchTerm(event.target.value);
  };

  // Search filter functionality
  useEffect(() => {
    const result = strategy.filter(item =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setResults(result);
  }, [searchTerm]);
  return (
    <>
      <h1 className='text-lg-center p-4 text-center'>Offensive Warfare</h1>
      <SearchForm value={searchTerm} handle={handleChanges} />
      {searchResults.map(item => {
        if (item.id === 'Offensive-Warfare')
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

export default OffensiveWarfare;
