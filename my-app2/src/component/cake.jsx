import React,{useState} from 'react'
//import { Card,Button } from 'react-bootstrap'
import {Button,Row,Col,Modal} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'
const Cake = ({cake}) => {
    const[varient,setVarient]=useState("half") 
    const[quantity,setQuantity]=useState(1)  
    const [show, setShow] = useState(false);

    const dispatch =useDispatch()
    const addToCartHandler=()=>{
        dispatch(addToCart(cake,quantity,varient))
        window.location.href="/login"
    }
    const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     return (
        <>
            < div class="card" style={{width:"18rem",marginTop:"20px"}}>
            <img src={cake.image} class="card-img-top " alt="" style={{height:"200px",cursor:"pointer"}}
             onClick={handleShow}/>
            <div class="card-body">
            <h5 class="card-title">{cake.name}</h5>
            <hr/>
            <p class="card-text">
                <Row>
                    <Col md={6}>
                        <h6>Varients</h6>
                        <select value={varient} onChange={(e)=>setVarient(e.target.value)}>
                            {cake.varients.map(varient=>(
                                <option >
                                    {varient}
                                </option>
                            ))}
                        </select>
                    </Col>

                

                    <Col md={6}>
                        <h6>Quantity</h6>
                        <select 
                           value={quantity} 
                           onChange={(e)=>setQuantity(e.target.value)} >
                           {[...Array(4).keys()].map((v,i)=>(
                               <option value={i+1}>{i+1}</option>
                            ) )}
                        </select>
                    </Col>
                </Row>
            </p>
           <Row>
              <Col md={6}>Price :{cake.prices[0][varient]*quantity} /-Rs</Col>
              <Col md={6}>
                  <Button
                   onClick={addToCartHandler}
                   className="bg-dark text-white">Add to cart</Button>
              </Col>
           </Row>
           </div>
           </div>
           
            

            {/*Modal */}
            <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
            <Modal.Title>{cake.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <div>
            <img src={cake.image} class="card-img-top " alt="" style={{height:"250px"}}
             onClick={handleShow}/>
            </div>
            <div style={{fontFamily:"cursive",backgroundColor:"cadetblue"}}>
            <h5>Description:</h5>
            <h6>{cake.description}</h6>
            </div>
            </Modal>
        </>
    )
}

export default Cake
