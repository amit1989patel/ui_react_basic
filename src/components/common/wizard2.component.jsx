import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import * as api from '../../../tools/apiConfig';
import * as validation from '../../js/custom';
import NumberFormat from 'react-number-format';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
class Wizard2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            income: '',
        }
        this.submitHandler = this.submitHandler.bind(this);
    }
    componentDidMount() {
        this.getData();
        validation.FormValidationMd.init();
    }
    submitHandler(e) {
        e.preventDefault();
        var form = $("#wizard2");
        if (form.valid()) {
            var data = {
                sal: ReactDOM.findDOMNode(this.refs.sal).value
            }
            // var temp = parseInt(data.sal);
            // var sal = temp.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            // data.sal = sal;
            localStorage.setItem('sal', data.sal);
            browserHistory.push('/wizard3');
        }
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
                    this.setState({
                        income: response.data.emp_detail.monthly_income_base
                    })
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
    render() {
        const KTP = localStorage.KTP;
        const editData = this.state.income;

        return (
            <div className="nav-md loan_wizard step2">
                <div className="main_container">
                    <div className="container">
                        <div className="right_col" role="main">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="wrapperr row primary_step">
                                        <div className="col-sm-12 col-xs-12">
                                            <div className="completed_fileds">
                                                <div className="completed"><Link to="/wizard" className="edit_link">My KTP Number (NIK) is: <span>{KTP}</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrapper row">
                                        <div className="col-sm-8 col-xs-12">
                                            <div className="process active_field">
                                                <div className="active_lable">
                                                    <h3>My monthly salary is: </h3>
                                                </div>
                                                <form id="wizard2">
                                                    <div className="fields clearfix">
                                                        <div className="group_lable"> <span>Rp</span> </div>
                                                        {/*<div className="nombs" > <InputElement name="salary" defaultValue={editData ? editData.sal : ""} ref="sal" mask="99.000.000" maskChar="" /></div>*/}
                                                        <div className="nombs form-group" > <NumberFormat ref="sal" value={editData ? editData : ""} name="salary" thousandSeparator={'.'} decimalSeparator={','} minLength={9} maxLength={10} /> </div>
                                                        <div className="group_lable"> <span>millions</span> </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="next_previous clearfix">
                                                <button type="button" onClick={(e) => this.submitHandler(e)} className="btn btn-primary pull-right next_btn ">Next</button>
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
                </div>
            </div>
        );
    }
}

export default Wizard2;