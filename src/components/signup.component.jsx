import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from '../../tools/apiConfig';
import * as signUpActions from '../actions/signUpActions';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import ReactDOM from 'react-dom';
import counterpart from 'counterpart';
import translate from 'counterpart';
import ProgressBar from 'react-progress-bar-plus';
import Translate from 'react-translate-component';
counterpart.registerTranslations('en', require('../locales/en'));
counterpart.registerTranslations('id', require('../locales/id'));

class SignUp extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      percent: -1,
      intervalTime: 200,
      signup: []
    }
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  componentDidMount() {
    this.setPercent(100);
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
    let longitude = localStorage.getItem('lng');
    let latitude = localStorage.getItem('lat');
    let accuracy = localStorage.getItem('accuracy');
    if (longitude && latitude) {
      successData = {
        googleId: successData.getId(),
        imageUrl: successData.getImageUrl(),
        email: successData.getEmail(),
        name: successData.getName(),
        client_id: successData.getId(),
        latitude: latitude,
        longtitude: longitude,
        accuracy:accuracy,
        provider: "google",
        social_data: response
      }
      this.props.actions.signUpUser(successData);
    }
    else {
      successData = {
        googleId: successData.getId(),
        imageUrl: successData.getImageUrl(),
        email: successData.getEmail(),
        name: successData.getName(),
        client_id: successData.getId(),
        provider: "google",
        social_data: response
      }
      this.props.actions.signUpUser(successData);
    }
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
      url: api.SIGNUP_USER,
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
      else {
        toastr.info(response.message)
      }
      // if(response.status)
    }).fail(function (response) {
      toastr.error("Server error")
    })
  }
  responseFacebook(response) {
    let longitude = localStorage.getItem('lng');
    let latitude = localStorage.getItem('lat');
    let accuracy = localStorage.getItem('accuracy');
    if (response.status != undefined || response.id) {
      if (longitude && latitude) {
        var data = {
          facebookid: response.userID,
          imageUrl: response.picture.data.url,
          email: response.email,
          friends: response.friends.data,
          name: response.name,
          client_id: response.id,
          latitude: latitude,
          longtitude: longitude,
          accuracy: accuracy,
          social_data: response,
          provider: "facebook"
        }
        this.saveFbDetails(data);
      }
      else {
        var data = {
          facebookid: response.userID,
          imageUrl: response.picture.data.url,
          email: response.email,
          friends: response.friends.data,
          name: response.name,
          client_id: response.id,
          social_data: response,
          provider: "facebook"
        }
        this.saveFbDetails(data);
      }
      if (localStorage.userImage || localStorage.userName) {
        localStorage.clear();
      }
      localStorage.setItem('userImage', response.picture.data.url)
      localStorage.setItem('userName', response.name)
    }
    // browserHistory.push('/wizard')
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
                          <div><h4>{locale.signup.continue}</h4></div>
                          <div className="signup_link">
                            <span>{locale.signup.account} <Link to="/Login">Login</Link></span>
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
                              fields="name,email,picture,friends"
                              scope="public_profile,email,user_friends"
                              callback={this.responseFacebook.bind(this)}
                              cssClass='loginBtn loginBtn--facebook'
                              disableMobileRedirect={true}
                              textButton={locale.signup.facebook}
                            />
                            {/*<button type="button" className="loginBtn loginBtn--facebook"> Login with Facebook </button>*/}
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <GoogleLogin
                              clientId=''
                              onSuccess={this.responseGoogle}
                              offline={false}
                              approvalPrompt="force"
                              // disabled
                              // prompt="consent"
                              className='loginBtn loginBtn--google'
                            // style={{ color: 'red' }}
                            >
                              <span>{locale.signup.google} </span>
                            </GoogleLogin>
                            {/*<button type="button" className="loginBtn loginBtn--google"> Login with Google </button>*/}
                          </div>
                        </div>
                        <form role="form">
                          <div className="next_previous clearfix continue" >
                          </div>
                          <div className="terms">
                            <div>
                              {locale.signup.acceptance} <br /><Link to="/terms">{locale.signup.terms}</Link> {locale.signup.acceptance1} <Link to="/privacy">{locale.signup.privacy}</Link> {locale.signup.acceptance2}
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
    signup: state.signup
  };
}
//this tells what action should expose on props
//bindActionCreators is used to bind all actions at once
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signUpActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);