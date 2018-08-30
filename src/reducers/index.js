import {combineReducers} from 'redux';
//import signup from './signupReducer';
import login from './loginReducer';
import signup from './signUpReducer';
const rootReducer=combineReducers({
    signup,
    login
});

export default rootReducer;