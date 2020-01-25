import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { list } from '../data';

const ButtonLinks = () => {
  return (
    <Container>
      <h1 className='p-4 text-center'>Strategies</h1>
      <div className='text-center'>
        {list.map(item => (
          <Link to={`/${item.url}`}>
            <Row key={item.id}>
              <Col className='text-white'>
                <div className='links flex-center flex-column m-4 p-4 shadow-lg p-3 mb-5 rounded'>
                  <img width='100px' src={item.img} alt={item.alt} />
                  <h1>{item.title}</h1>
                </div>
              </Col>
            </Row>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ButtonLinks;
