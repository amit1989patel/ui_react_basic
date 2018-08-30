import React from 'react';
import { Link } from 'react-router';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import counterpart from 'counterpart';
import translate from 'counterpart';
import Translate from 'react-translate-component';
import * as validation from '../../js/custom';
import ProgressBar from 'react-progress-bar-plus';
counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));
class topnav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percent: -1,
      intervalTime: 200,
      locale: [],
      imageUrl: localStorage.getItem('userImage')
    }
    this.setPercent = this.setPercent.bind(this);
    this.start = this.start.bind(this);
    this.onError = this.onError.bind(this);
  }
  logout() {
    localStorage.clear();
    toastr.success('You have signed out');
    browserHistory.push('/Login')
  }
  componentDidMount() {
    this.setPercent(100);
     const locale = translate('wizards');
    this.setState({
      locale: locale
    })
  }
  componentWillMount() {
    const locale = translate('wizards');
    this.setState({
      locale: locale
    })
  }
  handleChange(e) {
    counterpart.setLocale(e.target.value);
    const locale = translate('wizards');
    this.setState({
      locale: locale
    })
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
  onError(){
    debugger
    const imgSrc = require('../../images/user.png')
    this.setState({
      imageUrl : imgSrc
    })
  }
  render() {
    const userImage = localStorage.getItem('userImage');
    const userName = localStorage.getItem('userName');
    return (
      <div>
        <div className="top_nav">
          <div className="nav_menu">
            <nav>
              <div className="navbar nav_title" > <Link to="/wizard" className="site_title">
                <img src={require('../../images/danablue.png')} /> <span>DanaKita</span></Link> </div>
              <ul className="nav navbar-nav navbar-right">
                <li className=""> <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <img src={this.state.imageUrl} onError={this.onError}/>{userName}
                  <span className=" fa fa-angle-down"></span> </a>
                  <ul className="dropdown-menu dropdown-usermenu pull-right">
                    <li><Link to="/userProfile"> Profile</Link></li>
                    <li><a href="javascript:;">Help</a></li>
                    <li><a onClick={this.logout}> <i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <ProgressBar percent={this.state.percent}
            autoIncrement={true}
            intervalTime={this.state.intervalTime}
            spinner={false} />
          {React.cloneElement(this.props.children, { percent: this.state.percent, start: this.start, setPercent: this.setPercent, locale: this.state.locale })}
        </div>
      </div>
    );
  }
}
export default topnav;