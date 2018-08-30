import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Router, browserHistory } from 'react-router';

class OfferedLoan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
      months: 0,
      monthlyPayment: 0,
      totalPayment: 0
    }
    this.incrementAmt = this.incrementAmt.bind(this);
    this.decrementAmt = this.decrementAmt.bind(this);
    this.decrementMon = this.decrementMon.bind(this);
    this.incrementMon = this.incrementMon.bind(this);
    this.calculateAmount = this.calculateAmount.bind(this);
  }
  calculateAmount() {
    var amount = ReactDOM.findDOMNode(this.refs.amount).value;
    var t = ReactDOM.findDOMNode(this.refs.month).value;
    var p = amount * 1000000;
    var totalPayment = p + (p * 0.35 * t) / 12
    var monthlyPayment = (totalPayment / t).toFixed(2);
    monthlyPayment = (monthlyPayment / 1000000).toFixed(4);
    p = totalPayment / 1000000;
    totalPayment = p.toFixed(2);
    if (monthlyPayment == Infinity || monthlyPayment == "NaN") {
      this.setState({
        monthlyPayment: 0,
        totalPayment: totalPayment
      })
    }
    else {
      this.setState({
        monthlyPayment: monthlyPayment,
        totalPayment: totalPayment
      })
    }
  }
  componentDidMount() {
    var tenor_mon = localStorage.getItem('tenor_mon');
    var tenor_amt = localStorage.getItem('tenor_amt');
    if (tenor_mon && tenor_amt) {
      ReactDOM.findDOMNode(this.refs.month).value = tenor_mon;
      ReactDOM.findDOMNode(this.refs.amount).value = tenor_amt;
    }
    else {
      localStorage.setItem('tenor_mon',12);
      localStorage.setItem('tenor_amt',5);
      ReactDOM.findDOMNode(this.refs.month).value = 12;
      ReactDOM.findDOMNode(this.refs.amount).value = 5;
    }
    this.calculateAmount();    
  }
  decrementAmt() {
    const currval = ReactDOM.findDOMNode(this.refs.amount).value;
    if (currval != "") {
      var dec = parseInt(currval);
      const changed = dec - 1;
      if (changed >= 5 && changed <= 10) {
        ReactDOM.findDOMNode(this.refs.amount).value = changed;
        localStorage.setItem('tenor_amt',changed);
      }
    }
    this.calculateAmount();
  }
  incrementAmt() {
    const currval = ReactDOM.findDOMNode(this.refs.amount).value;
    if (currval == "") {
      var inc = 5;
      const changed = inc + 1;
      ReactDOM.findDOMNode(this.refs.amount).value = changed;
      localStorage.setItem('tenor_amt',changed);
    }
    else if (currval != "" && currval < 10) {
      var inc = parseInt(currval);
      const changed = inc + 1;
      ReactDOM.findDOMNode(this.refs.amount).value = changed;
      localStorage.setItem('tenor_amt',changed);
    }
    this.calculateAmount();
  }
  decrementMon() {
    const currval = ReactDOM.findDOMNode(this.refs.month).value;
    if (currval != "") {
      var dec = parseInt(currval);
      const changed = dec - 6;
      if (changed >= 6 && changed <= 18) {
        ReactDOM.findDOMNode(this.refs.month).value = changed;
        localStorage.setItem('tenor_mon',changed);
      }
    }
    this.calculateAmount();
  }
  incrementMon() {
    const currval = ReactDOM.findDOMNode(this.refs.month).value;
    if (currval == "") {
      var inc = 12;
      const changed = inc + 6;
      ReactDOM.findDOMNode(this.refs.month).value = changed;
      localStorage.setItem('tenor_mon',changed);
    }
    else if (currval < 18) {
      var inc = parseInt(currval);
      const changed = inc + 6;
      ReactDOM.findDOMNode(this.refs.month).value = changed;
      localStorage.setItem('tenor_mon',changed);
    }
    this.calculateAmount();
  }
  render() {
    return (
      <div className="offered_loan">
        <div className="loan_sec">
          <div className="loan_fields clearfix">
            <div className="loan_label">
              <label>I want to borrow</label> <span className="increment" onClick={this.decrementAmt}><i className="fa fa-minus-square-o"></i></span><span><input className="custom_query" disabled={true} ref="amount" type="text" /></span><span className="increment" onClick={this.incrementAmt}><i className="fa fa-plus-square-o"></i></span>
              <label>millions Rp</label> <label> and I will repay over</label> <span className="increment" onClick={this.decrementMon}><i className="fa fa-minus-square-o"></i></span><span><input className="custom_query" disabled={true} ref="month" type="text" /></span><span className="increment" onClick={this.incrementMon}><i className="fa fa-plus-square-o"></i></span>
              <label>months.</label>
            </div>
            <div className="monthly_pay">
              <div className="clearfix show_more">
                <h2>Monthly Payment</h2> <span className="show_details"><i className="fa fa-angle-double-up"></i> Hide Details</span>
              </div>
              <div className="amount"><span>Rp {this.state.monthlyPayment}</span></div>
              <div className="amt_noti"><span>The amount you will pay each month.</span></div>
            </div>
            <div className="row pay_info_wrap">
              <div className="col-sm-6 col-xs-6 pay_info">
                <div>
                  <h2>Interest Rate</h2>
                </div>
                <div className="amount"><span>35%</span></div>
                <div className="amt_noti"><span>The cost of your credit<br />
                  as a yearly rate.</span></div>
              </div>
              <div className="col-sm-6 col-xs-6 pay_info">
                <div>
                  <h2>Total Payment</h2>
                </div>
                <div className="amount"><span>Rp {this.state.totalPayment}</span></div>
                <div className="amt_noti"><span>
                  The amount you will have to pay when you
                                  have<br />
                  made all scheduled payments.</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="review_note">
          <p>* Includes Finance Charge of Rp 500.000</p>
        </div>
      </div>
    )
  }
}
export default OfferedLoan;