import React from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarEnd,
  Icon,
} from 'bloomer'
import '../assets/css/index.css'
import logo from '../resources/cobuildlab.png'
import '../assets/css/index.css'

class headerBlog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  onClickNav = () => {
    this.setState(({ isActive }) => ({
      isActive: !isActive,
    }))
  }
  render() {
    return (
      <React.Fragment>
      <Navbar
        style={{ position: 'initial !important', margin: '0' }}
        className="isTransparent is-hidden-desktop"
      >
        <Container isFluid>
          <NavbarBrand>
            <NavbarItem>
              <Link className="link-nav" to="/">
                <img src={logo} style={{ marginRight: 5 }} />
              </Link>
            </NavbarItem>
            <NavbarBurger
              isActive={this.state.isActive}
              onClick={this.onClickNav}
            />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarEnd>
              <NavbarItem>
                <Link className="link-nav" to="/">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <a className="link-nav" href="/#process">
                  Cobuild Process
                </a>
              </NavbarItem>
              {/* <NavbarItem>
                <Link className="link-nav" to="/customer-success-stories">
                  Customer Success Stories
                </Link>
              </NavbarItem> */}
              <NavbarItem>
                <Link className="link-nav" to="/services">
                  Services
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="link-nav" to="/blog">
                  Blog
                </Link>
              </NavbarItem>
              <NavbarItem>
                <a href="#contact" className="link-nav">
                  Contact Us
                </a>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>

      <Navbar
        style={{ position: 'initial !important', margin: '0' }}
        className="isTransparent is-hidden-mobile"
      >
        <Container isFluid className="mt-25">
          <NavbarBrand>
              <Link className="link-nav" to="/">
                <img src={logo} style={{ marginRight: 5 }}  width="229" height="49" />
              </Link>
            <NavbarBurger
              isActive={this.state.isActive}
              onClick={this.onClickNav}
            />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarEnd>
              <NavbarItem>
                <Link className="link-nav" to="/">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <a className="link-nav" href="/#process">
                  Cobuild Process
                </a>
              </NavbarItem>
              {/* <NavbarItem>
                <Link className="link-nav" to="/customer-success-stories">
                  Customer Success Stories
                </Link>
              </NavbarItem> */}
              <NavbarItem>
                <Link className="link-nav" to="/services">
                  Services
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="link-nav" to="/blog">
                  Blog
                </Link>
              </NavbarItem>
              <NavbarItem>
                <a href="#contact" className="link-nav">
                  Contact Us
                </a>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
      </React.Fragment>
    )
  }
}
export default headerBlog
