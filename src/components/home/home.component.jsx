import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import jQuery from 'jquery';
import * as script from '../../js/layout.js';
import '../../css/customHomepage.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));
import translate from 'counterpart';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            monthlyPayment: 0,
            totalPayment: 0,
        }
        this.incrementAmt = this.incrementAmt.bind(this);
        this.decrementAmt = this.decrementAmt.bind(this);
        this.decrementMon = this.decrementMon.bind(this);
        this.incrementMon = this.incrementMon.bind(this);
        this.incrementAmt_mob = this.incrementAmt_mob.bind(this);
        this.decrementAmt_mob = this.decrementAmt_mob.bind(this);
        this.decrementMon_mob = this.decrementMon_mob.bind(this);
        this.incrementMon_mob = this.incrementMon_mob.bind(this);
    }
    componentWillMount() {
        script.layout.init();
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.month).value = 12;
        ReactDOM.findDOMNode(this.refs.amount).value = 5;
        ReactDOM.findDOMNode(this.refs.month_mob).value = 12;
        ReactDOM.findDOMNode(this.refs.amount_mob).value = 5;
    }
    decrementAmt() {
        const currval = ReactDOM.findDOMNode(this.refs.amount).value;
        if (currval != "") {
            var dec = parseInt(currval);
            const changed = dec - 1;
            if (changed >= 5 && changed <=10) {
                ReactDOM.findDOMNode(this.refs.amount).value = changed;
                localStorage.setItem('tenor_amt',changed);
            }
        }
    }
    incrementAmt() {
        const currval = ReactDOM.findDOMNode(this.refs.amount).value;
        if (currval == "") {
            var inc = 5;
            const changed = inc + 1;
            ReactDOM.findDOMNode(this.refs.amount).value = changed;
            localStorage.setItem('tenor_amt',changed);
        }
        else if (currval != "" && currval <10) {
            var inc = parseInt(currval);
            const changed = inc + 1;
            ReactDOM.findDOMNode(this.refs.amount).value = changed;
            localStorage.setItem('tenor_amt',changed);
        }
    }
    decrementMon() {
        const currval = ReactDOM.findDOMNode(this.refs.month).value;
        if (currval != "") {
            var dec = parseInt(currval);
            const changed = dec - 6;
            if (changed >= 6 && changed <=18) {
                ReactDOM.findDOMNode(this.refs.month).value = changed;
                localStorage.setItem('tenor_mon',changed);
            }
        }
    }
    incrementMon() {
        const currval = ReactDOM.findDOMNode(this.refs.month).value;
        if (currval == "") {
            var inc = 12;
            const changed = inc + 6;
            ReactDOM.findDOMNode(this.refs.month).value = changed;
            localStorage.setItem('tenor_mon',changed);
        }
        else if(currval < 18) {
            var inc = parseInt(currval);
            const changed = inc + 6;
            ReactDOM.findDOMNode(this.refs.month).value = changed;
            localStorage.setItem('tenor_mon',changed);
        }
    }
    decrementAmt_mob() {
        const currval = ReactDOM.findDOMNode(this.refs.amount_mob).value;
        if (currval != "") {
            var dec = parseInt(currval);
            const changed = dec - 1;
            if (changed >= 5 && changed <=10) {
                ReactDOM.findDOMNode(this.refs.amount_mob).value = changed;
                localStorage.setItem('tenor_amt',changed);
            }
        }
    }
    incrementAmt_mob() {
        const currval = ReactDOM.findDOMNode(this.refs.amount_mob).value;
        if (currval == "") {
            var inc = 5;
            const changed = inc + 1;
            ReactDOM.findDOMNode(this.refs.amount_mob).value = changed;
            localStorage.setItem('tenor_amt',changed);
        }
        else if (currval != "" && currval <10) {
            var inc = parseInt(currval);
            const changed = inc + 1;
            ReactDOM.findDOMNode(this.refs.amount_mob).value = changed;
            localStorage.setItem('tenor_amt',changed);
        }
    }
    decrementMon_mob() {
        const currval = ReactDOM.findDOMNode(this.refs.month_mob).value;
        if (currval != "") {
            var dec = parseInt(currval);
            const changed = dec - 6;
            if (changed >= 6 && changed <=18) {
                ReactDOM.findDOMNode(this.refs.month_mob).value = changed;
                localStorage.setItem('tenor_mon',changed);
            }
        }
    }
    incrementMon_mob() {
        const currval = ReactDOM.findDOMNode(this.refs.month_mob).value;
        if (currval == "") {
            var inc = 12;
            const changed = inc + 6;
            ReactDOM.findDOMNode(this.refs.month_mob).value = changed;
            localStorage.setItem('tenor_mon',changed);
        }
        else if(currval < 18) {
            var inc = parseInt(currval);
            const changed = inc + 6;
            ReactDOM.findDOMNode(this.refs.month_mob).value = changed;
            localStorage.setItem('tenor_mon',changed);
        }
    }

    render() {
        const locale = this.props.locale;
        return (
            <div>
                <div className="middle_content">
                    <div className="commingsoon">
                        {/*<h2>{locale.Homepage.Homecontent}</h2>*/}
                        <div className="how_desktop text-left">
                            <div className="sec0head" >
                                <h3>{locale.Homepage.Home_Header} ?</h3>
                            </div>
                            <div className="sec_0 clearfix">
                                <div className="line1 clearfix">
                                    <div className="left_cont">{locale.Homepage.Borrow}</div>
                                    <div className="mid_cont"><a href="javascript:void(0)" onClick={this.decrementAmt}><i className="fa fa-minus-square-o" aria-hidden="true"></i></a>
                                        <input className="custom_query" ref="amount" type="text" maxLength={2} disabled={true}/>
                                        <a href="javascript:void(0)" onClick={this.incrementAmt}><i className="fa fa-plus-square-o" aria-hidden="true"></i></a> </div>
                                    <div className="right_cont">{locale.Homepage.Million}</div>
                                </div>
                                <div className="line2 clearfix">
                                    <div className="left_cont">{locale.Homepage.Repay}</div>
                                    <div className="mid_cont"><a href="javascript:void(0)" onClick={this.decrementMon}><i className="fa fa-minus-square-o" aria-hidden="true"></i></a>
                                        <input className="custom_query" ref="month" type="text" disabled={true} />
                                        <a href="javascript:void(0)" onClick={this.incrementMon}><i className="fa fa-plus-square-o" aria-hidden="true"></i></a> </div>
                                    <div className="right_cont">{locale.Homepage.Months} .</div>
                                </div>
                            </div>
                            <div className="get_started">
                                <Link to="/signUp"><button className="btn">{locale.Homepage.get_started}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="desktop_footer clearfix">
                    <div className="desktop_img">
                        <img src={require('../../images/foot_img.png')} />
                    </div>
                    <div className="foot_cont">
                        <p>{locale.layoutcontent.Footerdata}</p>
                    </div>
                </div>
                <div className="mobile_content">
                    <div className="mobile_ban"> <span>{locale.layoutside.Borrow}</span> </div>
                    <div className="scroll_section0 scroll_section">
                        <div className="text-center sec0head" >
                            <h5>{locale.Homepage.Home_Header} ?</h5>
                        </div>
                        <div className="sec_0 clearfix">
                            <div className="line1 clearfix">
                                <div className="left_cont">{locale.Homepage.Borrow}</div>
                                <div className="mid_cont"><a href="javascript:void(0)" onClick={this.decrementAmt_mob}><i className="fa fa-minus-square-o" aria-hidden="true"></i></a>
                                    <input type="text" ref="amount_mob" maxLength={2} />
                                    <a href="javascript:void(0)" onClick={this.incrementAmt_mob}><i className="fa fa-plus-square-o" aria-hidden="true"></i></a> </div>
                                <div className="right_cont">{locale.Homepage.Million}</div>
                            </div>
                            <div className="line2 clearfix">
                                <div className="left_cont">{locale.Homepage.Repay}</div>
                                <div className="mid_cont"><a href="javascript:void(0)" onClick={this.decrementMon_mob}><i className="fa fa-minus-square-o" aria-hidden="true"></i></a>
                                    <input type="text" ref="month_mob" />
                                    <a href="javascript:void(0)" onClick={this.incrementMon_mob}><i className="fa fa-plus-square-o" aria-hidden="true"></i></a> </div>
                                <div className="right_cont">{locale.Homepage.Months} .</div>
                            </div>
                        </div>
                        <div className="get_started">
                            <Link to="/signUp"><button className="btn">{locale.Homepage.get_started}</button></Link>
                        </div>
                        {/*<div className="commingsoonmob">
                            <h5>{locale.Homepage.Homecontent}</h5>
                        </div>*/}


                        {/*<div className="slide_arrow text-center"> <a href="#scroll_section1"><i className="fa fa-angle-down" aria-hidden="true"></i> </a> </div>*/}
                    </div>
                    <div className="scroll_section1 scroll_section" id="scroll_section1">
                        <div className="mobile_foot">
                            <div className="mobile_footer clearfix text-center">
                                <div className="desktop_img">
                                    <img src={require('../../images/foot_img.png')} />
                                </div>
                                <div className="foot_cont">
                                    <p>{locale.layoutcontent.Footerdata}</p>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar_menu_sec clearfix">
                            <div className="col-xs-12 clearfix">
                                <div className="side_icon"><img src={require('../../images/profit1mob.png')} /></div>
                                <div className="profit_content">
                                    <strong>{locale.layoutside.Convenient}</strong>
                                    <p>{locale.mobile.simple}</p>
                                </div>
                            </div>
                            <div className="col-xs-12 clearfix">
                                <div className="side_icon" ><img src={require('../../images/profit2mob.png')} /></div>
                                <div className="profit_content">
                                    <strong>{locale.layoutside.Collateral}</strong>
                                    <p>{locale.mobile.fast}</p>
                                </div>
                            </div>
                            <div className="col-xs-12 clearfix">
                                <div className="side_icon"><img src={require('../../images/profit3mob.png')} /></div>
                                <div className="profit_content">
                                    <strong>{locale.layoutside.Fast1}</strong>
                                    <p>{locale.mobile.secure}</p>
                                </div>
                            </div>
                            <div className="col-xs-12 clearfix">
                                <div className="side_icon" ><img src={require('../../images/profit4mob.png')} /></div>
                                <div className="profit_content">
                                    <strong>{locale.layoutside.Transparent}</strong>
                                    <p>{locale.mobile.childhood}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="scroll_section2 scroll_section">
                        <div className="text-center">
                            <div className="top_head">

                            </div>
                            <div className="top_links"> </div>
                        </div>
                        <div className="sidebar_menu_sec clearfix">
                            <div className="text-center">
                                <div id="myCarouselllll" className="carousel slide" data-ride="carousel">
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
                                    <div className="texti_control"> <a className="left carousel-control" href="#myCarouselllll" role="button" data-slide="prev"> <img src={require('../../images/leftarrowgray.png')} /> </a> <a className="right carousel-control" href="#myCarouselllll" role="button" data-slide="next"> <img src={require('../../images/rightarrowgray.png')} /> </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll_section2 scroll_section  section_partner">
                        <div className="text-center">
                            <div className="top_head">
                                <h3>{locale.ourpartners.heading}</h3>
                            </div>

                        </div>
                        <div className="sidebar_menu_sec clearfix" >
                            <div className="text-center">
                                <div id="myCarouselll" className="carousel slide partner_slide" data-ride="carousel">
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
                                    <div className="texti_control"> <a className="left carousel-control" href="#myCarouselll" role="button" data-slide="prev"> <img src={require('../../images/leftarrowgray.png')} /> </a> <a className="right carousel-control" href="#myCarouselll" role="button" data-slide="next"> <img src={require('../../images/rightarrowgray.png')} /> </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll_section4 scroll_section">
                        <div className="sidebar_menu_sec clearfix">
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
                </div>
            </div>

        );
    }
}


export default Home;