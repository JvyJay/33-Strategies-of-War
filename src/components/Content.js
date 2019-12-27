import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

export default function Content(props) {
  return (
    <Card>
      <CardImg top width='100%' src={props.img} alt='Card image cap' />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText>{props.content}</CardText>
      </CardBody>
    </Card>
  );
}
