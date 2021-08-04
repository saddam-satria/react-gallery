import React, { useState } from 'react';
import { Collapse, Navbar, Nav, NavItem, Container } from 'reactstrap';
import * as Fa from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-component">
      <Navbar expand="md">
        <Container>
          <button onClick={toggle} className="navbar-toggler" aria-label="Toggle navigation" type="button">
            <span>
              <Fa.FaBars />
            </span>
          </button>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to='/'>Images</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
