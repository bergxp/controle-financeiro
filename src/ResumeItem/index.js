import React from 'react';
import  * as C from "./styles"
// import { Container } from './styles';

const ResumeItem = ({title,Icon,value}) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitlee>{title}</C.HeaderTitlee>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  )
}

export default ResumeItem;