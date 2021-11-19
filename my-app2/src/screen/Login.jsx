import React,{useState,useEffect} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {loginUser} from '../actions/userAction'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const  dispatch = useDispatch()
    
    useEffect(()=>{
            if(localStorage.getItem('currentUser')){
                window.location.href="/"
            }
    },[])
    
    const loginHandler=()=>{
        const user = {email,password}
        dispatch(loginUser(user))
    }

    return (
        <>
          <Container className = 'd-flex justify-content-center' style={{color: '#3d5c3a',fontFamily: 'avenir'}}>
          <Form>
          <h1 style={{color:'darkmagenta'}}>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                 placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" 
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password" />
            </Form.Group>
            
            <Button variant="outline-dark" 
            onClick={loginHandler}>
                LOGIN
            </Button>
            </Form>
          </Container>
            
        </>
    )
}

export default Login
