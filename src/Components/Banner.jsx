import React, { useEffect, useState } from 'react'
import instance from '../Instance'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import  logo from '../assets/logo.png'
import { Button } from 'react-bootstrap'
function Banner({ fecturl }) {
  const [movie, setMovie] = useState([])

  async function fetchData() {
    const request = await instance.get(fecturl)
    const result = request.data.results
    setMovie(result[Math.floor(Math.random() * result.length)])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div
      style={{
        position: 'relative', 
        margin: 0,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        color: 'white',
        overflow: 'hidden',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        textAlign:"center"
      }}
      className="maindiv"
    >
     
      <Navbar
        expand="lg"
        variant="dark"
        style={{
          position: 'absolute', 
          top: 0,
          width: '100%',
          background: 'transparant', 
            height:'10%',
          zIndex: 10, 
        }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'white', fontWeight: 'bold' }}>
            <img src={logo} alt="" style={{width:'200px'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" style={{ color: 'white' }}><Button id='bu'>Home</Button></Nav.Link>
              {/* <Nav.Link href="#link" style={{ color: 'white' }}>Link</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <div style={{ position: 'absolute',top:'45%' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          {movie.title}
        </h1>
        <h4>Released on {movie.release_date}</h4>
      </div>
    </div>
  )
}

export default Banner
