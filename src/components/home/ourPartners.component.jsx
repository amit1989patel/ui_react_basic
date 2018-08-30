import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import '../../css/customHomepage.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));

//contact presentational component
class ourPartners extends React.Component {
	render() {
		const locale = this.props.locale;
		return (
			<div >
				<div className="middle_content">
					<div className="about contact">
						<h3>{locale.ourpartners.heading}</h3>
						<div className="last_update"></div>
						<div className="row">
							<div className="col-sm-12 col-xs-12">
								<div className="partner_cont">
									<div className="row">
										<div className="col-sm-6 col-xs-12">
											<div className="partner_box">
												<a href="https://www.bca.co.id/"><div><h5>{locale.ourpartners.role1}</h5></div>
													<div><img src={require('../../images/partner11.png')} /></div></a>
											</div>
										</div>
										{/*<div className="col-sm-3 col-xs-12">
											<div className="partner_box">
												<a href="http://www.bankmandiri.co.id/"><div><h5>{locale.ourpartners.role2}</h5></div>
												<div><img src={require('../../images/partner2.png')}/></div></a>
											</div>
										</div>*/}
										<div className="col-sm-3 col-xs-12">
											<div className="partner_box">
												<a href="http://www.pefindo.com/"><div><h5>{locale.ourpartners.role3}</h5></div>
													<div><img src={require('../../images/partner3.png')} /></div></a>
											</div>
										</div>
										<div className="col-sm-3 col-xs-12">
											<div className="partner_box">
												<a href="http://www.hprplawyers.com/"><div><h5>{locale.ourpartners.role4}</h5></div>
													<div><img src={require('../../images/partner4.png')} /></div></a>
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
					<div className="scroll_section0 scroll_section about contact">
						<div className="text-center sec0head col-sm-12 col-xs-12">
						</div>
						<div className="clearfix">
							<div className="col-sm-12 col-xs-12">
								<div className="partner_cont">
									<div className="row">
										<div className="col-sm-6 col-xs-12">
											<div className="partner_box">
												<a href="https://www.bca.co.id/"><div><h5>{locale.ourpartners.role1}</h5></div>
													<div><img src={require('../../images/partner11.png')} /></div></a>
											</div>
										</div>
										{/*<div className="col-sm-3 col-xs-12">
											<div className="partner_box">
												<a href="http://www.bankmandiri.co.id/"><div><h5>{locale.ourpartners.role2}</h5></div>
												<div><img src={require('../../images/partner2.png')}/></div></a>
											</div>
										</div>*/}
										<div className="col-sm-3 col-xs-12">
											<div className="partner_box">
												<a href="http://www.pefindo.com/"><div><h5>{locale.ourpartners.role3}</h5></div>
													<div><img src={require('../../images/partner3.png')} /></div></a>
											</div>
										</div>
										<div className="col-sm-3 col-xs-12">
											<div className="partner_box">
												<a href="http://hprplawyers.com/"><div><h5>{locale.ourpartners.role4}</h5></div>
													<div><img src={require('../../images/partner4.png')} /></div></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="scroll_section4 scroll_section">
						<div className="sidebar_menu_sec clearfix" >
							<div className="">
								<div className="other_links">
									<div>
										<ul>
											<li><Link to="/faq">{locale.links.FAQ}</Link></li>
											<li><Link to="/ourteam">{locale.links.OurTeam}</Link></li>
											<li><Link to="/contactUs">{locale.links.Contact}</Link></li>
										</ul>
									</div>
									<div>
										<ul>
											<li><Link to="/privacy">{locale.layoutside.toplink8}</Link></li>
											<li><Link to="/terms">{locale.layoutside.toplink6}</Link></li>
											<li>&nbsp;</li>
											{/*<li><Link to="/terms">{locale.layoutside.toplink6}</Link></li>*/}
										</ul>
									</div>
									<div>
										<ul>
											{/*<li><a href="javascript:void()">{locale.layoutside.toplink7}</a></li>
											<li><Link to="/privacy">{locale.layoutside.toplink8}</Link></li>
											<li><Link to="/contactUs">{locale.layoutside.toplink9}</Link></li>*/}
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


export default ourPartners;