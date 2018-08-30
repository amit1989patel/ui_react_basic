import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';
import * as validation from '../../js/custom';
import * as api from '../../../tools/apiConfig';
import ReactDOM from 'react-dom';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
// counterpart.registerTranslations('en', require('../locales/en'));
// counterpart.registerTranslations('id', require('../locales/id'));



class changePassword extends React.Component {
  componentDidMount() {
    validation.FormValidationMd.init();
  }
    changePassword(data) {
      var token = localStorage.getItem('token');
    $.ajax({
      type: 'POST',
      url: api.CHANGE_PASSWORD,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status == 'OK') {
          localStorage.clear();
          toastr.success(response.message)
          browserHistory.push('/Login')
        }
        else if (response.status == 'INTERNAL_ERROR') {
          toastr.error('Some internal error occured.')
        }
        else {
          toastr.error(response.message);
          localStorage.clear();
          browserHistory.push('/Login');
        }
      }.bind(this),
      error: function (response) {
        // localStorage.clear();
        // toastr.error("Server error occured");
        // browserHistory.push('/Login')
      }.bind(this)
    });
  }
  submitHandler(e) {
    var form = $("#change_password");
    if (form.valid()) {
    var data = {
      password: ReactDOM.findDOMNode(this.refs.oldpassword).value,
      newPassword: ReactDOM.findDOMNode(this.refs.newpassword).value,
      user_id: localStorage.getItem('id')
    }
    this.changePassword(data);
    }
  }
  render() {
    const locale = this.props.locale;
    return (
      <div className="nav-md loan_wizard login_page">
        <div className="body">
          <div className="main_container">
            <div className="top_nav">
              <div className="nav_menu">
                <nav>
                  <div className="navbar nav_title" > <Link to="/dashboard" className="site_title">
                    <img src={require('../../images/danablue.png')} /> <span>DanaKita</span></Link> </div>
                </nav>
              </div>
            </div>
            <div className="container">
              <div className="right_col" role="main">
                <div className="row login_wrap">
                  <div className="col-sm-12 col-xs-12">
                    <div className="main ">
                      <div className="login_white">
                        <div className="text-center login_txt">
                          <div><h4>Change Password</h4></div>
                          <div><p>Difficulty accessing your account? Enter your login email address below. We will send you an email with instructions to reset your account password.</p></div>
                        </div>
                        <form role="form" id="change_password">
                          <div className="form-group">
                            <input type="password" ref="oldpassword" name="oldpassword" className="form-control" id="oldpassword" placeholder="Enter old password" />
                          </div>
                          <div className="form-group">
                            <input type="password" ref="newpassword" name="newpassword" className="form-control" id="newpassword" placeholder="Enter new password" />
                          </div>
                          <div className="form-group">
                            <input type="password" name="confirm_password" className="form-control" id="confirm_password" placeholder="Confirm password" />
                          </div>
                          

                          <div className="next_previous clearfix continue" >
                            <button type="button" onClick={(e) => this.submitHandler(e)} className="btn btn-primary next_btn ">Change Password</button>
                          </div>
                          {/*<div className="signup_link" >
                            <span>Go back to <Link to="/Login">Login</Link></span>
                          </div>*/}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default changePassword;