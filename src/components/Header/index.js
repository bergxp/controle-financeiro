import React from "react";
import * as C from "./styles"; // * tras todos os importes de styles e atribui a variavel C

const Header = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Controle Financeiro</C.Title>
      </C.Header>
    </C.Container>
  );
};
export default Header;
