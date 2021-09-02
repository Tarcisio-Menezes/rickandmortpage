import React from 'react';
import { Nav } from 'react-bootstrap';

function Nave() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/irmaodojorel">
      <Nav.Item>
        <Nav.Link href="/irmaodojorel">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/irmaodojorel/episode">Episódios</Nav.Link>
      </Nav.Item>
        <Nav.Link href="/irmaodojorel/about">Sobre</Nav.Link>
      <Nav.Item>
      </Nav.Item>
    </Nav>
  );
}

export default Nave;
