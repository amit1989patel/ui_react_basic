import React, { Component } from 'react';
import { Link } from 'react-router';
import * as validation from '../../js/custom';
import * as api from '../../../tools/apiConfig';
import InputElement from 'react-input-mask';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Router, browserHistory } from 'react-router';


class Wizard4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phonenum: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.verifyPhone = this.verifyPhone.bind(this);
  }
  verifyPhone(temp) {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    var phonenum = temp.phonenum;
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
          browserHistory.push('/wizard5');
        }
        // else if (response.status == 'INTERNAL_ERROR') {
        //   this.props.setPercent(100);
        //   toastr.error('Some internal error occured.')
        // }
        if (response.data) {
          if (response.data.is_verified == true) {
            this.props.setPercent(100);
            toastr.info('Your number is already verified')
            localStorage.setItem('phonenum', data.phoneno);
            browserHistory.push('/wizard6');
          }
        }
        else{
          toastr.info(response.message);
          this.props.setPercent(100);
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
  getPhoneNumber() {
    var token = localStorage.getItem('token')
    var user_id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_PHONENUM,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        user_id: user_id
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status == 'UNAUTHORIZED') {
          toastr.error('Your session has been expired,plese login again to continue.')
          localStorage.clear();
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.setState({
            phonenum: response.data.phoneno.number
          })
        }
        else if (response.status == 'INTERNAL_ERROR') {
          toastr.warning("Some internal error occured")
        }
      }.bind(this),
      error: function (response) {
        localStorage.clear();
        toastr.error("Server error occured");
        browserHistory.push('/Login')
      }.bind(this)
    });
  }
  submitHandler(e) {
    var form = $("#wizard4");
    form.validate();
    if (form.valid()) {
      var temp = ReactDOM.findDOMNode(this.refs.phonenum).value;
      var phonenum = temp.replace(/ /g, '');
      var data = {
        phonenum: phonenum
      }
      this.verifyPhone(data);
      this.props.start();
    }
    else {
      e.preventDefault();
    }
  }
  componentDidMount() {
    validation.FormValidationMd.init();
    this.getPhoneNumber();
  }

  render() {
    const salary = localStorage.sal;
    const KTP = localStorage.KTP;
    const status = localStorage.getItem('employ')
    const editData = this.state;
    return (
      <div className="nav-md loan_wizard step4">
        <div className="main_container">
          <div className="container">
            <div className="right_col" role="main">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapperr row primary_step">
                    <div className="col-sm-12 col-xs-12">
                      <div className="completed_fileds" >
                        <div className="completed"><Link to="/wizard" className="edit_link">My KTP Number (NIK) is: <span> {KTP}</span></Link></div>
                        <div className="completed"><Link to="/wizard2" className="edit_link">My monthly salary is: <span> {salary} million RP </span></Link></div>
                        <div className="completed"><Link to="/wizard3" className="edit_link">My employ status is: <span>{status} </span></Link></div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper row">
                    <div className="col-sm-8 col-xs-12">
                      <div className="process  active_field">
                        <div className="active_lable"><h3>My phone number is:</h3></div>
                        <div className="fields clearfix">
                          <div className="group_lable">
                          </div>
                          <form id="wizard4">
                            <div className="nombs ">
                              {/*<InputElement {...this.props} ref="phonenum" name="phonenumber" mask="+6\2 99 999 99" maskChar={null}/>*/}
                              <InputElement ref="phonenum" defaultValue={editData ? editData.phonenum : ''} key={editData ? editData.phonenum : ''} name="phonenumber" mask="+6\2 999 9999 99999" maskChar={null} />
                              {/*<input type="text" name="phonenumber" maxLength={10} username="full_name" ref="phonenum" placeholder="eg: phone number" className="input_form" required />*/}
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="next_previous clearfix">
                        <button type="button" onClick={(e) => this.submitHandler(e)} className="btn btn-primary pull-right next_btn">Next</button>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12 right_notifi step_notifi">
                      <h4>Why do we need this?</h4>
                      <p>In order to determine your eligibility,
                          we need your NIK to Lorem ipsum
                          dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh
                          eu
                       </p>
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
export default Wizard4;