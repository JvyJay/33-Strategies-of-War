import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import self from '../img/self.png';
import team from '../img/team.png';
import defensive from '../img/defense.png';
import offensive from '../img/offense.png';
import dirty from '../img/dirty.png';

const ButtonLinks = () => {
  return (
    <Container className='container'>
      <Row>
        {' '}
        <Col>
          <div>
            <h2>Self-Directed Warfare</h2>
            <img width='100px' src={self} />
          </div>
        </Col>
      </Row>
      <Row>
        {' '}
        <Col>
          <div>
            <h2>Organizational {`(Team)`} Warfare</h2>
            <img width='100px' src={team} />
          </div>
        </Col>
      </Row>
      <Row>
        {' '}
        <Col>
          <div>
            <h2>Defensive Warfare</h2>
            <img width='100px' src={defensive} />
          </div>
        </Col>
      </Row>
      <Row>
        {' '}
        <Col>
          <div>
            <h2>Offensive Warfare</h2>
            <img width='100px' src={offensive} />
          </div>
        </Col>
      </Row>
      <Row>
        {' '}
        <Col>
          <div>
            <h2>Unconventional {`(Dirty)`} Warfare</h2>
            <img width='100px' src={dirty} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ButtonLinks;
