import React from 'react'
import {Card} from 'react-bootstrap'
import { useSelector} from 'react-redux'

const homepage =()=>{
    window.location.href="/"

}

const Payment = () => {
        const cartState=useSelector(state=> state.cartReducer)
        const cartItems =cartState.cartItems
        // const dispatch= useDispatch()
        const subTotal =cartItems.reduce((X,item)=>X + item.price,0)
        localStorage.cartItems=[]
    return (
        
                
        
        <div className="text-center" style={{backgroundColor:"cornflowerblue",border:"100px"}}>
            
            <h1>Payment Successful</h1>
            
            <Card >
            
            <Card.Body>
            <Card.Text>
               <h2 style={{color:"green",fontStyle:"italic"}}> Visit Again!!!!!!!!!</h2><br/>
                <h1>Your Orders</h1>
                <div> {
                    cartItems.map(item=>(
                        <>
                         <ul>
                         <li >{item.name} {item.quantity} = {item.price}</li>
                         </ul>
                         
                        </>
                        
                     
                    ))
                    }
                    <h4>Total Amount : {subTotal} /-</h4>
                    
                   
                </div>
                <div>
                    <button onClick={homepage} className="btn btn-outline-secondary">Continue Shopping</button>
                </div>
                
            </Card.Text>
            </Card.Body>
            </Card>
        
        </div>
        
    )
}

export default Payment
