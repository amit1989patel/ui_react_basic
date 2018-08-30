import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import * as api from '../../../tools/apiConfig';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory } from 'react-router';
import Sidebar from '../shared/sidebar.component.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
class loanapplicationstatus1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: [],
            imgSrc: ''
        }
        this.handleChangeforImage = this.handleChangeforImage.bind(this);
    }
    componentDidMount() {
    }
    handleChangeforImage() {
        // Assuming only image
        var file = this.refs.file.files[0];
        const user_id = localStorage.getItem('id');
        var reader = new FileReader();
        if (file) {
            var url = reader.readAsDataURL(file);
        }
        reader.onloadend = function (e) {
            this.setState({
                imgSrc: [reader.result]
            })
        }.bind(this);
        var token = localStorage.getItem('token');
        const data = {
            user_id: user_id,
            file: file
        }
        var fd = new FormData();
        fd.append("file", file);
        fd.append("user_id", user_id);
        $.ajax({
            type: 'POST',
            url: api.UPLOAD_IMAGE,
            contentType: false,
            processData: false,
            data: fd,
            headers: {
                Authorization: 'Bearer ' + token
            },
            success: function (response) {
                if (response.status == 'UNAUTHORIZED') {
                    localStorage.clear();
                    toastr.error('Your session has been expired,plese login again to continue.')
                    browserHistory.push('/Login')
                }
                else if (response.status == 'OK') {
                    browserHistory.push('/loanapplication_status_1')
                }
                else if (response.status == 'INTERNAL_ERROR') {
                    toastr.error('Some internal error occured.')
                }
                else {
                    toastr.info(response.message);
                }
            }.bind(this),
            error: function (response) {
                //localStorage.clear();
                toastr.error("Server error occured");
                //browserHistory.push('/Login')
            }.bind(this)
        });
        //console.log(url) // Would see a path?
    }
    render() {
        let userName = localStorage.getItem('userName')
        let facePhoto;
        let preview = this.state.imgSrc;
        if (preview) {
            facePhoto = <img src={this.state.imgSrc} style={{ height: 60, width: 69, marginLeft: 50 }} />
        }
        else {
            facePhoto = <img src={require('../../images/user.png')} style={{ height: 60, width: 69, marginLeft: 50 }} />
        }
        return (
            <MuiThemeProvider>
            <div className="container-fluid dashboard_wrap">
                <div className="right_col dashboard" role="main">
                    <div className="dashboard_welcome">
                        <div className="text-center">
                            <h3>Welcome {userName}</h3>
                            <p>Click below button to start your loan process</p>
                            <div className="next_previous clearfix continue" style={{ paddingTop: 0, marginBottom: 70 }}>
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
                                        <h5 className="complition"><span>50% Completed</span></h5>
                                    </div>

                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div id="chart_plot_01" className="loan_app">
                                        <div className="status"><strong>Status:</strong> <span>Incomplete</span></div>
                                        <div><p>Complete and submit your loan application to receive a loan.</p>

                                        </div>
                                        <div className="documentstatus">
                                            <div className="loner_head">

                                            </div>
                                            <div className="progress_bar">
                                                <ul className="progress-indicator">
                                                    <li className="active"> <span className="bubble"></span> Incomplete <br />
                                                        <small>(active)</small> </li>
                                                    <li> <span className="bubble"></span> Processing </li>
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
                                                            <td>Employee info</td>
                                                            <td><span className="received"><i className="fa fa-times"></i> Incomplete</span></td>
                                                            <td><Link to="/empinfo"><button className="btn upload_btn" type="button" name="Edit">Edit</button></Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Relative info</td>
                                                            <td><span className="received"><i className="fa fa-times"></i> Incomplete</span></td>
                                                            <td><Link to="/relativeinfo"><button className="btn upload_btn" type="button" name="Edit">Edit</button></Link></td>
                                                        </tr>
                                                        {/*<tr>
                                                        <td>Family card</td>
                                                        <td><span className="received"><i className="fa fa-check"></i> Received</span> <span className="date">on 09/18/2017</span></td>
                                                        <td>None</td>
                                                    </tr>*/}
                                                        <tr>
                                                            <td>Face photo</td>
                                                            <td><span className="incomplete"><i className="fa fa-times"></i> Incomplete</span></td>
                                                            <td>
                                                                <span>
                                                                    <div className="upload_img"> {facePhoto} </div>
                                                                    <RaisedButton
                                                                        label="Choose an Image"
                                                                        labelPosition="before"
                                                                        style={styles.button}
                                                                        containerElement="label"
                                                                    >
                                                                        <input type="file" name="user[image]"
                                                                            ref="file"
                                                                            accept="image/*"
                                                                            onChange={this.handleChangeforImage} style={styles.exampleImageInput} />
                                                                    </RaisedButton>
                                                                    {/*<div className="upload_img"> {facePhoto} </div>
                                                                    <div className="fileupload_wrap">
                                                                        <input
                                                                            ref="file"
                                                                            type="file"
                                                                            name="user[image]"
                                                                            accept="image/*"
                                                                            onChange={this.handleChangeforImage} />
                                                                        <button className="btn upload_btn">Browse</button>
                                                                    </div>*/}
                                                                </span>
                                                            </td>
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
                                                            <td><span>
                                                                <div className="fileupload_wrap">
                                                                    <input
                                                                        ref="salary_slip"
                                                                        type="file"
                                                                        name="user[image]"
                                                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*"
                                                                    />
                                                                    <button className="btn upload_btn">Browse</button>
                                                                </div>
                                                            </span>
                                                            </td>
                                                        </tr>
                                                        {/*<tr>
                                                        <td>Employee</td>
                                                        <td><span className="incomplete">Incomplete</span></td>
                                                        <td>
                                                            <span>
                                                                <div >
                                                                    <input
                                                                        ref="certificate"
                                                                        type="file"
                                                                        name="user[image]"
                                                                        accept="docx/*"
                                                                        onChange={this.handleChange} />
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>*/}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="next_previous clearfix continue">
                                                <button type="button" className="btn btn-primary pull-right next_btn">Continue Loan process</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </MuiThemeProvider>
        )
    }
}
export default loanapplicationstatus1;