import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import '../../css/customHomepage.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));

//contact presentational component
class ourTeam2 extends React.Component {
    render() {
        const locale = this.props.locale;
        var style = {
            height: 'auto',
            margin: 'auto'
        }
        return (
            <div className="team_page">
                <div className="middle_content">
                    <div className="about contact">
                        <div className="last_update">
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-xs-12">
                                <div className="team_cont">
                                    <div className="row">
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="card-containerr">
                                                <div className="card">
                                                    <div className="front">

                                                        <div className="user">
                                                            <img className="img-circle" src={require('../../images/Prakash.png')} />
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <h3 className="name">Prakash Palaniappan</h3>
                                                                <p className="profession">{locale.ourteam.position1}</p>
                                                            </div>
                                                            <div className="footer">
                                                                <i className="fa fa-mail-forward"></i> {locale.ourteam.view_bio}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="back">
                                                        <div className="header">
                                                            <h4 className="text-center motto">Bio</h4>
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <div className="bio">
                                                                    Before founding DanaKita, Prakash was CEO of a private equity invested port infrastructure company that he took from inception to operations. He was also involved in coal mining investments and was an advisor to hedge funds on distressed debt opportunities in South East Asia. He began his career running singaporeair.com, the website of Singapore Airlines.Prakash received his Chartered Financial Analyst (CFA) designation in 2009. He graduated from Stanford University with a Bachelors in Electrical Engineering.
												                </div>
                                                            </div>
                                                        </div>
                                                        <div className="footer">
                                                            <div className="social-links text-center">
                                                                <a href="https://www.linkedin.com/in/praknarayanan/" className="facebook"><i className="fa fa-linkedin fa-fw"></i></a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="card-containerr">
                                                <div className="card">
                                                    <div className="front">

                                                        <div className="user">
                                                            <img className="img-circle" src={require('../../images/David.png')} />
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <h3 className="name">David Chiang</h3>
                                                                <p className="profession">Advisor</p>
                                                            </div>
                                                            <div className="footer">
                                                                <i className="fa fa-mail-forward"></i> {locale.ourteam.view_bio}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="back">
                                                        <div className="header">
                                                            <h4 className="text-center motto">Bio</h4>
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <div className="bio">
                                                                    David currently acts as a senior financial advisor at an Indonesian conglomerate with interests in real estate, finance, natural resources, media ,infrastructure, and manufacturing. In his role as financial advisor to the conglomerate, David engaged in the structuring international holdings of group assets and advised on group public listings and a number of large scale real estate and resource projects in Indonesia as well as establishing a first of its kind private credit guarantee corporation in Indonesia as an international joint venture.Before joining the conglomerate, David worked in finance in Hong Kong and Beijing where he completed over HKD 1 billion in structured transactions in China, Hong Kong, Australia, New Zealand and the United States. David has experience in mergers &amp; acquisition and fund formation.David holds a Juris Doctor from the George Washington University Law School as well as an International MBA from the Guanghua School of Management of Peking University and a BA from the University of Pennsylvania.
												</div>
                                                            </div>
                                                        </div>
                                                        <div className="footer">
                                                            <div className="social-links text-center">
                                                                <a href="https://www.linkedin.com/in/david-chiang-96a37712/" className="facebook"><i className="fa fa-linkedin fa-fw"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="card-containerr">
                                                <div className="card">
                                                    <div className="front">

                                                        <div className="user">
                                                            <img className="img-circle" src={require('../../images/Ray.png')} />
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <h3 className="name">Ray Pulungan</h3>
                                                                <p className="profession">Chairman</p>
                                                            </div>
                                                            <div className="footer">
                                                                <i className="fa fa-mail-forward"></i> {locale.ourteam.view_bio}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="back">
                                                        <div className="header">
                                                            <h4 className="text-center motto">Bio</h4>
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <div className="bio">
                                                                    Ray Pulungan is a co-founder at DanaKita. He is Managing Director of Nusantara Partners, Indonesia's first officially recognized search fund. He has spent most of his career in Southeast Asia, with exposure mainly to Indonesia, Malaysia, Myanmar and Singapore. The breadth of his professional experiences encompasses working for a political risk consultancy, an international development bank, the Indonesian government, private equity firms and a strategy consulting firm. He has worked on projects and deals within the energy, mining, entertainment, telecommunications, media and technology industries. He holds degrees from the Stanford Graduate School of Business (GSB), Harvard Kennedy School of Government (HKS), and Yale College.
												</div>
                                                            </div>
                                                        </div>
                                                        <div className="footer">
                                                            <div className="social-links text-center">
                                                                <a href="https://www.linkedin.com/in/ray-zulfirman-parsioan-pulungan-067389/" className="facebook"><i className="fa fa-linkedin fa-fw"></i></a>

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
                                            <div className="card-containerr">
                                                <div className="card">
                                                    <div className="front">

                                                        <div className="user">
                                                            <img className="img-circle" src={require('../../images/Prakash.png')} />
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <h3 className="name">Prakash Palaniappan</h3>
                                                                <p className="profession">{locale.ourteam.position1}</p>
                                                            </div>
                                                            <div className="footer">
                                                                <i className="fa fa-mail-forward"></i> {locale.ourteam.view_bio}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="back">
                                                        <div className="header">
                                                            <h4 className="text-center motto">Bio</h4>
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <div className="bio">
                                                                    Before founding DanaKita, Prakash was CEO of a private equity invested port infrastructure company that he took from inception to operations. He was also involved in coal mining investments and was an advisor to hedge funds on distressed debt opportunities in South East Asia. He began his career running singaporeair.com, the website of Singapore Airlines.Prakash received his Chartered Financial Analyst (CFA) designation in 2009. He graduated from Stanford University with a Bachelors in Electrical Engineering.
												</div>
                                                            </div>
                                                        </div>
                                                        <div className="footer">
                                                            <div className="social-links text-center">
                                                                <a href="https://www.linkedin.com/in/praknarayanan/" className="facebook"><i className="fa fa-linkedin fa-fw"></i></a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="card-containerr">
                                                <div className="card">
                                                    <div className="front">

                                                        <div className="user">
                                                            <img className="img-circle" src={require('../../images/David.png')} />
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <h3 className="name">David Chiang</h3>
                                                                <p className="profession">Advisor</p>
                                                            </div>
                                                            <div className="footer">
                                                                <i className="fa fa-mail-forward"></i> {locale.ourteam.view_bio}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="back">
                                                        <div className="header">
                                                            <h4 className="text-center motto">Bio</h4>
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <div className="bio">
                                                                    David currently acts as a senior financial advisor at an Indonesian conglomerate with interests in real estate, finance, natural resources, media ,infrastructure, and manufacturing. In his role as financial advisor to the conglomerate, David engaged in the structuring international holdings of group assets and advised on group public listings and a number of large scale real estate and resource projects in Indonesia as well as establishing a first of its kind private credit guarantee corporation in Indonesia as an international joint venture.Before joining the conglomerate, David worked in finance in Hong Kong and Beijing where he completed over HKD 1 billion in structured transactions in China, Hong Kong, Australia, New Zealand and the United States. David has experience in mergers &amp; acquisition and fund formation.David holds a Juris Doctor from the George Washington University Law School as well as an International MBA from the Guanghua School of Management of Peking University and a BA from the University of Pennsylvania.
												</div>
                                                            </div>
                                                        </div>
                                                        <div className="footer">
                                                            <div className="social-links text-center">
                                                                <a href="https://www.linkedin.com/in/david-chiang-96a37712/" className="facebook"><i className="fa fa-linkedin fa-fw"></i></a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                            <div className="card-containerr">
                                                <div className="card">
                                                    <div className="front">

                                                        <div className="user">
                                                            <img className="img-circle" src={require('../../images/Ray.png')} />
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <h3 className="name">Ray Pulungan</h3>
                                                                <p className="profession">Chairman</p>
                                                            </div>
                                                            <div className="footer">
                                                                <i className="fa fa-mail-forward"></i> {locale.ourteam.view_bio}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="back">
                                                        <div className="header">
                                                            <h4 className="text-center motto">Bio</h4>
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <div className="bio">
                                                                    Ray Pulungan is a co-founder at DanaKita. He is Managing Director of Nusantara Partners, Indonesia's first officially recognized search fund. He has spent most of his career in Southeast Asia, with exposure mainly to Indonesia, Malaysia, Myanmar and Singapore. The breadth of his professional experiences encompasses working for a political risk consultancy, an international development bank, the Indonesian government, private equity firms and a strategy consulting firm. He has worked on projects and deals within the energy, mining, entertainment, telecommunications, media and technology industries. He holds degrees from the Stanford Graduate School of Business (GSB), Harvard Kennedy School of Government (HKS), and Yale College.
												</div>
                                                            </div>
                                                        </div>
                                                        <div className="footer">
                                                            <div className="social-links text-center">
                                                                <a href="https://www.linkedin.com/in/ray-zulfirman-parsioan-pulungan-067389/" className="facebook"><i className="fa fa-linkedin fa-fw"></i></a>

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

export default ourTeam2;