import * as types from '../actions/actionTypes';
export default function signinReducer(state=[],action){
    switch(action.type){
        case types.SIGNUP_USER:
            return[...state,
                Object.assign({},action.signup) 
            ];
        default:
            return state;    
    }
}