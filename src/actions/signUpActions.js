import * as types from './actionTypes';
import $ from 'jquery';
import Auth from '../modules/auth';
import { browserHistory } from 'react-router';
import * as api from '../../tools/apiConfig';
//action for new user registration
export function signUpUser(data) {
    return function (dispatch, getState) {
        $.ajax({
            type: 'POST',
            url: api.SIGNUP_USER,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data)
        }).done(function (response) {
            if (response.status == 'INVALID') {
                var message = response.message;
                browserHistory.push('/signUp')
                toastr.warning(message)
            }
            else if (response.status == 'OK') {
                // save the token and authenticate the user along with some neccessary parameters
                Auth.authenticateUser(response.data);
                if (response.data.user.is_profile_completed == true) {
                    browserHistory.push('/loanapplication_status_1')
                }
                else {
                    browserHistory.push('/wizard')
                }
                toastr.success(response.message);
                return dispatch({ type: types.SIGNUP_USER, signup: response.data })
            }
            else {
                toastr.info(response.message)
            }
        }).fail(function (response) {
            toastr.error("Server error")
        })
    }
}
