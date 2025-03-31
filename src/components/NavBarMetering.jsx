import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Home from './Home'

const NavBarMetering = () => {
  return (
    <div>
      <header>
        <Navbar justify="true" expand="xxl" data-bs-theme='dark' style={{backgroundColor: '#174708'}}>
          <Container>
            <Navbar.Brand href='/home'><Home/></Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
            <Nav fill="true" variant='tabs' className='me-auto' style={{ width: '100%' }}>
              <Nav.Item >
                <Nav.Link href="/consumptions" title='Consumptions'>Consumptions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/meters" title='Meters'>Meters</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/logout" title='Logout'>Logout</Nav.Link>
              </Nav.Item>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default NavBarMetering