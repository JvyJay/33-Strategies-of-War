import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import '../main.css';

export default function Content(props) {
  return (
    <Card className='flex flex-column justify-content-center align-items-center text-center'>
      <CardBody className='w-75'>
        <img width='50px' src={props.img} alt='Card cap' />
        <CardTitle className='font-weight-bolder'>{props.title}</CardTitle>
        <CardSubtitle className='text-info'>{props.subtitle}</CardSubtitle>
        <CardText className='font-weight-light'>{props.content}</CardText>
      </CardBody>
    </Card>
  );
}
