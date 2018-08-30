import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';
import Auth from '../modules/auth';
import { connect } from 'react-redux';
import * as api from '../../tools/apiConfig';
import * as loginActions from '../actions/loginActions';
import { bindActionCreators } from 'redux';
import * as validation from '../js/custom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import ReactDOM from 'react-dom';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percent: -1,
      intervalTime: 200,
      login: {},
      user: {
        login_email: '',
        login_password: ''
      },
    }
    this.responseGoogle = this.responseGoogle.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }
  componentDidMount() {
    validation.FormValidationMd.init();
    //localStorage.clear();
    // this.setPercent(100);
  }

  setPercent(percent) {
    this.setState({
      percent: percent
    });
  }
  start() {
    this.setState({
      percent: 0,
      intervalTime: (Math.random() * 1000)
    });
  }
  responseGoogle(response) {
    var successData = response.getBasicProfile();
    let lat = localStorage.getItem('lat');
    let lng = localStorage.getItem('lng');
    let accuracy = localStorage.getItem('accuracy');
    if (lat && lng && accuracy) {
      successData = {
        googleId: successData.getId(),
        imageUrl: successData.getImageUrl(),
        email: successData.getEmail(),
        name: successData.getName(),
        client_id: successData.getId(),
        latitude: lat,
        longtitude: lng,
        accuracy: accuracy,
        provider: "google"
      }
      this.props.actions.loginUser(successData);
    }
    else {
      successData = {
        googleId: successData.getId(),
        imageUrl: successData.getImageUrl(),
        email: successData.getEmail(),
        name: successData.getName(),
        client_id: successData.getId(),
        provider: "google"
      }
      this.props.actions.loginUser(successData);
    }
    // console.log(response);
    // if (localStorage.userImage || localStorage.userName) {
    //   localStorage.clear();
    // }
    localStorage.setItem('userImage', successData.imageUrl)
    localStorage.setItem('userName', successData.name)
  }
  errorGoogleLogin(response) {
    console.log(response.error)
  }
  clickHandlerFB() {
    FB.AppEvents.logEvent("logged in with facebook");
  }
  saveFbDetails(data) {
    $.ajax({
      type: 'POST',
      url: api.LOGIN_USER,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data)
    }).done(function (response) {
      if (response.status == "INVALID") {
        browserHistory.push('/signup')
        toastr.warning(response.message);
      }
      else if (response.status == "OK") {
        // save the token and authenticate the user along with some neccessary parameters
        Auth.authenticateUser(response.data);
        if (response.data.user.is_profile_completed == true) {
          browserHistory.push('/loanapplication_status_1')
        }
        else {
          browserHistory.push('/wizard')
        }
        toastr.success('Logged in successfully');
      }
      // if(response.status)
    }).fail(function (response) {
      toastr.error("Server error")
    })
  }
  responseFacebook(response) {
    //console.log(response)
    let lat = localStorage.getItem('lat');
    let lng = localStorage.getItem('lng');
    let accuracy = localStorage.getItem('accuracy');
    if (response.status != undefined || response.id) {
      if (location != null) {
        var data = {
          facebookid: response.userID,
          imageUrl: response.picture.data.url,
          email: response.email,
          name: response.name,
          client_id: response.id,
          friends: response.friends.data,
          latitude: lat,
          longtitude: lng,
          accuracy: accuracy,
          provider: "facebook"
        }
        this.saveFbDetails(data);
      }
      else {
        var data = {
          facebookid: response.userID,
          imageUrl: response.picture.data.url,
          email: response.email,
          name: response.name,
          client_id: response.id,
          friends: response.friends.data,
          provider: "facebook"
        }
        this.saveFbDetails(data);
        FB.AppEvents.logEvent("Logged in to the app");
      }
      // if (localStorage.userImage || localStorage.userName) {
      //   localStorage.clear();
      // }
      localStorage.setItem('userImage', response.picture.data.url)
      localStorage.setItem('userName', response.name)
    }
    // browserHistory.push('/wizard')
  }
  loginUser(data) {
    $.ajax({
      type: 'POST',
      url: api.LENDER_LOGIN,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (response) {
        if (response.status == 'OK') {
          var token = response.data.token;
          var id = response.data.user.id;
          localStorage.setItem('token', token);
          localStorage.setItem('role', 'lender')
          localStorage.setItem('id', id);
          browserHistory.push('/dashboard')
        }
        else if (response.status == 'INTERNAL_ERROR') {
          toastr.error('Some internal error occured.')
        }
        else {
          toastr.error(response.message);
          browserHistory.push('/Login');
        }
      }.bind(this),
      error: function (response) {
        localStorage.clear();
        toastr.error("Server error occured");
      }.bind(this)
    });
  }
  submitHandler(e) {
    var form = $("#login_form");
    if (form.valid()) {
      var data = {
        username: this.state.user.login_email,
        password: this.state.user.login_password
      }
      this.loginUser(data);
    }
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user
    });
  }
  render() {
    const locale = this.props.locale;
    return (
      <div className="nav-md loan_wizard login_page">
        <div className="body">
          <div className="main_container">
            <div className="top_nav">
              <div className="nav_menu">
                <nav>
                  <div className="navbar nav_title" > <Link to="/" className="site_title">
                    <img src={require('../images/danablue.png')} /> <span>DanaKita</span></Link> </div>
                </nav>
              </div>
            </div>
            <div className="container">
              <ProgressBar percent={this.state.percent}
                autoIncrement={true}
                intervalTime={this.state.intervalTime}
                spinner={false} />
              <div className="right_col" role="main">
                <div className="row login_wrap">
                  <div className="col-sm-12 col-xs-12">
                    <div className="main ">
                      <div className="login_white">
                        <div className="text-center login_txt">
                          <div><h4>{locale.signin.login}</h4></div>
                          <div className="signup_link" >
                            <span>{locale.signin.nillaccount} <Link to="/signUp">{locale.signin.signup}</Link></span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <FacebookLogin
                              appId=""
                              cookie={true}
                              xfbml={true}
                              version='2.8'
                              autoLoad={false}
                              fields="name,email,friends,picture"
                              scope="public_profile,email,user_friends"
                              callback={this.responseFacebook.bind(this)}
                              disableMobileRedirect={true}
                              cssClass='loginBtn loginBtn--facebook'
                              textButton={locale.signin.facebook}
                            />
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <GoogleLogin
                              clientId=''
                              offline={false}
                              onSuccess={this.responseGoogle.bind(this)}
                              onFailure={this.errorGoogleLogin.bind(this)}
                              approvalPrompt="force"
                              //disabled
                              prompt="consent"
                              className='loginBtn loginBtn--google'
                            // style={{ color: 'red' }}
                            >
                              <span>{locale.signin.google}</span>
                            </GoogleLogin>
                            {/*<button type="button" className="loginBtn loginBtn--google"> Login with Google </button>*/}
                          </div>
                        </div>
                        <div className="login-or">
                          <hr className="hr-or" />
                          <span className="span-or">{locale.signin.or}</span>
                        </div>
                        <form id="login_form">
                          <div className="form-group">
                            <input type="text" ref="email" onChange={this.changeUser} name="login_email" maxLength={100} className="form-control" id="inputUsernameEmail" placeholder={locale.signin.placeholder1} />
                          </div>
                          <div className="form-group">
                            <input type="password" ref="password" onChange={this.changeUser} maxLength={45} name="login_password" className="form-control" id="inputPassword" placeholder={locale.signin.placeholder2} />
                          </div>
                          <div className="clearfix forgot_remember">
                            <div className="pull-right"><Link to="/forgotPassword">{locale.signin.forgetpassword}</Link></div>
                            <div className="checkbox pull-left">
                              <label><input type="checkbox" defaultChecked={true} /> {locale.signin.remember}</label>
                            </div>
                          </div>
                          <div className="next_previous clearfix continue" >
                            <button type="button" onClick={(e) => this.submitHandler(e)} className="btn btn-primary next_btn ">{locale.signin.login1}</button>
                          </div>
                          <div className="terms">
                            <div>
                              {locale.signin.acceptance}<br /><Link to="/terms">{locale.signin.terms}</Link>{locale.signin.acceptance1}<Link to="/privacy">{locale.signin.privacy}</Link>{locale.signin.acceptance2}
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
    );
  }
}
//this tells what state should expose on props
function mapStateToProps(state, ownProps) {
  return {
    login: state.login
  };
}
//this tells what action should expose on props
//bindActionCreators is used to bind all actions at once
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);