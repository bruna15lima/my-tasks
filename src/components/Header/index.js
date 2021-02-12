import React from 'react';
import { MdCheck } from 'react-icons/md';
import { Container } from './styles';

export default function Header() {
  return (
  <Container >
   
    <MdCheck size = {24} color = "#FFF" />
          
    <h1>TasksApp</h1>
 </Container >
    
);
}


