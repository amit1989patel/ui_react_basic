import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Sidebar from '../shared/sidebar.component.jsx';
import * as script from '../../js/custom.min.js';
class ProcessingApplication extends React.Component {
  componentDidMount() {
    script.layout.init();
  }

  render() {

    return (
      <div id="sidebar_togg" className="nav-md loan_wizard sidebar_wrap">
        <div className="container body">
          <div className="main_container">
            <Sidebar />
            <div className="right_col" role="main">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapper">
                    <div className="documentstatus">
                      <div className="loner_head">
                        <h2>Application Status</h2>
                      </div>
                      <div className="progress_bar">
                        <ul className="progress-indicator">
                          <li className="completed"> <span className="bubble"></span> Incomplete </li>
                          <li className="active"> <span className="bubble"></span> Processing <br />
                            <small>(active)</small> </li>
                          <li> <span className="bubble"></span> Approved </li>
                          <li> <span className="bubble"></span> Disbursed </li>
                        </ul>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Document name</th>
                              <th>Documnet status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Check permission</td>
                              <td><span className="received"><i className="fa fa-check"></i> Received</span> <span className="date">on 09/18/2017</span></td>
                              <td>None</td>
                            </tr>
                            <tr>
                              <td>Id card</td>
                              <td><span className="received"><i className="fa fa-check"></i> Received</span> <span className="date">on 09/18/2017</span></td>
                              <td>None</td>
                            </tr>
                            <tr>
                              <td>Family card</td>
                              <td><span className="received"><i className="fa fa-check"></i> Received</span> <span className="date">on 09/18/2017</span></td>
                              <td>None</td>
                            </tr>
                            <tr>
                              <td>Face photo</td>
                              <td><span className="incomplete"><i className="fa fa-times"></i> Incomplete</span></td>
                              <td>Upload photo</td>
                            </tr>
                            <tr>
                              <td>Letter of employer</td>
                              <td><span className="incomplete"><i className="fa fa-times"></i> Incomplete</span></td>
                              <td>Verify</td>
                            </tr>
                            <tr>
                              <td>Address</td>
                              <td><span className="pending">...Pending</span></td>
                              <td><span>Please wait while we confirm your address</span></td>
                            </tr>
                            <tr>
                              <td>Salary slip</td>
                              <td><span className="incomplete">Incomplete</span></td>
                              <td><span>Upload salary slip</span></td>
                            </tr>
                            <tr>
                              <td>Certificate</td>
                              <td><span className="incomplete">Incomplete</span></td>
                              <td><span>Upload certificate</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="next_previous clearfix continue btn_solid">
                        <Link to="interestinfo">
                          <button type="button" className="btn btn-primary pull-right next_btn">Continue</button>
                        </Link>
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
export default ProcessingApplication;