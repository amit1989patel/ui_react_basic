import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import '../../css/customHomepage.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));

//contact presentational component
class ourTeam extends React.Component {
	render() {
		const locale = this.props.locale;
		var style = {
			height: 'auto',
			margin: 'auto'
		}
		return (
			<div >
				<div className="middle_content">
					<div className="about contact">
						<div className="last_update">
						</div>
						<div className="row">
							<div className="col-sm-12 col-xs-12">
								<div className="team_cont">
									<div className="row">
										<div className="col-sm-4 col-xs-12">
											<div className="team_box">
												<div className="team1_img"></div>
												<div className="team_name"><div>{locale.ourteam.name1}</div><div className="designation">{locale.ourteam.position1}</div></div>
												<div className="bio">
													{locale.ourteam.bio1}
												</div>
												<div className="social">
													<div className="social_links">
														<ul>
															<li><a href="https://www.linkedin.com/in/praknarayanan/" target="_blank"><img src={require('../../images/linkedin.png')} /></a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-4 col-xs-12">
											<div className="team_box">
												<div className="team2_img"></div>
												<div className="team_name"><div>{locale.ourteam.name2}</div><div className="designation">{locale.ourteam.position2}</div></div>
												<div className="bio">
													{locale.ourteam.bio2}
												</div>
												<div className="social">
													<div className="social_links">
														<ul>
															<li><a href="https://www.linkedin.com/in/david-chiang-96a37712/" target="_blank"><img src={require('../../images/linkedin.png')} /></a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-4 col-xs-12">
											<div className="team_box">
												<div className="team3_img"></div>
												<div className="team_name"><div>{locale.ourteam.name3}</div><div className="designation">{locale.ourteam.position3}</div></div>
												<div className="bio">
													{locale.ourteam.bio3}
												</div>
												<div className="social">
													<div className="social_links">
														<ul>
															<li><a href="https://www.linkedin.com/in/ray-zulfirman-parsioan-pulungan-067389/" target="_blank"><img src={require('../../images/linkedin.png')} /></a></li>
														</ul>
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
					<div className="scroll_section0 scroll_section about contact">
						<div className="text-center sec0head col-sm-12 col-xs-12">
						</div>
						<div className="clearfix">
							<div className="col-sm-12 col-xs-12">
								<div className="team_cont">
									<div className="row">
										<div className="col-sm-4 col-xs-12">
											<div className="team_box">
												<div className="team1_img"></div>
												<div className="team_name"><div>{locale.ourteam.name1}</div><div className="designation">{locale.ourteam.position1}</div></div>
												<div className="bio">
													{locale.ourteam.bio1}
												</div>
												<div className="social">
													<div className="social_links">
														<ul>
															<li><a href="https://www.linkedin.com/in/praknarayanan/" target="_blank"><img src={require('../../images/linkedin.png')} /></a></li>
														</ul>
													</div>
												</div>

											</div>
										</div>
										<div className="col-sm-4 col-xs-12">
											<div className="team_box">
												<div className="team2_img"></div>
												<div className="team_name"><div>{locale.ourteam.name2}</div><div className="designation">{locale.ourteam.position2}</div></div>
												<div className="bio">
													{locale.ourteam.bio2}
												</div>
												<div className="social">
													<div className="social_links">
														<ul>
															<li><a href="https://www.linkedin.com/in/david-chiang-96a37712/" target="_blank"><img src={require('../../images/linkedin.png')} /></a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-4 col-xs-12">
											<div className="team_box">
												<div className="team3_img"></div>
												<div className="team_name"><div>{locale.ourteam.name3}</div><div className="designation">{locale.ourteam.position3}</div></div>
												<div className="bio">
													{locale.ourteam.bio3}
												</div>
												<div className="social">
													<div className="social_links">
														<ul>
															<li><a href="https://www.linkedin.com/in/ray-zulfirman-parsioan-pulungan-067389/" target="_blank"><img src={require('../../images/linkedin.png')} /></a></li>
														</ul>
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
				</div>

			</div>

		);
	}
}


export default ourTeam;