import React from 'react';
import { Link } from 'react-router';
import * as api from '../../../tools/apiConfig';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: {
        fullname: "",
        birthdate: "",
        marital_status: "",
        gender: '',
      },
      address: {
        street: '',
        region2: '',
        region3: '',
        region4: '',
        region5: '',
        zip: ''
      },
      email: '',
      loaninfo: {}
    }
  }
  formatKtpData(data) {
    var temp = data.birthdate;
    var date = new Date(temp);
    var formatedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    data.birthdate = formatedDate;

    var gender = data.gender;
    if (gender == 'M') {
      data.gender = 'Male'
    }
    else if (gender == 'F') {
      data.gender = 'Female'
    }
    var marital_status = data.marital_status;
    if (marital_status == 1) {
      data.marital_status = 'Single'
    }
    else if (marital_status == 2) {
      data.marital_status = 'Married'
    }
    else if (marital_status == 3) {
      data.marital_status = 'Divorced'
    }
    else if (marital_status == 4) {
      data.marital_status = 'Widowed'
    }
    this.setState({
      details: data
    })
    // $("#dob").val(this.state.details.birthdate);
  }
  getKtpDetails() {
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
          localStorage.clear();
          toastr.error('Your session has been expired,plese login again to continue.')
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.formatKtpData(response.data);
        }
        else if (response.status == 'INTERNAL_ERROR') {
          toastr.warning("Some internal error occured")
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
  getContactInfo() {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_CONTACTINFO,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        user_id: id
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status == 'UNAUTHORIZED') {
          toastr.error('Your session has been expired,plese login again to continue.')
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          var temp = response.data.address;
          this.setState({
            address: temp,
            email: response.data.email.address
          })
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
  getLoanInfo() {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_LOANINFO,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        loan_id: id
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status == 'UNAUTHORIZED') {
          toastr.error('Your session has been expired,plese login again to continue.')
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          var temp = response.data;
          this.setState({
            loaninfo: temp
          })
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
  componentDidMount() {
    this.getKtpDetails();
    this.getLoanInfo();
    this.getContactInfo();
  }
  componentWillMount() {
    this.getKtpDetails();
    this.getLoanInfo();
    this.getContactInfo();
  }
  completeLoan() {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    var data = {
      id: id
    }
    $.ajax({
      type: 'POST',
      url: api.COMPLETE_USERINFO,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status == 'UNAUTHORIZED') {
          this.props.setPercent(100);
          toastr.error('Your session has been expired,plese login again to continue.')
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.props.setPercent(100);
          toastr.success(response.message);
          browserHistory.push('/loanapplication_status_1')
        }
        else if (response.status == 'INTERNAL_ERROR') {
          toastr.error('Some internal error occured.')
        }
        else {
          toastr.info(response.message);
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
  render() {
    const editData = this.state.address;
    return (
      <div className="nav-md loan_wizard">
        <div className="main_container">
          <div className="container">
            <div className="right_col" role="main">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapper row">
                    <div className="col-sm-12 col-xs12">
                      <div className="offered_loan review_info">
                        <h2>Please review your information <br />
                          and submit the loan application when you are ready.</h2>
                        <div className="loan_sec">
                          <div className="loan_fields clearfix">
                            <div className="row">
                              <div className="col-sm-4 col-xs-12 pay_info">
                                <div className="clearfix review_title">
                                  <h2>Personal Details</h2>
                                  <Link to="/wizard7"><span><i className="fa fa fa-pencil"></i> Edit</span></Link>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Full Name</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{this.state.details.fullname}</span></div>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Date of Birth</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{this.state.details.birthdate}</span></div>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Gender</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{this.state.details.gender}</span></div>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Marital Status</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{this.state.details.marital_status}</span></div>
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12 pay_info">
                                <div className="clearfix review_title">
                                  <h2>Contact Information</h2>
                                  <Link to="/contactinfo"> <span><i className="fa fa fa-pencil"></i> Edit</span></Link>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Email Address</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{this.state.email}</span></div>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Home Adress</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{editData ? editData.street : ''}</span></div>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Province</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{editData ? editData.region2 : ''}</span></div>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Regency / City</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{editData ? editData.region3 : ''}</span></div>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>District</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{editData ? editData.region4 : ''}</span></div>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Subdivision / Village</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{editData ? editData.region5 : ''}</span></div>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Postal Code</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{editData ? editData.zip : ''}</span></div>
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12 pay_info">
                                <div className="clearfix review_title">
                                  <h2>Loan Information</h2>
                                  <Link to="/loaninfo"><span><i className="fa fa fa-pencil"></i> Edit</span></Link>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-4 col-xs-12">
                                    <label>Purpose of Loan</label>
                                  </div>
                                  <div className="col-sm-8 col-xs-12"><span>{this.state.loaninfo.purpose_of_loan}</span></div>
                                </div>
                                <div className="form_review row">
                                  <div className="col-sm-12 col-xs-12">
                                    <label>Why do you need the loan? Give us some details</label>
                                  </div>
                                  <div className="col-sm-12 col-xs-12"><span>{this.state.loaninfo.details_needs}</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-xs-12">
                      <div className="continue next_previous submit clearfix text-center" >
                        {/*<Link to="/loanapplication_status_1">*/}
                        <button type="button" onClick={(e) => this.completeLoan(e)} className="btn btn-primary prev_btn">Submit</button>
                        {/*</Link>*/}
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
export default UserInfo;