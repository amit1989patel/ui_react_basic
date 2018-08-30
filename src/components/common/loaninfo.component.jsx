import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import * as api from '../../../tools/apiConfig';
import * as validation from '../../js/custom';
import $ from 'jquery';
import { Router, browserHistory } from 'react-router';
import OfferedLoan from '../shared/offeredLoanSection.component.jsx';
class LoanInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
      months: 0,
      monthlyPayment: 0,
      totalPayment: 0,
      loaninfo: {}
    }
    this.saveLoanInfo = this.saveLoanInfo.bind(this);
    this.getLoanInfo = this.getLoanInfo.bind(this);
  }

  changeHandler() {
    this.calculateAmount();
  }
  componentDidMount() {
    this.getLoanInfo();
    validation.FormValidationMd.init();
  }
  saveLoanInfo(data) {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    data.user_id = id;
    $.ajax({
      type: 'POST',
      url: api.SAVE_LOANINFO,
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
          //localStorage.setItem('loanId', response.data.id)
          browserHistory.push('/userinfo')
        }
        else if (response.status == 'INTERNAL_ERROR') {
          toastr.error('Some internal error occured.')
        }
      }.bind(this),
      error: function (response) {
        toastr.error("Server error occured");
        browserHistory.push('/loaninfo')
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
        toastr.error("Server error occured");
        browserHistory.push('/Login')
        this.props.setPercent(100);
      }.bind(this)
    });
  }
  submitHandler(e) {
    var form = $("#loaninfo");
    const loan_amount = localStorage.getItem('tenor_amt')
    const loan_tenor = localStorage.getItem('tenor_mon')
    form.validate();
    if (form.valid()) {
      var data = {
        purpose_of_loan: ReactDOM.findDOMNode(this.refs.purpose).value,
        details_needs: ReactDOM.findDOMNode(this.refs.need).value,
        loan_amount: loan_amount,
        loan_tenor : loan_tenor,
        fee_upfront : '5000.000',
        interest_rate : '35',

      }
      this.saveLoanInfo(data);
      // localStorage.setItem('purpose', data.purpose);
      // localStorage.setItem('need', data.need);
      // browserHistory.push('/userinfo');
      //localStorage.setItem('data', data);
    }
    else {
      browserHistory.push('/userinfo')
    }
  }

  render() {
    var editData = this.state.loaninfo;
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
                        <div className="personal_details clearfix"><h5>Loan Information</h5> <span><i className="fa fa-circle-o"></i><i className="fa fa-circle-o"></i><i className="fa fa-circle"></i></span></div>
                        <div className="personal_form">
                          <form id="loaninfo">
                            <div className="row">
                              <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                  <label className="label-control">Purpose of Loan</label>
                                  <input type="text" name="purpose" maxLength={50}  ref="purpose" defaultValue={editData ? editData.purpose_of_loan : ""} key={editData ? editData.purpose_of_loan : ""} placeholder="eg: purpose of loan" className="input_form"></input>
                                </div>
                              </div>
                              <div className="col-sm-12 col-xs-12">
                                <div className="form-group">
                                  <label className="label-control">Why do you need the loan? Give us some details</label>
                                  <input type="text" name="reason_loan" maxLength={100}  ref="need" defaultValue={editData ? editData.details_needs : ""} key={editData ? editData.details_needs : ""} placeholder="eg: Information for loan" className="input_form "></input>
                                </div>
                              </div>
                              <div className="col-sm-12 col-xs-12">
                                <div className="continue next_previous clearfix">
                                  <Link to='/contactinfo'>
                                    <button type="button" className="btn btn-primary pull-left prev_btn">Previous</button>
                                  </Link>
                                  <button type="button" onClick={(e) => this.submitHandler(e)} className="btn btn-primary pull-right next_btn">Next</button>
                                </div>
                              </div>
                            </div>
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
      </div>
    );
  }
}
export default LoanInfo;