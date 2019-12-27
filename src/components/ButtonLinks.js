import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { list } from '../data';
import '../main.css';

const ButtonLinks = () => {
  return (
    <Container>
      <div className='button-links'>
        {list.map(item => (
          <Row key={item.id}>
            <Col>
              <div className='links'>
                <h1>{item.title}</h1>
                <img width='100px' src={item.img} alt={item.alt} />
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default ButtonLinks;
