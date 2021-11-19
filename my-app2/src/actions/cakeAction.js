import axios from 'axios'

export const getAllCakes= () => async (dispatch)=>{
    dispatch({type:'GET_CAKES_REQUEST'})
    try {
        const res= await axios.get('/api/cakes/getAllCakes')
        console.log(res)
        dispatch({type:'GET_CAKES_SUCCESS',payload:res.data})
    } catch (error) {
        dispatch({type:'GET_CAKES_FAIL',payload:error});
        
    }
};