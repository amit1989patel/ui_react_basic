import React from 'react';
import { Link } from 'react-router';
import InputElement from 'react-input-mask'
import { Router, browserHistory } from 'react-router';
import * as api from '../../../tools/apiConfig';
import ReactDOM from 'react-dom';
import TopNav from '../shared/topnav.component.jsx';
import $ from 'jquery';
import * as validation from '../../js/custom';

class Wizard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keys: '',
      value: '',
      KTP: ''
    }
    this.saveKtp = this.saveKtp.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  componentDidMount() {
    this.getKTP();
    validation.FormValidationMd.init();
  }
  handleKTP(KTP) {
    localStorage.setItem('KTP', KTP)
    this.setState({
      KTP: KTP
    })
  }
  getKTP() {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    var ktp = localStorage.getItem('KTP')
    $.ajax({
      type: 'GET',
      url: api.GET_KTP_DETAILS,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        user_id: id,
        ktp : ktp
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status == 'UNAUTHORIZED') {
          toastr.error('Your session has been expired,please login again to continue.')
          localStorage.clear();
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.handleKTP(response.data.number);
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
  saveKtp(data) {
    var token = localStorage.getItem('token')
    $.ajax({
      type: 'POST',
      url: api.SAVE_KTP,
      dataType: 'json',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + token
      },
      data: JSON.stringify(data),
      success: function (response) {
        if (response.status == "INTERNAL_ERROR") {
          this.props.setPercent(100);
          toastr.error(response.message)
          //localStorage.setItem("KTP", data.ktp)
          //browserHistory.push('/wizard2')
        }
        else if (response.status == 'UNAUTHORIZED') {
          this.props.setPercent(100);
          localStorage.clear();
          toastr.error('Your session has been expired,plese login again to continue.')
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.props.setPercent(100);
          // toastr.success(response.message);
          localStorage.setItem("KTP", response.Data.number)
          browserHistory.push('/wizard2')
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
  submitHandler(e) {
    //e.preventDefault();
    var temp = ReactDOM.findDOMNode(this.refs.KTP).value;
    var KTP = temp.replace(/ /g, '');
    var data = {
      ktp: KTP,
      id: localStorage.getItem('id')
    }
    var form = $("#wizardform");
    //form.validate();
    if (form.valid()) {
      this.props.start();
      this.saveKtp(data);
      //FB.AppEvents.logEvent("ktp number saved");
      //localStorage.setItem("KTP", data.ktp)
      //browserHistory.push('/wizard2')
    }
    else {
      e.preventDefault();
    }
  }
  render() {
    const editData = this.state.KTP;
    const locale = this.props.locale;
    return (
      <div className="nav-md loan_wizard step1">
        <div className="main_container">
          <div className="container">
            <div className="right_col" role="main">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapperr row primary_step">
                    <div className="col-sm-12 col-xs12"><span className="notes">{locale.wizard1.heading}</span></div>
                  </div>
                  <div className="wrapper row">
                    <div className="col-sm-8 col-xs-12">
                      <div className="process active_field">
                        <div className="active_lable">
                          <h3>My KTP Number (NIK) is:</h3>
                        </div>
                        <form id="wizardform">
                          <div className="fields clearfix">
                            <div className="nombs form-group wizard1_input">
                              <InputElement id="KTP" defaultValue={editData ? editData : ""} key={editData ? editData : ""} mask="999999 999999 9999" maxLength={18} name="KTP" ref="KTP" className="KTP" maskChar="" />
                              <div className="clearfix sisteen">
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              </div>
                              {/*<NumberFormat name="KTP" ref="KTP" value={this.state.value} placeholder="eg: 16 digit KTP number" format="###### ###### ####" required/>*/}
                              {/*<input name="KTP" ref="KTP" className="KTP" placeholder="eg: 16 digit KTP number" maxLength={16} type="text" required />*/}
                            </div>
                          </div>
                        </form>
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
                          euismod tincidunt ut laoreet dolore
                          magna aliquam erat volutpat. Ut
                          wisi enim ad minim veniam, quis
                          nostrud exerci tation ullamcorper
                          suscipit lobortis nisl ut aliquip ex ea
                          commodo consequat. Duis autem
                          vel eum iriure dolor in hen </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<footer>
            <div className="pull-right"> Copyright © 2017 SmartData Inc. All rights reserved. </div>
            <div className="clearfix"></div>
          </footer>*/}
        </div>
      </div>
    );
  }
}
export default Wizard;