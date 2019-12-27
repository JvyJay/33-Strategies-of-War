import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Navigation = () => {
  return (
    <Navbar color='dark' light expand='lg'>
      <NavbarBrand className='text-white'>33 Strategies of War</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink className='text-white'>Home</NavLink>
        </NavItem>
        <UncontrolledDropdown className='text-white' nav inNavbar>
          <DropdownToggle className='text-info' nav caret>
            Strategy
          </DropdownToggle>
          <DropdownMenu left='true'>
            <DropdownItem>Self-Directed Warfare</DropdownItem>
            <DropdownItem>Organizational {`(Team)`} Warfare</DropdownItem>
            <DropdownItem>Defensive Warfare</DropdownItem>
            <DropdownItem>Offensive Warfare</DropdownItem>
            <DropdownItem>Unconventional {`(Dirty)`} Warfare</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
