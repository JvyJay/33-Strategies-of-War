import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ButtonLinks from './ButtonLinks';
import SelfList from './SelfList';
import TeamWarfare from './TeamWarfare';
import DefensiveWarfare from './DefensiveWarfare';
import OffensiveWarfare from './OffensiveWarfare';
import DirtyWarfare from './DirtyWarfare';

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

const NavRouter = () => {
  return (
    <Router>
      <Navbar className='nav-text' color='dark' light expand='lg'>
        <NavbarBrand className='text-white'>33 Strategies</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink>
              <Link className='text-white' to='/'>
                Home
              </Link>
            </NavLink>
          </NavItem>
          <UncontrolledDropdown className='text-white' nav inNavbar>
            <DropdownToggle className='text-info' nav caret>
              Strategy
            </DropdownToggle>
            <DropdownMenu right='true'>
              <DropdownItem>
                <Link className='text-info' to='/self-directed-warfare'>
                  Self-Directed Warfare
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link className='text-info' to='/organizational-warfare'>
                  Organizational {`(Team)`} Warfare
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link className='text-info' to='/defensive-warfare'>
                  Defensive Warfare
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link className='text-info' to='/offensive-warfare'>
                  Offensive Warfare
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link className='text-info' to='/unconventional-warfare'>
                  Unconventional {`(Dirty)`} Warfare
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
      <Switch>
        <Route path='/self-directed-warfare' component={SelfList} />
        <Route path='/organizational-warfare' component={TeamWarfare} />
        <Route path='/defensive-warfare' component={DefensiveWarfare} />
        <Route path='/offensive-warfare' component={OffensiveWarfare} />
        <Route path='/unconventional-warfare' component={DirtyWarfare} />
        <Route path='/' component={ButtonLinks} />
      </Switch>
    </Router>
  );
};

export default NavRouter;
