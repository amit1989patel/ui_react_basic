import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

class Wizard6 extends React.Component {
  render() {
    const salary = localStorage.sal;
    const KTP = localStorage.KTP;
    const phonenum = localStorage.phonenum;
    const status = localStorage.getItem('employ')
    return (
      <div className="nav-md loan_wizard step6">
        <div className="main_container">
          <div className="container">
            <div className="right_col" role="main">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapperr row primary_step">
                    <div className="col-sm-12 col-xs12">
                      <div className="completed_fileds">
                        <div className="completed"><Link to="/wizard" className="edit_link">My KTP Number (NIK) is: <span> {KTP}</span></Link></div>
                        <div className="completed"><Link to="/wizard2" className="edit_link">My monthly salary is: <span> {salary} million RP </span></Link></div>
                        <div className="completed"><Link to="/wizard3" className="edit_link">My employ status is: <span>{status} </span></Link></div>
                        <div className="completed"><Link to="/wizard4" className="edit_link">My phone number is: <span> {phonenum} </span></Link></div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper row">
                    <div className="col-sm-8 col-xs-12">
                      <div className="process  active_field">
                        <div className="wrapperr row">
                          <div className="col-sm-12 col-xs-12"><span className="notes blue_notes">Please make sure the above information is correct. Continue to see your loan offer.</span></div>
                        </div>
                        <div className="next_previous clearfix continue">
                          <Link to='/wizard7'>
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
      </div>
    );
  }
}
export default Wizard6;