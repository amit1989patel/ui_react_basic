import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import * as validation from '../../js/custom';
import InputElement from 'react-input-mask';
import * as api from '../../../tools/apiConfig';
import * as script from '../../js/custom.min.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment';
import NumberFormat from 'react-number-format';
import ReactDOM from 'react-dom';
import Sidebar from '../shared/sidebar.component.jsx';
import { Router, browserHistory } from 'react-router';

class EmpInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment().subtract(18, "years"),
      empinfo: {
        emp_detail: {},
        address: {
          street: ''
        }
      },
      monthlybaseincome: '',
      //monthlyotherincome: '',
      companycountry: 'Indonesia'
    }
  }
  handleChange(date) {
    this.setState({
      startDate: date,
      // dob:this.state.startDate-
    });
  }
  handleValue(data) {
    // var temp = data.emp_detail.employed_since;
    // var date = new Date(temp);
    // var formatedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.setState({
      empinfo: data,
      monthlybaseincome: data.emp_detail.monthly_income_base,
      monthlyotherincome: data.emp_detail.monthly_income_other
    })
    var temp = data.emp_detail.employed_since;
    var abc = new Date(temp)
    abc.toUTCString();
    temp = abc;
    var date = moment(temp,"YYYY-MM-DD");
    this.setState({
      startDate: date,
    })
    //$("#emp_since").val(formatedDate);
  }
  componentDidMount() {
    this.getData()
    validation.FormValidationMd.init();
    script.layout.init();
  }
  getData() {
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
          this.handleValue(response.data);
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
  saveData(data) {
    var token = localStorage.getItem('token');
    $.ajax({
      type: 'POST',
      url: api.SAVE_EMPINFO,
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
          browserHistory.push('/loanapplication_status_1')
        }
        else if (response.status == 'INTERNAL_ERROR') {
          this.props.setPercent(100);
          toastr.error('Some internal error occured.')
        }
      }.bind(this),
      error: function (response) {
        this.props.setPercent(100);
        localStorage.clear();
        toastr.error("Server error occured");
        browserHistory.push('/Login')
      }.bind(this)
    });
  }
  submitHandler() {
    var emp_since = $("#emp_since").val()
    var form = $("#employment_info");
    //var base_income = this.state.monthlybaseincome;
    // var other_income = this.state.monthlyotherincome;
    // if (base_income) {
    //   var temp = parseInt(base_income.replace(/\./g, ''));
    //   base_income = temp;
    // }
    // else{
    //    base_income = null;
    // }
    // if (other_income) {
    //   var temp = other_income.replace(/\./g, '');
    //   other_income = temp;
    // }
    form.validate();
    if (form.valid()) {
      var data = {
        occupation: ReactDOM.findDOMNode(this.refs.occupation).value,
        company_name: ReactDOM.findDOMNode(this.refs.companyname).value,
        company_sector: ReactDOM.findDOMNode(this.refs.companysector).value,
        company_phone_number: (ReactDOM.findDOMNode(this.refs.companyphone).value).replace(/ /g, ''),
        address: ReactDOM.findDOMNode(this.refs.companyaddress).value,
        region4: ReactDOM.findDOMNode(this.refs.companydistrict).value,
        region3: ReactDOM.findDOMNode(this.refs.companyregency).value,
        region2: ReactDOM.findDOMNode(this.refs.companyprovince).value,
        zip: ReactDOM.findDOMNode(this.refs.companyzip).value,
        manager_name: ReactDOM.findDOMNode(this.refs.companymanagername).value,
        employed_since: emp_since,
        job_title: ReactDOM.findDOMNode(this.refs.jobtitle).value,
        monthly_income_base: this.state.monthlybaseincome,
        monthly_income_other: ReactDOM.findDOMNode(this.refs.monthlyotherincome).value,
        user_id: localStorage.getItem('id'),
        type: 'company'
      }
      this.props.start();
      this.saveData(data)
    }
    else {
      e.preventDefault();
    }
  }
  render() {
    const editData = this.state.empinfo;
    return (
      <div id="sidebar_togg" className="nav-md loan_wizard sidebar_wrap">
        <div className="container body">
          <div className="main_container">
            <Sidebar />
            <div className="right_col" role="main" >
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapper">
                    <div className="emp_head">
                      <h2>Employment Info</h2>
                    </div>
                    <div className="clearfix row">
                      <div className="col-sm-12 col-xs12 right_notifi">
                        <div className="sideform personal_note">
                          <div className=""> <span className="blue_notes">In order to proceed with the loan, please verify and complete the following information</span> </div>
                        </div>
                      </div>
                    </div>
                    <form id="employment_info">
                      <div className="personal_overlay employment_overlay clearfix">
                        <div className="row">
                          <div className="col-sm-12 col-xs-12 personal_details">
                            <h5>Company Basic Details</h5>
                            <div className="personal_form">
                              <div className="row">
                                {/*<div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Employment status</label>
                                    <div className="fields clearfix">
                                      <select>
                                        <option value="Permanant">Permanant</option>
                                        <option value="Contract">Contract</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>*/}
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Occupation</label> <br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Occupation" className="input_form" maskChar={null} />*/}
                                    <input type="text" name="occupation" maxLength={45} defaultValue={editData ? editData.emp_detail.occupation : ''} key={editData ? editData.emp_detail.occupation : ''} ref="occupation"  placeholder="eg: Occupation" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Company name</label><br />
                                    <input type="text" name="companyname" maxLength={45} defaultValue={editData ? editData.emp_detail.company_name : ''} key={editData ? editData.emp_detail.company_name : ''} ref="companyname" placeholder="eg: Company name"  className="form-control" />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Company name" className="input_form" maskChar={null}/>*/}

                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Company sector</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Company sector" className="input_form" maskChar={null} />*/}
                                    <input type="text" name="companysector" maxLength={45} ref="companysector" defaultValue={editData ? editData.emp_detail.company_sector : ''} key={editData ? editData.emp_detail.company_sector : ''}  placeholder="eg: Company sector" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Company phone</label><br />
                                    <InputElement ref="companyphone" maxLength={45} defaultValue={editData ? editData.emp_detail.company_phone_number : ''} placeholder="eg: Company phone" key={editData ? editData.emp_detail.company_phone_number : ''} name="companyphone" mask="+6\2 999 9999 99999" className="form-control" maskChar={null} />
                                    {/*<input type="text" name="companyphone" ref="companyphone" username="full_name" placeholder="eg: Company phone" className="form-control"></input>*/}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-xs-12 personal_details">
                            <h5>Company Address Details</h5>
                            <div className="personal_form">
                              <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Province</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Province" className="input_form" maskChar={null}/>*/}
                                    <input type="text" maxLength={45} name="companyprovince" defaultValue={editData ? editData.address.region2 : ''} key={editData ? editData.address.region2 : ''} placeholder="eg: Province" ref="companyprovince"  className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Regency</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Regency" className="input_form" maskChar={null} />*/}
                                    <input type="text" maxLength={45} name="companyregency" defaultValue={editData ? editData.address.region3 : ''} key={editData ? editData.address.region3 : ''}  ref="companyregency" placeholder="eg: Regency" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">District</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: District" className="input_form" maskChar={null} />*/}
                                    <input type="text" maxLength={45} name="companydistrict" defaultValue={editData ? editData.address.region4 : ''} key={editData ? editData.address.region4 : ''}  ref="companydistrict" placeholder="eg: District" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Company address</label><br />
                                    <input type="text" maxLength={45} name="companyaddress" defaultValue={editData ? editData.address.street : ''} key={editData ? editData.address.street : ''}  ref="companyaddress" placeholder="eg: Company address" className="form-control"></input>
                                  </div>
                                </div>
                                
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Zip code</label><br />
                                    <InputElement id="postal_code"  ref="companyzip" minLength={5} maxLength={5} placeholder="eg: 00000" name="postalcode" defaultValue={editData ? editData.address.zip : ''} key={editData ? editData.address.zip : ''} className="form-control" mask="99999" maskChar={null} />
                                    {/*<input type="text" name="zip" maxLength={6} username="full_name" ref="zip" placeholder="eg: Zip code" className="form-control"></input>*/}
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Country</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Country" className="form-control" maskChar={null}/>*/}
                                    <input type="text" maxLength={45} name="companycountry"  disabled={true} value={this.state.companycountry} ref="companycountry" placeholder="eg: Country" className="form-control" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-xs-12 personal_details">
                            <h5>Company Other Details</h5>
                            <div className="personal_form">
                              <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Monthly base income</label><br />
                                    <NumberFormat ref="monthlybaseincome" className="form-control" value={this.state.monthlybaseincome} name="monthlybaseincome" placeholder="eg: monthly income" thousandSeparator={'.'} decimalSeparator={','} minLength={9} maxLength={10} onChange={(e, value) => {
                                      const formattedValue = e.target.value; // $222,3
                                      //value will be non formatted value ie, 2223
                                      this.setState({ monthlybaseincome: value })
                                    }} />
                                    {/*<input type="text" name="monthlybaseincome" username="full_name" ref="monthlybaseincome" placeholder="eg: monthly income" className="form-control"></input>*/}

                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Monthly other income</label><br />
                                    {/*<NumberFormat ref="monthlyotherincome" className="form-control" value={this.state.monthlyotherincome} name="monthlyotherincome" placeholder="eg: other monthly income" thousandSeparator={'.'} decimalSeparator={','} minLength={9} maxLength={10} onChange={(e, value) => {
                                      const formattedValue = e.target.value; // $222,3
                                      //value will be non formatted value ie, 2223
                                      this.setState({ monthlyotherincome: value })
                                    }} />*/}
                                    <input type="text" maxLength={45} defaultValue={editData ? editData.emp_detail.monthly_income_other : ''} name="monthlyotherincome" placeholder="eg: other monthly income" key={editData ? editData.emp_detail.monthly_income_other : ''}  ref="monthlyotherincome" placeholder="eg: other monthly income" className="form-control"></input>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Company manager name</label><br />
                                    <input type="text" maxLength={45} name="companymanagername" defaultValue={editData ? editData.emp_detail.manager_name : ''} key={editData ? editData.emp_detail.manager_name : ''} placeholder="eg: Company manager name" ref="companymanagername"  className="form-control" />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Company manager name" className="input_form" maskChar={null} />*/}
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Employee since</label><br />
                                    {/*<input type="number" name="employeesince" username="full_name" ref="employeesince" placeholder="eg: Employee since" className="form-control"></input>*/}
                                    <DatePicker
                                      id="emp_since"
                                      ref="employeesince"
                                      dateFormat="YYYY-MM-DD"
                                      maxDate={moment().subtract(18, "years")}
                                      selected={this.state.startDate}
                                      onChange={this.handleChange.bind(this)}
                                      placeholderText="eg: Employee since"
                                      showMonthDropdown
                                      showYearDropdown
                                      scrollableYearDropdown
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Job title</label><br />
                                    <input type="text" maxLength={45} name="jobtitle" defaultValue={editData ? editData.emp_detail.job_title : ''} key={editData ? editData.emp_detail.job_title : ''} placeholder="eg: Title of your Job" ref="jobtitle"  className="form-control" />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Title of your Job" className="input_form" maskChar={null} />*/}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="next_previous clearfix continue" >
                      {/*<Link to="relativeinfo">*/}
                      <button type="button" onClick={(e) => this.submitHandler(e)} className="btn btn-primary pull-right next_btn ">Continue</button>
                      {/*</Link>*/}
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
export default EmpInfo;