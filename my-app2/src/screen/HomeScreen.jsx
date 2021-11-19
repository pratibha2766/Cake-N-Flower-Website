import React,{useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux';
import {getAllCakes} from '../actions/cakeAction'
import {Container,Row,Col} from 'react-bootstrap'
import Cake from '../component/cake';

const HomeScreen = () => {
    const dispatch = useDispatch()
    const cakeState=useSelector(state=>state.getAllCakesReducer)
    const {loading,cakes,error}=cakeState;
  useEffect(()=>{
      dispatch(getAllCakes())
  },[dispatch]);
    
 return (
        <>
        <Container>
            {
             loading ? (<h1>Loading...</h1>)
             :error? (<h1>Error while fetching cakes</h1>)
             :(<Row>
             {cakes.map(cake=>(
                 <Col md={4}>
                     <Cake cake={cake}/>
                     </Col>
             ))}
             </Row>)
            }
            
        </Container>
            
        </>
    )
}

export default HomeScreen
