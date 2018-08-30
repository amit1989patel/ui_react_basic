import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Sidebar from '../shared/sidebar.component.jsx';
class loanapplicationstatus3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
    }

    render() {

        return (
            <div className="container-fluid dashboard_wrap">
         <div className="right_col dashboard" role="main">
        <div className="dashboard_welcome">
          <div className="text-center">
            <h3>Welcome Huge Doe</h3>
            <p>Click below button to start your loan process</p>
            <div className="next_previous clearfix continue" style={{paddingTop:0, marginBottom:70}}>
              <button type="button" className="btn btn-primary next_btn ">Start Loan process</button>
            </div>
          </div>
        </div>
        <div className="row top_tiles"> 
      
        </div>
        
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="dashboard_graph">
              <div className="row x_title">
                <div className="col-md-6">
                  <h5>Loan Application Status:</h5>
                </div>
                <div className="col-md-6 text-right">
                  <h5 className="complition"><span>33% Repaid</span></h5>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div id="chart_plot_01" className="loan_app">
                  <div className="status"><strong>Status:</strong> <span>Approved</span></div>
                  <div>
                    <p>Your Loan is approved with 33% Repaid</p>
                  </div>
                  <div className="documentstatus repaid_doc">
                    <div className="loner_head"> </div>
                    <div className="progress_bar">
                      <ul className="progress-indicator">
                        <li className="completed"> <span className="bubble"></span> Incomplete </li>
                        <li className="completed"> <span className="bubble"></span> Processing </li>
                        <li className="active"> <span className="bubble"></span> Approved <br />
                          <small>(active)</small> </li>
                        <li> <span className="bubble"></span> Disbursed </li>
                      </ul>
                    </div>
                    
                    <div className="row repaid_amt">
                    	<div className="col-md-4 col-sm-4 col-xs-12">
                    		<div className="repaid_amt1 repaid_amt11">
                    			<span className="blue">Next Installment</span>
								<div className="repaid_cost"><strong>Rp. 1.250.000</strong></div>
                    		</div>
                    	</div>
                    	<div className="col-md-4 col-sm-4 col-xs-12">
                    		<div className="repaid_amt1 repaid_amt12">
                    			<div className="blue duedate">Due Date</div>
                    			<span className="blue">Tuesday</span>
								<div className="repaid_cost"><strong>23</strong></div>
                   				<span className="blue">January</span>
                   				<div className="daysleft"><span>15 days left</span></div>
                    		</div>
                    	</div>
                    	<div className="col-md-4 col-sm-4 col-xs-12">
                    		<div className="repaid_amt1 repaid_amt13" style={{marginBottom:20}}>
                    			<span className="blue">Amount Repaid</span>
								<div className="repaid_cost"><strong>Rp. 8.000.000</strong></div>
                    		</div>
                    		<div className="repaid_amt1 repaid_amt13">
                    			<span className="blue">Amount Remaining</span>
								<div className="repaid_cost"><strong>Rp. 4.000.000</strong></div>
                    		</div>
                    	</div>
                    </div>
                    
                    <div className="clearfix">
            <div className="x_panel repayment">
              <div className="x_title">
                <h5>My Repayment</h5>
                <ul className="nav navbar-right panel_toolbox">
                  {/*<li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a> </li>
                  <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a> </li>
                      <li><a href="#">Settings 2</a> </li>
                    </ul>
                  </li>*/}
                  
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="x_content">
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th >Account Holder Name</th>
                        <td>Invest and Borrower Client Trust Account</td>
                      </tr>
                      <tr>
                        <th>Sort Code</th>
                        <td>15-10-00</td>
                      </tr>
                      <tr>
                        <th>Account Number</th>
                        <td>23217151</td>
                      </tr>
                      <tr>
                        <th>Quote Reference</th>
                        <td>10002</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
                   
                    <div className="table-responsive repaid_table">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Principal Intrest</th>
                            <th>Total</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><span className="date">09/18/2017</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td><span className="">10%</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td><span className="date">09/18/2017</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td><span className="">10%</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td><span className="date">09/18/2017</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td><span className="">10%</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td><span className="date">09/18/2017</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td><span className="">10%</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td><span className="date">09/18/2017</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td><span className="">10%</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td><span className="date">09/18/2017</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td><span className="">10%</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td><span className="date">09/18/2017</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td><span className="">10%</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td><span className="date">09/18/2017</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td><span className="">10%</span></td>
                            <td><span className="">Rp. 1.000.000</span></td>
                            <td>None</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="next_previous clearfix continue"> </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
        )
    }
}
export default loanapplicationstatus3;