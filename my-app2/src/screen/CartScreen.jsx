import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { useSelector ,useDispatch} from 'react-redux'
import {FaTrash} from 'react-icons/fa'
import {deleteFromCart} from '../actions/cartAction'
const checkOut=()=>{
    window.location.href="/payment"
    
}


const CartScreen=()=> {
    
    const cartState=useSelector(state=> state.cartReducer)
    const cartItems =cartState.cartItems
    const dispatch= useDispatch()
    return (
        <>
            <Container >
                <Row>
                    <Col md={6}>
                       <h1>My Cart</h1><hr/>
                       <Row>
                           
                            
                           {
                               cartItems.map((item)=>(
                                   <>
                                      <Col md={7}>
                                          <h5>{item.name} <br/><h6> ({item.varient})</h6></h5>
                                          <h6>Price: {item.quantity}  x  {item.prices[0][item.varient]}={""}  {item.price}</h6>
                                          <h5 >
                                            Quantity: 
                                            {item.quantity}  &nbsp;
                            
                                            </h5>

                                      </Col>
                                      <Col md={5}>
                                        <img alt={item.name} src={item.image} style={{width:"80px",height:"80px"}}/>
                                            <FaTrash className="text-danger"
                                            style={{cursor:"pointer",marginLeft:"20px"}}
                                            onClick={()=>{
                                                dispatch(
                                                    deleteFromCart(item)
                                                )}}/>
                                      
                                      </Col>
                                      
                                      <hr/>
                                   </>
                                   
                               ))
                           }
                           
                       </Row>
                    </Col>
                    
                    
                      <div >
                     <button className="btn-outline-success" style={{minWidth:"200px"}} onClick={checkOut}>Check Out</button>

                      </div>
                     
                    
                </Row>
            </Container>

            
        </>
    )
}

export default CartScreen
