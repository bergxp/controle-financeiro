import React from 'react';
import ResumeItem from '../../ResumeItem';
import * as C from "./styles"
import {FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaDollarSign} from "react-icons/fa"

// import { Container } from './styles';

function Resume({income, expense, total}) {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title="Saida" Icon={FaRegArrowAltCircleDown} value={expense}/>
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}

export default Resume;