import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { list } from '../data';
import '../main.css';

const ButtonLinks = () => {
  return (
    <Container>
      <h1 className='text-lg-center p-4'>Strategies</h1>
      <div className='text-center'>
        {list.map(item => (
          <Link to={`/${item.url}`}>
            <Row key={item.id}>
              <Col className='text-white'>
                <div className='links flex-center flex-column m-4 p-lg-4'>
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
