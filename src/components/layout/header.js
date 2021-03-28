import React ,{useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,

    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

import {Link} from 'react-router-dom';

const Header = (props) =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="light" light expand="md">
            
            <NavbarBrand href="/">useReducers and Props Drills</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Banks
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <Link to="/actions/bank" >
                                Index
                            </Link>
                        </DropdownItem>
                      
                        <DropdownItem>
                            <Link  to="/actions/bank/add" >
                            Add
                            </Link>
                        </DropdownItem>
                                               
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Customers
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <Link to="/actions/customer" >
                                Index
                            </Link>
                        </DropdownItem>
                      
                        <DropdownItem>
                            <Link  to="/actions/customer/add" >
                            Add
                            </Link>
                        </DropdownItem>
                                               
                    </DropdownMenu>
                    </UncontrolledDropdown>
            </Nav>
            <NavbarText>Demo by Maen Mulhem</NavbarText>
            </Collapse>
      </Navbar>
    )
}

export default Header;