import * as types from '../actions/actionTypes';
export default function signinReducer(state=[],action){
    switch(action.type){
        case types.LOGIN_USER:
            return[...state,
                Object.assign({},action.login) 
            ];
        default:
            return state;    
    }
}