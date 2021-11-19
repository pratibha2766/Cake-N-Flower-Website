import React,{useState} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {registerUser} from '../actions/userAction'

const Register = () => {
    const [name,setName]=useState(' ');
    const [email,setEmail]=useState(' ');
    const [password,setPassword]=useState(' ');
    const [confirmPassword,setConfirmPassword]=useState(' ');

    const dispatch =useDispatch()


    const registerHandler=()=>{
        if(password!==confirmPassword){
            alert('Password doesnt match')
        
        }else{
            const user ={name,email,password,confirmPassword}
            dispatch(registerUser(user))
            window.location.href="/login"
        }
    }
    return (
        <>
            <Container className = 'd-flex justify-content-center' style={{color: '#3d5c3a',fontFamily: 'avenir'}}>
            <Form>
                <h1 style={{color:'darkmagenta',fontSize:"50px"}}>Registration</h1>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label >Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" 
                    value={name}
                    onChange={e=>setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" 
                    value={confirmPassword}
                    onChange={e=>setConfirmPassword(e.target.value)}/>
                </Form.Group>
                
                <Button variant="outline-dark" 
                 onClick={registerHandler}>
                    Register
                </Button>
                </Form>
                </Container>
        </>
    )
}

export default Register;
