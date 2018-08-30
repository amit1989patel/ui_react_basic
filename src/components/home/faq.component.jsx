import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import '../../css/customHomepage.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));

class faq extends React.Component {

    render() {
        const locale = this.props.locale;

        return (
            <div className="faq_noscroll">
                <div className="middle_content">
                    <div className="about contact faq">
                        <div className="mid_con">
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-xs-12">
                                <div className="faq_wrap">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a data-toggle="tab" href="#menu2">{locale.FAQpage.Faqtab2}</a></li>
                                        <li><a data-toggle="tab" href="#menu3">{locale.FAQpage.Faqtab3}</a></li>
                                        <li ><a data-toggle="tab" href="#menu1">{locale.FAQpage.Faqtab1}</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="menu1" className="tab-pane fade ">

                                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingOne">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                                {locale.FAQpage.Faqtab1header}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab1content} <p>{locale.FAQpage.Faqtab1content1}</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="menu2" className="tab-pane fade in active">
                                            <div className="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingOne1">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                                                                {locale.FAQpage.Faqtab2header1}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne1">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content1}</div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingTwo">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                {locale.FAQpage.Faqtab2header2}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content2}
                                                            <div className="intend">
                                                                {locale.FAQpage.Faqtab2content21} <Link to="/signUp">{locale.FAQpage.Faqtab2content212}</Link>
                                                                <br />{locale.FAQpage.Faqtab2content22}
                                                                <br />{locale.FAQpage.Faqtab2content23}
                                                                <br />{locale.FAQpage.Faqtab2content24}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingThree">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                {locale.FAQpage.Faqtab2header3}
                                                            </a>
                                                        </h4>

                                                    </div>
                                                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content3}
                                                            <div className="intend">
                                                                {locale.FAQpage.Faqtab2content31}<br />
                                                                {locale.FAQpage.Faqtab2content32}<br />
                                                                {locale.FAQpage.Faqtab2content33}<br />
                                                                {locale.FAQpage.Faqtab2content34}<br />
                                                                {locale.FAQpage.Faqtab2content35}<br />
                                                                {locale.FAQpage.Faqtab2content36}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingfour">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                                {locale.FAQpage.Faqtab2header4}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapsefour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content4}
                                                            <div className="intend">
                                                                {locale.FAQpage.Faqtab2content41} <br />
                                                                {locale.FAQpage.Faqtab2content42} <br />
                                                                {locale.FAQpage.Faqtab2content43} <br />
                                                                {locale.FAQpage.Faqtab2content44}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingfive">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                                {locale.FAQpage.Faqtab2header5}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapsefive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfive">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content5}<br/>{locale.FAQpage.Faqtab2content51}<br/>{locale.FAQpage.Faqtab2content52}<p>{locale.FAQpage.Faqtab2content53}</p></div>
                                                    </div>
                                                </div>

                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingsix">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                                {locale.FAQpage.Faqtab2header6}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapsesix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingsix">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content6}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="menu3" className="tab-pane fade">
                                            <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingOne2">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne2" aria-expanded="false" aria-controls="collapseOne2">
                                                                {locale.FAQpage.Faqtab3header1}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne2">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab3content1} <a href="mailto:webmaster@danakita.com" target="_top" >{locale.FAQpage.Faqtab3content11}</a>. </div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingTwo2">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                                                {locale.FAQpage.Faqtab3header2}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseTwo2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo2">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab3content2}<p>{locale.FAQpage.Faqtab3content22}</p></div>
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
                    <div className="scroll_section0 scroll_section about contact faq_mob">
                        <div className="clearfix contact_mob text-center">
                            <div className="col-sm-12 col-xs-12">
                                <div className="faq_wrap">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a data-toggle="tab" href="#menu22">{locale.FAQpage.Faqtab2}</a></li>
                                        <li><a data-toggle="tab" href="#menu33">{locale.FAQpage.Faqtab3}</a></li>
                                        <li ><a data-toggle="tab" href="#menu11">{locale.FAQpage.Faqtab1}</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="menu11" className="tab-pane fade ">
                                            <div className="panel-group" id="accordion00" role="tablist" aria-multiselectable="true">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingOnee">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion00" href="#collapseOnee" aria-expanded="false" aria-controls="collapseOnee">
                                                                {locale.FAQpage.Faqtab1header}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOnee" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOnee">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab1content} <p>{locale.FAQpage.Faqtab1content1}</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="menu22" className="tab-pane fade in active">
                                            <div className="panel-group" id="accordion11" role="tablist" aria-multiselectable="true">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingOne11">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion11" href="#collapseOne11" aria-expanded="false" aria-controls="collapseOne11">
                                                                {locale.FAQpage.Faqtab2header1}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne11" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne1">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content1}</div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingTwoo">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion11" href="#collapseTwoo" aria-expanded="false" aria-controls="collapseTwoo">
                                                                {locale.FAQpage.Faqtab2header2}
                                                            </a>
                                                        </h4>

                                                    </div>
                                                    <div id="collapseTwoo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwoo">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content2}
                                                            <div className="intend">
                                                                {locale.FAQpage.Faqtab2content21} <Link to="/signUp">{locale.FAQpage.Faqtab2content212}</Link>
                                                                <br />{locale.FAQpage.Faqtab2content22}
                                                                <br />{locale.FAQpage.Faqtab2content23}
                                                                <br />{locale.FAQpage.Faqtab2content24}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingThreee">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion11" href="#collapseThreee" aria-expanded="false" aria-controls="collapseThreee">
                                                                {locale.FAQpage.Faqtab2header3}
                                                            </a>
                                                        </h4>

                                                    </div>
                                                    <div id="collapseThreee" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThreee">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content3}
                                                            <div className="intend">
                                                                {locale.FAQpage.Faqtab2content31}<br />
                                                                {locale.FAQpage.Faqtab2content32}<br />
                                                                {locale.FAQpage.Faqtab2content33}<br />
                                                                {locale.FAQpage.Faqtab2content34}<br />
                                                                {locale.FAQpage.Faqtab2content35}<br />
                                                                {locale.FAQpage.Faqtab2content36}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingfourr">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion11" href="#collapsefourr" aria-expanded="false" aria-controls="collapsefourr">
                                                                {locale.FAQpage.Faqtab2header4}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapsefourr" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfourr">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content4}
                                                            <div className="intend">
                                                                {locale.FAQpage.Faqtab2content41} <br />
                                                                {locale.FAQpage.Faqtab2content42} <br />
                                                                {locale.FAQpage.Faqtab2content43} <br />
                                                                {locale.FAQpage.Faqtab2content44}
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingfivee">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion11" href="#collapsefivee" aria-expanded="false" aria-controls="collapsefivee">
                                                                {locale.FAQpage.Faqtab2header5}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapsefivee" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfivee">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content5}<br/>{locale.FAQpage.Faqtab2content51}<br/>{locale.FAQpage.Faqtab2content52}<p>{locale.FAQpage.Faqtab2content53}</p></div>
                                                    </div>
                                                </div>

                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingsixx">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion11" href="#collapsesixx" aria-expanded="false" aria-controls="collapsesix">
                                                                {locale.FAQpage.Faqtab2header6}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapsesixx" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingsixx">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab2content6}</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div id="menu33" className="tab-pane fade">
                                            <div className="panel-group" id="accordion22" role="tablist" aria-multiselectable="true">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingOne22">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion22" href="#collapseOne22" aria-expanded="false" aria-controls="collapseOne22">
                                                                {locale.FAQpage.Faqtab3header1}
                                                            </a>
                                                        </h4>

                                                    </div>
                                                    <div id="collapseOne22" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne22">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab3content1} <a href="mailto:webmaster@danakita.com" target="_top" >{locale.FAQpage.Faqtab3content11}</a>.</div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingTwo22">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion22" href="#collapseTwo22" aria-expanded="false" aria-controls="collapseTwo22">
                                                                {locale.FAQpage.Faqtab3header2}
                                                            </a>
                                                        </h4>

                                                    </div>
                                                    <div id="collapseTwo22" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo22">
                                                        <div className="panel-body">{locale.FAQpage.Faqtab3content2}<p>{locale.FAQpage.Faqtab3content22}</p></div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

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


export default faq;