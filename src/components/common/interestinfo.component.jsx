import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Sidebar from '../shared/sidebar.component.jsx';
import * as script from '../../js/custom.min.js';
class InterestInfo extends React.Component {
  componentDidMount() {
    script.layout.init();
  }
  render() {
    return (
      <div id="sidebar_togg" className="nav-md loan_wizard sidebar_wrap">
        <div className="container body">
          <div className="main_container">
            <Sidebar />

            <div className="right_col" role="main" >
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapper row">
                    <div className="col-sm-12 col-xs12">
                      <div className="offered_loan review_info thankyou">
                        <h2>Thank you for your interest!</h2>
                        <p>Unfortunately, we are unable to offer you a loan because we are not operating in your
                  city yet. Please check back later.</p>
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
export default InterestInfo;