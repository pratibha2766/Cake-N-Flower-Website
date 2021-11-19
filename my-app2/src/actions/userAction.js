import axios from 'axios'
export const registerUser = (user) =>async dispatch =>{
    dispatch({type:'USER_REGISTER_REQUEST'})
    try {
        const res = await axios.post('/api/user/register',user)
        dispatch({type:'USER_REGISTER_SUCCESS'})
       // window.location.href="/login"
    } catch (error) {
        dispatch({type:'USER_REGISTER_FAIL',payload:error})
    }
}
export const loginUser = (user) => async dispatch=>{
    dispatch({type:'USER_LOGIN_REQUEST'})
    try {
        const response = await axios.post('/api/user/login',user)
        console.log(response)
        dispatch({type:'USER_LOGIN_SUCCESS',payload:response.data})
        localStorage.setItem('currentUser',JSON.stringify(response.data))
        window.location.href='/home'
    } catch (error) {
        dispatch({type:'USER_LOGIN_FAIL',payload:error})
        alert("User Not Found!! Register And Signin")
        window.location.href="/register"
        
    }
}

export const logoutUser =() =>(dispatch)=>{
       localStorage.removeItem('currentUser')
       window.location.href='/login';
}