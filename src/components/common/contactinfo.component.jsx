import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InputElement from 'react-input-mask';
import * as validation from '../../js/custom';
import * as api from '../../../tools/apiConfig';
import { Router, browserHistory } from 'react-router';
import OfferedLoan from '../shared/offeredLoanSection.component.jsx';
class ContactInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
      months: 0,
      monthlyPayment: 0,
      totalPayment: 0,
      address: {},
      regions: [],
      email: null,
    }
    this.getContactInfo = this.getContactInfo.bind(this);
    this.saveContactInfo = this.saveContactInfo.bind(this);
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
          this.props.setPercent(100);
          localStorage.clear();
          toastr.error('Your session has been expired,plese login again to continue.')
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.props.setPercent(100);
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
  saveContactInfo(data) {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    data.user_id = id;
    $.ajax({
      type: 'POST',
      url: api.SAVE_CONTACTINFO,
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
          browserHistory.push('/loaninfo')
        }
        else if (response.status == 'INTERNAL_ERROR') {
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
  componentDidMount() {
    this.getContactInfo();
    validation.FormValidationMd.init();
  }
  submitHandler(e) {
    var form = $("#contact_info");
    form.validate();
    if (form.valid()) {
      var data = {
        email: ReactDOM.findDOMNode(this.refs.emailadd).value,
        address: ReactDOM.findDOMNode(this.refs.homeadd).value,
        region2: ReactDOM.findDOMNode(this.refs.province).value,
        region3: ReactDOM.findDOMNode(this.refs.city).value,
        region4: ReactDOM.findDOMNode(this.refs.district).value,
        region5: ReactDOM.findDOMNode(this.refs.subdivision).value,
        zip: ReactDOM.findDOMNode(this.refs.postal).value
      }
      this.saveContactInfo(data);
      this.props.start();
    }
    else {
      e.preventDefault();
    }
  }
  render() {
    var editData = this.state.address;
    if (this.state.email != '') {
      editData.email = this.state.email;
    }
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
                        <div className="personal_details clearfix"><h5>Contact Information</h5> <span><i className="fa fa-circle-o"></i><i className="fa fa-circle"></i><i className="fa fa-circle-o"></i></span></div>
                        <div className="personal_form">
                          <div className="row">
                            <form id="contact_info">
                              <div className="col-sm-12 col-xs-12">
                                <div className="form-group">
                                  <label className="label-control">Email address</label><br />
                                  <input type="email" name="email" ref="emailadd" placeholder="eg: info@email.com" defaultValue={editData ? editData.email : ''} key={editData ? editData.email : ''} className="form-control"></input>
                                </div>
                              </div>
                              <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                  <label className="label-control">Province</label>
                                  <InputElement type="text" name="province" mask="aaaaaaaaaaaaaaaaaaaa" ref="province" placeholder="eg: Province" defaultValue={editData ? editData.region2 : ''} key={editData ? editData.region2 : ''} className="form-control" maskChar={null} />
                                  {/*<input type="text" username="full_name" placeholder="eg: Province" className="input_form"></input>*/}
                                </div>
                              </div>
                              <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                  <label className="label-control">Regency/City</label>
                                  <InputElement type="text" name="regency" mask="aaaaaaaaaaaaaaaaaaaa" ref="city" placeholder="eg: City" defaultValue={editData ? editData.region3 : ''} key={editData ? editData.region3 : ''} className="form-control" maskChar={null} />
                                  {/*<input type="text" username="full_name" placeholder="eg: City" className="input_form"></input>*/}
                                </div>
                              </div>
                              <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                  <label className="label-control">District</label>
                                  <InputElement type="text" name="district" mask="aaaaaaaaaaaaaaaaaaaa" ref="district" placeholder="eg: District" defaultValue={editData ? editData.region4 : ''} key={editData ? editData.region4 : ''} className="form-control" maskChar={null} />
                                  {/*<input type="text" username="full_name" placeholder="eg: District" className="input_form"></input>*/}
                                </div>
                              </div>

                              <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                  <label className="label-control">Subdivision/Village</label>
                                  <InputElement type="text" name="village" mask="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" defaultValue={editData ? editData.region5 : ''} key={editData ? editData.region5 : ''} ref="subdivision" placeholder="eg: Village" className="form-control" maskChar={null} />
                                  {/*<input type="text" username="full_name" placeholder="eg: Village" className="input_form"></input>*/}
                                </div>
                              </div>
                              <div className="col-sm-12 col-xs-12">
                                <div className="form-group">
                                  <label className="label-control">Home address</label>
                                  <input type="text" name="address" ref="homeadd" defaultValue={editData ? editData.street : ''} key={editData ? editData.street : ''} placeholder="eg: House number, street number, RT/RW" className="form-control" />
                                </div>
                              </div>
                              <div className="col-sm-12 col-xs-12">
                                <div className="form-group">
                                </div>
                              </div>
                              <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                  <label className="label-control">Postal Code</label>
                                  <InputElement id="postal_code" minLength={5} ref="postal" placeholder="eg: 00000" name="postalcode" defaultValue={editData ? editData.zip : ''} key={editData ? editData.zip : ''} className="form-control" mask="99999" maskChar={null} />
                                  {/*<input type="text" maxLength={6} name="postalcode" username="full_name" ref="postal" placeholder="eg: 0000" className="form-control"></input>*/}
                                </div>
                              </div>
                            </form>
                            <div className="col-sm-12 col-xs-12">
                              <div className="continue next_previous clearfix">
                                <Link to="/wizard7">
                                  <button type="button" className="btn btn-primary pull-left prev_btn">Previous</button>
                                </Link>
                                <button type="button"  onClick={(e) => this.submitHandler(e)} className="btn btn-primary pull-right next_btn">Next</button>
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
export default ContactInfo;