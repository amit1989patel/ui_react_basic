import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import * as script from '../../js/layout.js'
import '../../css/customHomepage.css';
import '../../css/customHomepageResponsive.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import translate from 'counterpart';

counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));

class layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: [],
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.defaultLocaleCheck = this.defaultLocaleCheck.bind(this);
  }
  componentDidMount() {
    script.layout.init();
    this.defaultLocaleCheck();
  }
  componentWillMount() {
    const locale = translate('layout');
    this.setState({
      locale: locale
    })
    const loc = counterpart.getLocale();
    var userLang = navigator.language || navigator.userLanguage;
    //alert ("The language is: " + userLang);
    if (userLang == 'id') {
      this.setState({
        checked: true
      })
    }
    else {
      this.setState({
        checked: false
      })
    }
    this.defaultLocaleCheck();
  }
  defaultLocaleCheck() {
    if (this.state.checked == false) {
      var loc = "en"
      counterpart.setLocale(loc);
      const locale = translate('layout');
      this.setState({
        locale: locale,
      })
    }
    else if (this.state.checked == true) {
      var loc = "id";
      counterpart.setLocale(loc);
      const locale = translate('layout');
      this.setState({
        locale: locale,
      })
    }
  }
  handleChange(e) {
    if (e.target.checked == false) {
      var loc = "en"
      counterpart.setLocale(loc);
      const locale = translate('layout');
      this.setState({
        locale: locale,
        checked: true
      })
    }
    else if (e.target.checked == true) {
      var loc = "id";
      counterpart.setLocale(loc);
      const locale = translate('layout');
      this.setState({
        locale: locale,
        checked: false
      })
    }
  }
  render() {
    const locale = this.state.locale;
    return (
      <div className="container-fluid home_layout">
        <div className="row">
          <div className="sidebar_home">
            <div className="scroll_section1  scroll_section">
              <div className="text-center">
                <div>
                  <img src={require('../../images/logo.png')} />
                </div>
                <div className="top_links">
                  <span>{locale.layoutside.Borrow} </span>
                </div>
              </div>
              <div className="sidebar_menu_sec clearfix" >
                <div className="col-sm-6 col-xs-12 text-center">
                  <div className="side_icon">
                    <img src={require('../../images/profit1.png')} />
                  </div>
                  <strong>{locale.layoutside.Convenient}</strong>
                  <p>{locale.mobile.simple}</p>
                </div>
                <div className="col-sm-6 col-xs-12 text-center">
                  <div className="side_icon"> <img src={require('../../images/profit2.png')} /></div>
                  <strong>{locale.layoutside.Collateral}</strong>
                  <p>{locale.mobile.fast}</p>
                </div>
                <div className="col-sm-6 col-xs-12 text-center">
                  <div className="side_icon"> <img src={require('../../images/profit3.png')} /></div>
                  <strong>{locale.layoutside.Fast1}</strong>
                  <p>{locale.mobile.secure}</p>
                </div>
                <div className="col-sm-6 col-xs-12 text-center">
                  <div className="side_icon"> <img src={require('../../images/profit4.png')} /></div>
                  <strong>{locale.layoutside.Transparent}</strong>
                  <p>{locale.mobile.childhood}</p>
                </div>
              </div>
            </div>
            <div className="scroll_section2 scroll_section">
              <div className="text-center">
                <div className="top_head">
                </div>
                <div className="top_links"> </div>
              </div>
              <div className="sidebar_menu_sec clearfix" >
                <div className="text-center">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                      <div className="item active">
                        <div className="user_image"><img src={require('../../images/test1.jpg')} className="img-circle" /></div>
                        <div className="user_review">
                          <h5>{locale.layoutside.scrolldata1}</h5>
                        </div>
                        <div className="user_review_cont"> <i>{locale.layoutside.scrolldata2}</i> </div>
                        <div className="user_name"><span>{locale.layoutside.scrolldata3}</span><span className="occupation">{locale.layoutside.scrolldata4}</span></div>
                      </div>
                      <div className="item">
                        <div className="user_image"><img src={require('../../images/test2.jpg')} className="img-circle" /></div>
                        <div className="user_review">
                          <h5>{locale.layoutside.scrolldata5}</h5>
                        </div>
                        <div className="user_review_cont"> <i>{locale.layoutside.scrolldata6}</i> </div>
                        <div className="user_name"><span>{locale.layoutside.scrolldata7}</span><span className="occupation">{locale.layoutside.scrolldata8}</span></div>
                      </div>
                      <div className="item">
                        <div className="user_image"><img src={require('../../images/test3.jpg')} className="img-circle" /></div>
                        <div className="user_review">
                          <h5>{locale.layoutside.scrolldata9}</h5>
                        </div>
                        <div className="user_review_cont"> <i>{locale.layoutside.scrolldata10}</i> </div>
                        <div className="user_name"><span>{locale.layoutside.scrolldata11}</span><span className="occupation">{locale.layoutside.scrolldata12}</span></div>
                      </div>
                    </div>
                    <div className="texti_control"> <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> <img src={require('../../images/leftarrow.png')} /> </a> <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next"> <img src={require('../../images/rightarrow.png')} /> </a> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll_section2 scroll_section">
              <div className="text-center">
                <div className="top_head">
                  <h3>{locale.ourpartners.heading}</h3>
                </div>
                <div className="top_links"> </div>
              </div>
              <div className="sidebar_menu_sec clearfix" >
                <div className="text-center">
                  <div id="myCarousell" className="carousel slide partner_slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                      <div className="item active">
                        <a href="https://www.bca.co.id/" target="_blank"><div className="user_image"><img src={require('../../images/partner1.png')} /></div>
                          <div className="user_review">
                            <h5>{locale.ourpartners.role1}</h5>
                          </div></a>
                      </div>
                      <div className="item">
                        <a href="http://www.bankmandiri.co.id/" target="_blank" ><div className="user_image"><img src={require('../../images/partner2.png')} /></div>
                          <div className="user_review">
                            <h5>{locale.ourpartners.role2}</h5>
                          </div></a>
                      </div>
                      <div className="item">
                        <a href="http://www.pefindo.com/" target="_blank"><div className="user_image"><img src={require('../../images/partner3.png')} /></div>
                          <div className="user_review">
                            <h5>{locale.ourpartners.role3}</h5>
                          </div></a>
                      </div>
                      <div className="item">
                        <a href="http://hprplawyers.com/" target="_blank"><div className="user_image"><img src={require('../../images/partner4.png')} /></div>
                          <div className="user_review">
                            <h5>{locale.ourpartners.role4}</h5>
                          </div></a>
                      </div>
                    </div>
                    <div className="texti_control"> <a className="left carousel-control" href="#myCarousell" role="button" data-slide="prev"> <img src={require('../../images/leftarrow.png')} /> </a> <a className="right carousel-control" href="#myCarousell" role="button" data-slide="next"> <img src={require('../../images/rightarrow.png')} /> </a> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll_section4 scroll_section">
              <div className="text-center">
                <div className="top_head"> </div>
                <div className="top_links"> </div>
              </div>
              <div className="sidebar_menu_sec clearfix" >
                <div className="">
                  <div className="other_links">
                    <div>
                      <ul>
                        <li><Link to="/faq">{locale.links.FAQ}</Link></li>
                        <li><Link to="/ourteam">{locale.links.OurTeam}</Link></li>
                        <li><Link to="/contactUs">{locale.links.Contact}</Link></li>
                        <li><Link to="/privacy">{locale.layoutside.toplink8}</Link></li>
                        <li><Link to="/terms">{locale.layoutside.toplink6}</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="social_follow">
                    <div className="top_head">
                      <h5>{locale.layoutside.toplinkheader}</h5>
                    </div>
                    <div className="social_links">
                      <ul>
                        <li><a href="https://www.facebook.com/danakitadata/" target="_blank"><img src={require('../../images/fb.png')} /></a></li>
                        <li><a href="https://www.linkedin.com/company/danakita" target="_blank"><img src={require('../../images/linkedin.png')} /></a></li>
                        <li><a href="https://twitter.com/danakitadata" target="_blank"><img src={require('../../images/twitter.png')} /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="downarrow"><a href="javascript:void(0)"><i className="fa fa-angle-down" aria-hidden="true"></i></a></div>
            <div className="downup"><a href="javascript:void(0)"><i className="fa fa-angle-up" aria-hidden="true"></i></a></div>*/}
          </div>
          <div className="right_panel">
            <div className="lang">
              <div className="language">
                {/*<select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
              <option value="en">English</option>
              <option value="id">Indonasian</option>
          </select>*/}
                <label className="switch" defaultValue={counterpart.getLocale()} >
                  <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handleChange} />
                  <div className="slider round"><span value="id">ID</span> <span value="en">EN</span></div>
                </label>
              </div>
              <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="197">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand " href="#"><img src={require('../../images/dana.png')} /> <span>DanaKita</span></a>
                  </div>
                  <div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                      <ul className="nav navbar-nav">
                        <li><Link to="/">{locale.links.Home}</Link></li>
                        {/*<li><Link to="/about">{locale.links.About}</Link></li>*/}
                        <li><Link to="/faq">{locale.links.FAQ}</Link></li>
                        <li><Link to="/ourteam">{locale.links.OurTeam}</Link></li>
                        <li><Link to="/contactUs">{locale.links.Contact}</Link></li>
                        <li><Link to="/Login" className="button">{locale.links.Signin}</Link></li>
                        {/*<li><Link to="/signUp" className="button">{locale.links.Signup}</Link></li>*/}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="desk_cont">
              {React.cloneElement(this.props.children, { locale: this.state.locale })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default layout;