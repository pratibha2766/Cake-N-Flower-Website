export const getAllCakesReducer=(state={cakes:[]},action)=>{
    switch(action.type){
        case 'GET_CAKES_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'GET_CAKES_SUCCESS':
            return {
                cakes:action.payload,
                loading:false
            }
        case 'GET_CAKES_FAIL':
            return{
                error:action.payload,
                loading:false
            }
            default:return state
    }
};