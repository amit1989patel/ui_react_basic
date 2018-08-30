import React from 'react';
import ReactDOM from 'react-dom';
import * as validation from '../../js/custom';
import * as script from '../../js/custom.min.js';
import moment from 'moment';
import * as api from '../../../tools/apiConfig';
import $ from 'jquery';
import { Router, Link, browserHistory } from 'react-router';
import InputElement from 'react-input-mask';
import Sidebar from '../shared/sidebar.component.jsx';
class RelativeInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment().subtract(18, "years"),
      // relativeInfo: {
      //   relative: {
      //     fullname: ""
      //   },
      //   spouse: {
      //     number: "",
      //     fullname: ""
      //   }
      // },
      relativeInfo: [{
        relative: {
          fullname: ''
        },
        spouse: {
          number: ''
        }
      }],
    }
    this.handleData = this.handleData.bind(this);
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
    script.layout.init();
    validation.FormValidationMd.init();
  }
  componentWillMount() {
    this.setState({
      relativeInfo: ''
    })
  }
  handleData(data) {
    this.setState({
      relativeInfo: data
    })
  }
  getData() {
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
          this.handleData(response.data);
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
      url: api.SAVE_RELATIVEINFO,
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
  submitHandler(e) {
    var form = $("#relative_info");
    var loc = ReactDOM.findDOMNode(this.refs.spouse_ktp).value;
    if (loc) {
      var temp = ReactDOM.findDOMNode(this.refs.spouse_ktp).value;
      var KTP = temp.replace(/ /g, '');
    }
    form.validate();
    if (form.valid()) {
      var data = {
        ktp_no: KTP,
        spouse_companyname: ReactDOM.findDOMNode(this.refs.spouse_companyname).value,
        spouse_name: ReactDOM.findDOMNode(this.refs.spouse_name).value,
        spouse_phone: (ReactDOM.findDOMNode(this.refs.spouse_phone).value).replace(/ /g, ''),
        spouse_occupation: ReactDOM.findDOMNode(this.refs.spouse_occupation).value,
        spouse_address: ReactDOM.findDOMNode(this.refs.spouse_address).value,
        spouse_district: ReactDOM.findDOMNode(this.refs.spouse_district).value,
        spouse_regency: ReactDOM.findDOMNode(this.refs.spouse_regency).value,
        spouse_province: ReactDOM.findDOMNode(this.refs.spouse_province).value,
        spouse_zip: ReactDOM.findDOMNode(this.refs.spouse_zip).value,
        //spouse_country: ReactDOM.findDOMNode(this.refs.spouse_country).value,
        relative_name: ReactDOM.findDOMNode(this.refs.relative_name).value,
        //relative_relation: ReactDOM.findDOMNode(this.refs.relative_relationship).value,
        relative_phone: (ReactDOM.findDOMNode(this.refs.relative_phone).value).replace(/ /g, ''),
        relative_occupation: ReactDOM.findDOMNode(this.refs.relative_occupation).value,
        relative_address: ReactDOM.findDOMNode(this.refs.relative_address).value,
        relative_district: ReactDOM.findDOMNode(this.refs.relative_district).value,
        relative_regency: ReactDOM.findDOMNode(this.refs.relative_regency).value,
        relative_province: ReactDOM.findDOMNode(this.refs.relative_province).value,
        relative_zip: ReactDOM.findDOMNode(this.refs.relative_zip).value,
        //relative_country: ReactDOM.findDOMNode(this.refs.relative_country).value,
        user_id: localStorage.getItem('id')
      }
      this.props.start();
      this.saveData(data)
    }
    else {
      e.preventDefault();
    }
  }
  render() {
    const editData = this.state.relativeInfo;
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
                      <h2>Relative Info</h2>
                    </div>
                    <div className="clearfix row">
                      <div className="col-sm-12 col-xs12 right_notifi">
                        <div className="sideform personal_note">
                          <div className=""> <span className="blue_notes">In order to proceed with the loan, please verify and complete the following information</span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="personal_overlay employment_overlay clearfix">
                      <form id="relative_info">
                        <div className="row">
                          <div className="col-sm-12 col-xs-12 personal_details">
                            <h5>Spouse Details</h5>
                            <div className="personal_form">
                              <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">KTP number</label><br />
                                    {/*<input type="text" name="relative_KTP" placeholder="eg: KTP number" username="full_name" className="form-control" />*/}
                                    <InputElement id="KTP" ref="spouse_ktp" defaultValue={editData ? editData.spouse.number : ''} key={editData ? editData.spouse.number : ''} placeholder="eg: KTP number" mask="999999 999999 9999" name="relative_KTP" className="form-control" maskChar="" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Name</label><br />
                                    <input type="text" ref="spouse_name" defaultValue={editData ? editData.spouse.fullname : ""} key={editData ? editData.spouse.fullname : ""} name="spouse_name" maxLength={50} placeholder="your spouse name" className="form-control" />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Name" className="input_form" maskChar={null} />*/}
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Company Name</label><br />
                                    <input type="text" ref="spouse_companyname" defaultValue={editData ? editData.spouse.company_name : ""} key={editData ? editData.spouse.company_name : ""} name="companyname" placeholder="eg: Company Name" className="form-control" />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Company Name" className="input_form" maskChar={null}/>*/}
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Phone number</label><br />
                                    <InputElement ref="spouse_phone" defaultValue={editData ? editData.spouse.home_phone : ''} key={editData ? editData.spouse.home_phone : ''} placeholder="eg: Spouse phone" name="spouse_phone" mask="+6\2 999 9999 99999" className="form-control" maskChar={null} />
                                    {/*<input type="text" name="spouse_phone" username="full_name" placeholder="eg: Phone number" className="form-control"></input>*/}
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Occupation</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Occupation" className="input_form" maskChar={null} />*/}
                                    <input type="text" ref="spouse_occupation" defaultValue={editData ? editData.spouse.occupation : ''} key={editData ? editData.spouse.occupation : ''} name="spouse_occupation" placeholder="eg: Occupation" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Province</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Province" className="input_form" maskChar={null} />*/}
                                    <input type="text" ref="spouse_province" defaultValue={editData ? editData.spouse.region2 : ''} key={editData ? editData.spouse.region2 : ''} name="spouse_province" placeholder="eg: Province" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Regency</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Regency" className="input_form" maskChar={null} />*/}
                                    <input type="text" ref="spouse_regency" defaultValue={editData ? editData.spouse.region3 : ''} key={editData ? editData.spouse.region3 : ''} name="spouse_regency" placeholder="eg: Regency" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">District</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: District" className="input_form" maskChar={null} />*/}
                                    <input type="text" ref="spouse_district" defaultValue={editData ? editData.spouse.region4 : ''} key={editData ? editData.spouse.region4 : ''} name="spouse_district" placeholder="eg: District" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Address</label><br />
                                    <input type="text" ref="spouse_address" defaultValue={editData ? editData.spouse.street : ''} key={editData ? editData.spouse.street : ''} name="spouse_address" placeholder="eg: Address" className="form-control"></input>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Zip code</label><br />
                                    <InputElement ref="spouse_zip" id="spouse_zip" defaultValue={editData ? editData.spouse.zip : ''} key={editData ? editData.spouse.zip : ''} minLength={5} maxLength={5} placeholder="eg: 00000" name="spouse_zip" className="form-control" mask="99999" maskChar={null} />
                                    {/*<input type="text" name="spouse_zip" username="full_name" placeholder="eg: Zip code" className="form-control"></input>*/}
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Country</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Country" className="input_form" maskChar={null} />*/}
                                    <input type="text" ref="spouse_country" name="spouse_country" value='INDONESIA' disabled={true} placeholder="eg: Country" className="form-control" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-xs-12 personal_details">
                            <h5>Relative Details</h5>
                            <div className="personal_form">
                              <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Name</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Name" className="input_form" maskChar={null} />*/}
                                    <input type="text" ref="relative_name" defaultValue={editData ? editData.relative.fullname : ''} key={editData ? editData.relative.fullname : ''} name="relative_name" placeholder="eg: Name" className="form-control" />
                                  </div>
                                </div>
                                {/*<div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Relationship</label><br />
                                    <input type="text" ref="relative_relationship" name="relative_relationship" username="full_name" placeholder="eg: Relationship" className="form-control" />
                                  </div>
                                </div>*/}
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Phone number</label><br />
                                    <InputElement ref="relative_phone" defaultValue={editData ? editData.relative.home_phone : ''} key={editData ? editData.relative.home_phone : ''} placeholder="eg: Spouse phone" name="relative_phone" mask="+6\2 999 9999 99999" className="form-control" maskChar={null} />
                                    {/*<input type="text" name="relative_phone" username="full_name" placeholder="eg: Phone number" className="form-control" />*/}
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Occupation</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Occupation" className="input_form" maskChar={null} />*/}
                                    <input type="text" ref="relative_occupation" defaultValue={editData ? editData.relative.occupation : ''} key={editData ? editData.relative.occupation : ''} name="relative_occupation" placeholder="eg: Occupation" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Province</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Province" className="input_form" maskChar={null}/>*/}
                                    <input type="text" ref="relative_province" defaultValue={editData ? editData.relative.region1 : ''} key={editData ? editData.relative.region1 : ''} name="relative_province" placeholder="eg: Province" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Regency</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Regency" className="input_form" maskChar={null} />*/}
                                    <input type="text" ref="relative_regency" defaultValue={editData ? editData.relative.region2 : ''} key={editData ? editData.relative.region2 : ''} name="relative_regency" placeholder="eg: Regency" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">District</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: District" className="input_form" maskChar={null} />*/}
                                    <input type="text" ref="relative_district" defaultValue={editData ? editData.relative.region3 : ''} key={editData ? editData.relative.region3 : ''} name="relative_district" placeholder="eg: District" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Address</label><br />
                                    <input type="text" ref="relative_address" defaultValue={editData ? editData.relative.street : ''} key={editData ? editData.relative.street : ''} name="relative_address" placeholder="eg: Address" className="form-control"></input>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Zip code</label><br />
                                    <InputElement id="relative_zip" ref="relative_zip" minLength={5} maxLength={5} placeholder="eg: 00000" name="relative_zip" defaultValue={editData ? editData.relative.zip : ''} key={editData ? editData.relative.zip : ''} className="form-control" mask="99999" maskChar={null} />
                                    {/*<input type="text" ref="relative_zip" name="zip" username="full_name" placeholder="eg: Zip code" className="form-control"></input>*/}
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Country</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Country" className="input_form" maskChar={null} />*/}
                                    <input type="text" ref="relative_country" name="relative_country" value='INDONESIA' disabled={true} placeholder="eg: Country" className="form-control" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="next_previous clearfix continue" >
                      <Link to="/loanapplication_status_1">
                        <button type="button" className="btn btn-primary pull-left next_btn ">Previous</button>
                      </Link>
                      <button type="button" onClick={(e) => this.submitHandler(e)} className="btn btn-primary pull-right next_btn ">Continue</button>
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
export default RelativeInfo;