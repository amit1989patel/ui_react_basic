import React from 'react';
import { Link } from 'react-router';
import * as api from '../../../tools/apiConfig';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InputElement from 'react-input-mask';
import * as validation from '../../js/custom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import OfferedLoan from '../shared/offeredLoanSection.component.jsx';
import { Router, browserHistory } from 'react-router';

class Wizard7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment().subtract(18, "years"),
      dob: '',
      monthlyPayment: 0,
      totalPayment: 0,
      details: {
        fullname: "",
        birthdate: "",
        marital_status: "",
        gender: ""
      }
    }
    this.getPersonalDetails = this.getPersonalDetails.bind(this);
    this.savePersonalDetails = this.savePersonalDetails.bind(this);
    this.formatKtpData = this.formatKtpData.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date,
      // dob:this.state.startDate-
    });
  }
  formatKtpData(data) {
    this.setState({
      details: data
    })
    var temp = (data.birthdate);
    if(temp){
    var abc = new Date(temp)
    abc.toUTCString();
    temp = abc;
    var date = moment(temp,"YYYY-MM-DD");
    this.setState({
      startDate: date,
    })
    }
  }
  getPersonalDetails() {
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
        ktp:ktp
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
          this.formatKtpData(response.data);
        }
        else if (response.status == 'INTERNAL_ERROR') {
          toastr.warning("Some internal error occured")
        }
        else {
          toastr.info(response.message);
        }
      }.bind(this),
      error: function (response) {
        localStorage.clear();
        toastr.error("Server error occured");
        browserHistory.push('/Login')
      }.bind(this)
    });
  }
  savePersonalDetails(data) {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    data.user_id = id;
    $.ajax({
      type: 'POST',
      url: api.SAVE_PERSONALDETAILS,
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
          browserHistory.push('/contactinfo')
        }
        else if (response.status == 'INTERNAL_ERROR') {
          this.props.setPercent(100);
          toastr.error('Some internal error occured.')
        }
      }.bind(this),
      error: function (response) {
        localStorage.clear();
        this.props.setPercent(100);
        toastr.error("Server error occured");
        browserHistory.push('/Login')
      }.bind(this)
    });
  }
  componentDidMount() {
    this.getPersonalDetails();
    validation.FormValidationMd.init();
  }
  submitHandler(e) {
    var dob = $("#dob").val()
    var temp = new Date(dob)
    temp.toUTCString();
    var form = $("#wizard7");
    var ktp = localStorage.getItem('KTP');
    form.validate();
    if (form.valid()) {
      var data = {
        fullname: ReactDOM.findDOMNode(this.refs.fullname).value,
        birthday: temp,
        number: ktp,
        gender: ReactDOM.findDOMNode(this.refs.gender).value,
        marital_status: ReactDOM.findDOMNode(this.refs.maritalstatus).value
      }
      var temp = data.birthday;
      // var birthday = new Date(temp);
      // data.birthday = birthday;
      this.props.start();
      this.savePersonalDetails(data);
      // browserHistory.push('/contactInfo');
      // localStorage.setItem('fullName', data.fullname);
      // localStorage.setItem('dob', data.dob);
    }
    else {
      e.preventDefault();
    }
    //localStorage.setItem('dob', data.dob);
    //localStorage.setItem('gender', data.gender);
    //localStorage.setItem('martialstatus', data.martialstatus);
    //browserHistory.push('/contactinfo');
  }
  render() {
    var data = this.state.details;
    return (
      <div className="nav-md loan_wizard step7">
        <div className="main_container">
          <div className="container">
            <div className="right_col" role="main">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapper row">
                    <div className="col-sm-12 col-xs-12">
                      <h2 className="offered_title">Offered Loan</h2>
                    </div>
                    <div className="col-sm-8 col-xs-12">
                    <OfferedLoan />
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="sideform">
                        <div className="side_notes"> <span>In order to proceed with the loan, please verify and complete the following information</span> </div>
                        <div className="personal_details clearfix"><h5>Personal Details</h5> <span><i className="fa fa-circle"></i><i className="fa fa-circle-o"></i><i className="fa fa-circle-o"></i></span></div>
                        <div className="personal_form">
                          <div className="row">
                            <div className="col-sm-12 col-xs-12">
                              <form id="wizard7">
                                <div className="form-group">
                                  <label className="label-control">Full Name </label><br />
                                  {/*<InputElement type="text" ref="fullname" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: siva sai varma" className="input_form" maskChar={null} />*/}
                                  <input type="text" ref="fullname"  maxLength={50} name="fullname" placeholder="eg: John doe" className="input_form" defaultValue={data ? data.fullname : ""} key={data ? data.fullname : ""}></input>
                                </div>
                              </form>
                            </div>
                            <div className="col-sm-12 col-xs-12">
                              <div className="form-group">
                                <label className="label-control">Date of Birth</label><br />
                                <DatePicker
                                  id="dob"
                                  ref="dob"
                                  dateFormat="YYYY-MM-DD"
                                  maxDate={moment().subtract(18, "years")}
                                  selected={this.state.startDate}
                                  onChange={this.handleChange.bind(this)}
                                  placeholderText="Date of birth"
                                  showMonthDropdown
                                  showYearDropdown
                                  scrollableYearDropdown
                                />
                                {/*<input type="number" username="full_name" ref="dob" placeholder="eg: 13-06-1994" className="input_form"></input>*/}
                              </div>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label className="label-control">Gender</label>
                                <div className="fields clearfix">
                                  <select ref="gender" defaultValue={data ? data.gender : ""} key={data ? data.gender : ""}>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label className="label-control">Marital Status</label>
                                <div className="fields clearfix">
                                  <select ref="maritalstatus" defaultValue={data ? data.marital_status : ""} key={data ? data.marital_status : ""} >
                                    <option value="1">Single</option>
                                    <option value="2">Married</option>
                                    <option value="3">divorced</option>
                                    <option value="4">widowed</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-xs-12">
                              <div className="continue next_previous clearfix">
                                <button type="button" onClick={(e) => this.submitHandler(e)} className="btn btn-primary pull-right next_btn">Next</button>
                              </div>
                            </div>
                          </div>
                        </div>
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
export default Wizard7;