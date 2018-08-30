import React from 'react';
import { Link } from 'react-router';
import * as script from '../../js/custom.min.js';
import ReactDOM from 'react-dom';
import * as api from '../../../tools/apiConfig';
import Sidebar from '../shared/sidebar.component.jsx';
import $ from 'jquery';
//import * as scrollSidebar from '../../js/custom.min.js';
import { Router, browserHistory } from 'react-router';
class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      empinfo: {
        emp_detail: {},
        address: {
          street: ''
        }
      },
      details: {
        fullname: "",
        birthdate: "",
        marital_status: "",
        gender: ""
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
      relativeInfo: [{
        relative: {
          fullname: ''
        },
        spouse: {
          number: ''
        }
      }]
    }
  }
  componentDidMount() {
    script.layout.init();
    this.getEmpData();
    this.getPersonalDetails();
    this.getContactInfo();
    this.getRelativesData();
  }
  componentWillMount() {
    this.setState({
      relativeInfo: ''
    })
  }
  handleEmpValue(data) {
    var temp = data.emp_detail.employed_since;
    var date = new Date(temp);
    var formatedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.setState({
      empinfo: data,
      monthlybaseincome: data.emp_detail.monthly_income_base,
      monthlyotherincome: data.emp_detail.monthly_income_other
    })
  }
  getEmpData() {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_EMPINFO,
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
          localStorage.clear();
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.handleEmpValue(response.data);
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
        ktp: ktp
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
          //this.props.setPercent(100);
          localStorage.clear();
          toastr.error('Your session has been expired,plese login again to continue.')
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          //this.props.setPercent(100);
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
        //this.props.setPercent(100);
      }.bind(this)
    });
  }
  handleRelativeData(data) {
    this.setState({
      relativeInfo: data
    })
  }
  getRelativesData() {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_RELATIVEINFO,
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
          localStorage.clear();
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.handleRelativeData(response.data);
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
  render() {
    const fullname = localStorage.userName;
    const userImage = localStorage.userImage;
    const editDataPersonal = this.state.details;
    const editDataContact = this.state.address;
    const editDataEmp = this.state.empinfo;
    const editData = this.state.relativeInfo;
    return (
      <div id="sidebar_togg" className="nav-md loan_wizard sidebar_wrap">
        <div className="container body">
          <div className="main_container">
            <Sidebar />
            <div className="right_col" role="main">
              <div className="">
                <div className="page-title">
                  <div className="title_left" >
                    <h3>User Profile</h3>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="x_panel user_profile">
                      <div className="x_content">
                        <div className="col-md-3 col-sm-3 col-xs-12 profile_left">
                          <div className="profile_img">
                            <div id="crop-avatar">
                              <img className="img-responsive avatar-view" src={userImage} alt="profile image" /> </div>
                          </div>
                          <h5 style={{ marginLeft: -25 }}>{fullname}</h5>
                          {/*<ul className="list-unstyled user_data">
                            <li><i className="fa fa-map-marker user-profile-icon"></i> San Francisco, California, USA </li>
                            <li> <i className="fa fa-briefcase user-profile-icon"></i> Software Engineer </li>
                            <li className="m-top-xs"> <i className="fa fa-external-link user-profile-icon"></i> <a href="http://www.kimlabs.com/" target="_blank">www.kimlabs.com</a> </li>
                          </ul>
                          <div className="next_previous"> <a className="btn btn-success"><i className="fa fa-edit m-right-xs"></i>Edit Profile</a> </div>*/}
                        </div>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <div className="basic_user_info" role="tabpanel" data-example-id="togglable-tabs">
                            <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                              <li role="presentation" className="active"><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">Personal Details</a> </li>
                              <li role="presentation" className=""><a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false">Contact Information</a> </li>
                              <li role="presentation" className=""><a href="#tab_content4" role="tab" id="profile-tab3" data-toggle="tab" aria-expanded="false">Employment Information</a> </li>
                              <li role="presentation" className=""><a href="#tab_content5" role="tab" id="profile-tab4" data-toggle="tab" aria-expanded="false">Relative Information</a> </li>
                            </ul>
                            <div id="myTabContent" className="tab-content">
                              <div role="tabpanel" className="tab-pane fade row active in" id="tab_content1" aria-labelledby="home-tab">
                                <div className="col-sm-12 col-xs-12 pay_info">
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>Full Name</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{editDataPersonal ? editDataPersonal.fullname : ''}</span></div>
                                  </div>
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>Date of Birth</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{editDataPersonal ? this.state.details.birthdate : ''}</span></div>
                                  </div>
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>Gender</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{editDataPersonal ? editDataPersonal.gender : ''}</span></div>
                                  </div>
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>Marital Status</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{editDataPersonal ? editDataPersonal.marital_status : ''}</span></div>
                                  </div>
                                </div>
                              </div>
                              <div role="tabpanel" className="tab-pane row fade" id="tab_content2" aria-labelledby="profile-tab">
                                <div className="col-sm-12 col-xs-12 pay_info">
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>Email Address</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{this.state.email}</span></div>
                                  </div>
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>Home Adress</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{editDataContact ? editDataContact.street : ''}</span></div>
                                  </div>
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>Province</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{editDataContact ? editDataContact.region2 : ''}</span></div>
                                  </div>
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>Regency / City</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{editDataContact ? editDataContact.region3 : ''}</span></div>
                                  </div>
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>District</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{editDataContact ? editDataContact.region4 : ''}</span></div>
                                  </div>
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>Subdivision / Village</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{editDataContact ? editDataContact.region5 : ''}</span></div>
                                  </div>
                                  <div className="form_review row">
                                    <div className="col-sm-3 col-xs-12">
                                      <label>Postal Code</label>
                                    </div>
                                    <div className="col-sm-9 col-xs-12"><span>{editDataContact ? editDataContact.zip : ''}</span></div>
                                  </div>
                                </div>
                              </div>
                              <div role="tabpanel" className="tab-pane row fade" id="tab_content4" aria-labelledby="profile-tab">
                                <div className="col-sm-12 col-xs-12 pay_info">
                                  <div className="sub_sec_user">
                                    <div className="clearfix review_title">
                                      <h2>Company Basic Details</h2>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Employment status</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.emp_detail.employment_status : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Occupation</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.emp_detail.occupation : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Company name</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.emp_detail.company_name : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Company sector</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.emp_detail.company_sector : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Company phone</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.emp_detail.company_phone_number : ''}</span></div>
                                    </div>
                                    {/*<div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Subdivision / Village</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp?editDataEmp.emp_detail.occupation:''}</span></div>
                                    </div>*/}
                                    {/*<div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Postal Code</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp?editDataEmp.address.zip:''}</span></div>
                                    </div>*/}
                                  </div>
                                  <div className="sub_sec_user">
                                    <div className="clearfix review_title">
                                      <h2>Company Address Details</h2>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Province</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.address.region1 : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Regency</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.address.region2 : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>District</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.address.region3 : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Sub-District</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.address.region4 : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Company address</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.address.street : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Zip code</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.address.zip : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Country</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>Indonesia</span></div>
                                    </div>
                                  </div>
                                  <div className="sub_sec_user">
                                    <div className="clearfix review_title">
                                      <h2>Company Other Details</h2>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Monthly base income</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? this.state.monthlybaseincome : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Monthly other income</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.emp_detail.monthly_income_other : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Company manager name</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.emp_detail.manager_name : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Employee since</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.emp_detail.employed_since : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Job title</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editDataEmp ? editDataEmp.emp_detail.job_title : ''}</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role="tabpanel" className="tab-pane row fade" id="tab_content5" aria-labelledby="profile-tab">
                                <div className="col-sm-12 col-xs-12 pay_info">
                                  <div className="sub_sec_user">
                                    <div className="clearfix review_title">
                                      <h2>Spouse Details</h2>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>KTP number</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.spouse.number : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Name</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.spouse.fullname : ""}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Company Name</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.spouse.company_name : ""}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Phone number</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.spouse.home_phone : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Occupation</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.spouse.occupation : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Address</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.spouse.street : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>District</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.spouse.region4 : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Regency</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.spouse.region3 : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Province</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.spouse.region2 : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Zip code</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.spouse.zip : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Country</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>Indonesia</span></div>
                                    </div>
                                  </div>
                                  <div className="sub_sec_user">
                                    <div className="clearfix review_title">
                                      <h2>Relative Details</h2>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Name</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.relative.fullname : ''} </span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Relationship</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Phone number</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.relative.home_phone : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Occupation</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.relative.occupation : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Address</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.relative.street : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>District</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.relative.region3 : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Regency</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.relative.region2 : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Province</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.relative.region1 : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Zip code</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>{editData ? editData.relative.zip : ''}</span></div>
                                    </div>
                                    <div className="form_review row">
                                      <div className="col-sm-3 col-xs-12">
                                        <label>Country</label>
                                      </div>
                                      <div className="col-sm-9 col-xs-12"><span>Indonesia</span></div>
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

            {/*<footer>
              <div className="pull-right"> Copyright © 2017 SmartData Inc. All rights reserved. </div>
              <div className="clearfix"></div>
            </footer>*/}
          </div>
        </div>
      </div>

    )
  }
}
export default UserProfile;