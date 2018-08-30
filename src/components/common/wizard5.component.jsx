import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import * as api from '../../../tools/apiConfig';
import InputElement from 'react-input-mask';
import { Router, browserHistory } from 'react-router';
import $ from 'jquery';
import * as validation from '../../js/custom';
class Wizard5 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.verification = this.verification.bind(this);
    this.resendPin = this.resendPin.bind(this);
  }
  componentDidMount() {
    validation.FormValidationMd.init();
  }
  resendPin() {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    var phonenum = localStorage.phonenum;
    var data = {
      user_id: id,
      phoneno: phonenum
    }
    $.ajax({
      type: 'POST',
      url: api.REGISTER_PHONE,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status == 'UNAUTHORIZED') {
          this.props.setPercent(100);
          localStorage.clear();
          toastr.error('Your session has been expired,plese login again to continue.')
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.props.setPercent(100);
          toastr.info('We have just sent a PIN to the number you entered, please verify.')
          localStorage.setItem('phonenum', data.phoneno);
        }
        else if (response.status == 'INTERNAL_ERROR') {
          this.props.setPercent(100);
          toastr.error('Some internal error occured.')
        }
      }.bind(this),
      error: function (response) {
       localStorage.clear();
        toastr.error("Server error occured");
        browserHistory.push('/Login')
        this.props.setPercent(100);
      }.bind(this)
    });
  }
  verification(code) {
    var token = localStorage.getItem('token');
    var data = {
      phoneno: localStorage.getItem('phonenum'),
      user_id: localStorage.getItem('id'),
      code: code
    }
    $.ajax({
      type: 'POST',
      url: api.VERIFY_PHONE,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status == 'UNAUTHORIZED') {
          this.props.setPercent(100);
          localStorage.clear();
          toastr.error('Your session has been expired,plese login again to continue.')
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.props.setPercent(100);
          toastr.info('Your phone number has been verified.')
          browserHistory.push('/wizard6');
        }
        else if (response.status == 'INTERNAL_ERROR') {
          this.props.setPercent(100);
          toastr.error('Incorrect pin')
        }
      }.bind(this),
      error: function (response) {
        localStorage.clear();
        toastr.error("Server error occured");
        browserHistory.push('/Login')
        this.props.setPercent(100);
      }.bind(this)
    });
  }
  submitHandler(e) {
    var form = $("#PINVerify");
    if (form.valid()) {
      var code = ReactDOM.findDOMNode(this.refs.pin).value;
      this.verification(code);
      this.props.start();
    }
    else {
      e.preventDefault();
    }
  }
  render() {
    const salary = localStorage.sal;
    const KTP = localStorage.KTP;
    const phonenum = localStorage.phonenum;
    const status = localStorage.getItem('employ')
    return (
      <div className="nav-md loan_wizard step5">
        <div className="main_container">
          <div className="container">
            <div className="right_col" role="main">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapperr row primary_step">
                    <div className="col-sm-12 col-xs12">
                      <div className="completed_fileds">
                        <div className="completed"><Link to="/wizard" className="edit_link">My KTP Number (NIK) is: <span> {KTP}</span></Link></div>
                        <div className="completed"><Link to="/wizard2" className="edit_link">My monthly salary is: <span> {salary} million RP </span></Link></div>
                        <div className="completed"><Link to="/wizard3" className="edit_link">My employ status is: <span>{status} </span></Link></div>
                        <div className="completed"><Link to="/wizard4" className="edit_link">My phone number is: <span> {phonenum} </span></Link></div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper row">
                    <div className="col-sm-8 col-xs-12">
                      <div className="process  active_field">
                        <div className="active_lable">
                          <h3>PIN:</h3>
                        </div>
                        <div className="fields clearfix">
                          <div className="four_group">
                            <form id="PINVerify">
                              <div className="nombs">
                                <InputElement name="salary" name="PIN" ref="pin" mask="999999" placeholder="Enter six digits pin" minLength={6} maskChar="" maxLength={6} />
                                {/*<input type="text" name="PIN" ref="pin" placeholder="Enter four digit pin" minLength={6} maxLength={6}/> */}
                              </div>
                            </form>
                          </div>
                          <div className="wrapperr" ><span className="notes resend"><a onClick={this.resendPin} href="javascript:void(0)">Resend PIN</a></span></div>
                        </div>
                        {/*<div className="field_message"> <span className="notes blue_notes">We just sent a PIN to the number you entered, please verify.</span> </div>*/}
                      </div>
                      <div className="next_previous clearfix">
                        <button type="button" onClick={this.submitHandler.bind(this)} className="btn btn-primary pull-right next_btn">Next</button>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12 right_notifi step_notifi">
                      <h4>Why do we need this?</h4>
                      <p>In order to determine your eligibility,
                          we need your NIK to Lorem ipsum
                          dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh
                          eu </p>
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
export default Wizard5;