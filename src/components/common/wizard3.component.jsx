import React from 'react';
import { Link } from 'react-router';
import * as api from '../../../tools/apiConfig';
import $ from 'jquery';
import * as validation from '../../js/custom';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
class Wizard3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectValue: 'Permanent',
      Other: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
  }
  componentDidMount() {
    validation.FormValidationMd.init();
    this.getData();
    var editData = localStorage.employ;
    if (editData != 'Permanent' && editData != 'Other' && editData != null) {
      this.setState({
        selectValue: 'Other'
      })
    }
    else if (editData == 'Other') {
      this.setState({
        selectValue: 'Other'
      })
      localStorage.removeItem('employ')
    }
    else if (editData == 'Permanent') {
      this.setState({
        selectValue: 'Permanent'
      })
      localStorage.removeItem('employ')
    }
    else if (editData == null) {
      this.setState({
        selectValue: 'Permanent'
      })
    }
  }
  handleChange(e) {
    this.setState({ selectValue: ReactDOM.findDOMNode(this.refs.temp).value });
  }
  handleChangeforTextbox(e) {
    this.setState({ Other: e.target.value });
    validation.FormValidationMd.init();
  }
  handleValue(data) {
    var income = data.emp_detail.monthly_income_base;
    if (data.emp_detail.employment_status == 'other') {
      this.setState({
        Other: data.emp_detail.employment_status_other,
        selectValue: 'Other'
      })
    }
    else {
      this.setState({
        selectValue: 'Permanent'
      })
    }
  }
  saveData(data) {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    data.user_id = id;
    data.type = 'borrower'
    $.ajax({
      type: 'POST',
      url: api.SAVE_STATUS,
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
          browserHistory.push('/wizard4')
        }
        else if (response.status == 'INTERNAL_ERROR') {
          this.props.setPercent(100);
          toastr.error('Some internal error occured.')
        }
      }.bind(this),
      error: function (response) {
        localStorage.clear();
        this.props.setPercent(100);
        toastr.error("Server error occured");
        browserHistory.push('/Login')
      }.bind(this)
    });
  }
  getData() {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_STATUS,
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
  submitHandler(e) {
    var form = $("#other_status");
    if (this.state.selectValue == 'Other' && this.state.Other != '') {
      if (form.valid()) {
        var sal = localStorage.getItem('sal');
        if (sal) {
          var temp = sal.replace(/\./g, '');
        }
        else {
          var temp = 0;
        }
        var data = {
          emp_status: "other",
          employment_status_other: this.state.Other,
          monthly_salary: parseInt(temp),
          type: 'borrower'
        }
        this.props.start();
        this.saveData(data);
        localStorage.setItem('employ', this.state.Other)
      }
      else {
        e.preventDefault();
      }
    }
    else {
      var sal = localStorage.getItem('sal');
      if (sal) {
        var temp = sal.replace(/\./g, '');
      }
      else {
        var temp = 0;
      }
      var data = {
        emp_status: "permanent",
        monthly_salary: parseInt(temp),
        type: 'borrower'
      }
      this.props.start();
      this.saveData(data);
      localStorage.setItem('employ', this.state.selectValue);
    }
  }
  render() {
    const editData = this.state.selectValue;
    var otherData = this.state.Other;
    var partialContent = <form id="other_status"><div className="nombs sub_filed">
      <div className=""><h4>Please specify :</h4></div>
      <div className="nombs form-group">
        <input type="text" name="status" id="other_status" maxLength={25} placeholder="status" className="input_form" onBlur={this.handleChangeforTextbox.bind(this)} defaultValue={otherData ? otherData : ""} key={otherData ? otherData : ""} />
      </div>
    </div>
    </form>;
    const KTP = localStorage.KTP;
    const salary = localStorage.getItem('sal')
    // const content = this.state.selectValue == 'other'
    //   ? 
    //   : null;
    return (
      <div className="nav-md loan_wizard step3">
        <div className="main_container">
          <div className="container">
            <div className="right_col" role="main">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapperr row primary_step">
                    <div className="col-sm-12 col-xs-12">
                      <div className="completed_fileds" >
                        <div className="completed"><Link to="/wizard" className="edit_link">My KTP Number (NIK) is: <span> {KTP}</span></Link></div>
                        <div className="completed"><Link to="/wizard2" className="edit_link">My monthly salary is: <span> {salary} million RP </span></Link></div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper row">
                    <div className="col-sm-8 col-xs-12">
                      <div className="process active_field">
                        <div className="active_lable">
                          <h3>My employee status is:</h3>
                        </div>
                        <div className="fields clearfix sub_field_group">
                          {/*<div className="nombs drop"> <span >Permanent</span> <i className="fa fa-angle-down" aria-hidden="true"></i> </div>*/}
                          <select onChange={this.handleChange.bind(this)} defaultValue={editData ? editData : ''} key={editData ? editData : ''} ref="temp">
                            <option value="Permanent">Permanent</option>
                            <option value="Other">Other</option>
                          </select>
                          {this.state.selectValue == 'Other' ? partialContent : null}
                        </div>
                      </div>
                      <div className="next_previous clearfix">
                        <button type="button" onClick={this.submitHandler} className="btn btn-primary pull-right next_btn">Next</button>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12 right_notifi step_notifi">
                      <h4>Why do we need this?</h4>
                      <p>In order to determine your eligibility,
                        we need your NIK to Lorem ipsum
                        dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh
                  eu </p>
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
    );
  }
}
export default Wizard3;