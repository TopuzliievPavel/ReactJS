import React from 'react';
import './styles.scss';
import logo from '../../../utils/images/logo.png';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const links = [
  {title: 'Home', url: '/Home'},
  {title: 'About', url: '/About'},
  {title: 'Portfolio', url: '/Portfolio'},
  {title: 'Featured', url: '/Featured'},
  {title: 'Testimonials', url: '/Testimonials'},
  {title: 'SearchUsers', url: '/SearchUsers'},
  {title: 'Contacts', url: '/Contacts'},
]

export class Header extends React.Component {

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <header className='header'>
      <Navbar color="dark" light expand="md">
        <Container>
          <Link to='/' className="logo navbar-brand">
            <img src={logo} alt='react' height="60px"/>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(item => (
                <NavItem key={item.url}>
                  <Link to={item.url} className="nav-link">
                    {item.title}
                  </Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  }
}