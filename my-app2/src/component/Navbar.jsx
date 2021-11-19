import React from 'react';
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'

import {useDispatch,useSelector} from 'react-redux'
import {logoutUser} from '../actions/userAction'

const Topbar = () => {
    const dispatch = useDispatch()
    const cartState = useSelector(state=>state.cartReducer);
    const userState =useSelector(state=> state.loginUserReducer);
    const {currentUser}=userState
    
    return (
        <>
                 <Navbar bg="dark" variant="dark">
                 <Container>
                 <Navbar.Brand href="#home" style={{color:"cyan",fontFamily:"serif", fontStyle:'italic'}}>Cakes & Flowers</Navbar.Brand>
                 <Nav className="me-auto">
                 <Nav.Link href="/home" className="nav-link active" aria-current="page">Home</Nav.Link>
                 <Nav.Link href="/about" className="nav-link active" aria-current="page">About</Nav.Link>
                 <Nav.Link href="/contact" className="nav-link active"  aria-current="page">Contact Us</Nav.Link>
                 </Nav>
               
                 <Nav>
                     {
                         currentUser ? ( 
                          <Nav href="/home">
                          {/* <Nav.Link>{currentUser.name}</Nav.Link>  */}
                          <NavDropdown title={currentUser.name} id="basic-nav-deopdowm">
                            
                              <NavDropdown.Item onClick={()=>{
                                  dispatch(logoutUser())}}  >Logout</NavDropdown.Item>
                          </NavDropdown>
                          </Nav>
                         
                         ):(<>
                                
                              <Nav.Link href="/login" className="fa nav-link active fa-sign-in me-1" aria-current="page" > Login </Nav.Link>
                              <Nav.Link href="/register" className="fa nav-link active fa-user-plus me-1" aria-current="page"> Sign Up</Nav.Link></>)
                     }
                 <Nav.Link href="/cart" className="fa nav-link active fa-shopping-cart me-1" aria-current="page"> Cart ({cartState.cartItems.length})</Nav.Link>
                
                 </Nav>
                 </Container>
                 </Navbar>
  


               

            {/* <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="#">Cakes & Flowers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Cakes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Flowers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Combos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">About Us</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                <div className="buttons">
                            <a href="" className="button btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>Login
                            </a>
                            <a href="" className="button btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Sign In
                            </a>
                            <a href="" className="button btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart(0)
                            </a>
                        </div>
            </nav> */}
        </>
    )
}

export default Topbar;