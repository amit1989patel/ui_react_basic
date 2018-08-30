import * as types from './actionTypes';
import $ from 'jquery';
import Auth from '../modules/auth';
import { browserHistory } from 'react-router';
import * as api from '../../tools/apiConfig';
//action for new user registration
export function loginUser(data) {
    return function (dispatch, getState) {
        $.ajax({
            type: 'POST',
            url: api.LOGIN_USER,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data)
        }).done(function (response) {
            if (response.status == "INVALID") {
                browserHistory.push('/signup')
                toastr.warning(response.message);
            }
            else if (response.status == "OK") {
                // save the token and authenticate the user along with some neccessary parameters
                Auth.authenticateUser(response.data);
                if (response.data.user.is_profile_completed == true) {
                    browserHistory.push('/loanapplication_status_1')
                }
                else {
                    browserHistory.push('/wizard')
                }
                toastr.success('Logged in successfully');
                return dispatch({ type: types.LOGIN_USER, login: response.data })
            }
        }).fail(function (response) {
            toastr.error("Server error")
        })
    }
}
