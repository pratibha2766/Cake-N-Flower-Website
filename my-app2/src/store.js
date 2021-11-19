import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllCakesReducer} from './reducers/cakeReducer'
import {cartReducer} from './reducers/cartReducer'
import { registerUserReducer ,loginUserReducer} from './reducers/userReducer'
const cartItems=localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]



const currentUser=localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null
const rootReducer =combineReducers({
    getAllCakesReducer:getAllCakesReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer
});

const initialState={
    cartReducer:{
        cartItems:cartItems,
    },
    loginUserReducer:{
        currentUser:currentUser
    }
}
const middleware=[thunk]

const store=createStore(rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))
export default store;