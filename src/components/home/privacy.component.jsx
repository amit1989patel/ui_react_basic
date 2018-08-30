import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import '../../css/customHomepage.css';
import counterpart from 'counterpart';
import translate from 'counterpart';
import Translate from 'react-translate-component';
counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));
//contact presentational component
class Privacy extends React.Component {

	render() {
		const locale = this.props.locale;
		return (
			<div>
				<div className="middle_content">
					<div className="about contact">
						<div className="last_update">
							<h3>{locale.privacypage.heading}</h3>
							<span>Last Updated: 2nd February 2017</span>
						</div>
						<div className="row">
							<div className="col-sm-12 col-xs-12">
								<div className="privacy_cont">
									<div>
										<div className="main_cont_prv">
											<p>This website is operated by PT Danakita Data Prima, a company incorporated under the laws of the Republic of Indonesia, having its registered address at Menara Rajawali, 11th Floor, Jl. Dr. Ide Anak Agung Gde Agung Lot#5.1, Kawasan Mega Kuningan, Jakarta 12950, Indonesia ("Danakita", "we", "us", "our").</p>
											<p>Your privacy is important to us. This Personal Data Protection Policy explains our policy on collecting, using and disclosing your Personal Information. The processing of your Personal Information is also subject to applicable laws. The Personal Information which you provide to us whether from now on or previously will be used and processed, and continued to be used and processed by us, in accordance with this Personal Data Protection Policy (as amended, varied or revised from time to time). We will take reasonable care and precaution to prevent the loss or misuse of your Personal Information. We may amend, vary or revise this Personal Data Protection Policy from time to time. If we revise the Policy, we will post the changes on our website or send a copy of the revised Policy to you by post or email.</p>
											<p>"Personal Information" means any information in our possession or control that relates to you to the extent that you may be identified or identifiable from that information or in combination with other information in our possession.</p>
											<p>If you have any comments, suggestions or complaints, you can contact us via e-mail at <a href="mailto:webmaster@danakita.com" target="_top">webmaster@danakita.com</a></p>
										</div>
										<div className="clause">
											<h5>1.	Collection of Personal Information</h5>
											<p>When you create a Danakita account, or otherwise provide us with your personal information through the Platform, the personal information we collect may include your, Name,  ID Number,  Email Address, Residential Address and Contact Number as well as other information allowing us to better know and service your needs.</p>
											<p>You must only submit to us information which is accurate and not misleading and you must keep it up to date and inform us of changes (more information below). We reserve the right to request for documentation to verify the information provided by you.</p>
											<p>We will only be able to collect your personal information if you voluntarily submit the information to us. If you choose not to submit your personal information to us or subsequently withdraw your consent to our use of your personal information, we may not be able to provide you with our Services. You may access and update your personal information submitted to us at any time as described below.</p>
											<p>If you provide personal information of any third party to us, we assume that you have obtained the required consent from the relevant third party to share and transfer his/her personal information to us.</p>
											<p>If you sign up for Danakita using your social media account or link your Danakita account to your social media account or use certain other Danakita social media features, we may access information about you which you have voluntarily provided under your social media provider in accordance with the provider's policies and we will manage your personal data which we have collected in accordance with Danakita’s privacy policy.</p>
										</div>
										<div className="clause">
											<h5>2. Use and Disclosure of Personal Information</h5>
											<p><strong>The personal information we collect from you will be used, or shared with third parties (including related companies, third party service providers, and third party sellers), for some or all of the following purposes:</strong></p>
											<ul>
												<li><p>To facilitate your use of the Services (as defined in the Terms of Use) and/or access to the Platform;</p></li>
												<li><p>To process transaction(s) you submit through the Platform;</p></li>
												<li><p>To update you on the status of the transaction(s);</p></li>
												<li><p>To compare information, and verify with third parties in order to ensure that the information is accurate;</p></li>
												<li><p>Further, we will use the information you provide to administer your account (if any) with us; verify and carry out financial transactions in relation to transaction you make online; audit the downloading of data from the Platform; improve the layout and/or content of the pages of the Platform and customize them for users; identify visitors on the Platform; carry out research on our users’ demographics and behaviour; provide you with information we think you may find useful or which you have requested from us, including information about our or third party sellers’ products and services, provided you have indicated that you have not objected to being contacted for these purposes;</p></li>
												<li><p>When you register an account with Danakita or otherwise provide us with your personal information through the Platform, we will also use your personal information to send you marketing and/or promotional materials from time to time. You can unsubscribe from receiving marketing information at any time by using the unsubscribe function within the electronic marketing material. We may use your contact information to send newsletters from us and from our related companies;</p> </li>
												<li><p>In exceptional circumstances Danakita may be required to disclose personal information, such as when there are grounds to believe that the disclosure is necessary to prevent a threat to life or health, or for law enforcement purposes, or for fulfillment of legal and regulatory requirements and requests.</p></li>
												<li><p>Danakita may share your personal information with third parties and our affiliates for the abovementioned purposes, specifically, completing a transaction with you, managing your account and our relationship with you, marketing and fulfilling any legal or regulatory requirements and requests as deemed necessary by Danakita. In sharing your personal information with them, we endeavor to ensure that the third parties and our affiliates keep your personal information secure from unauthorized access, collection, use, disclosure, or similar risks and retain your personal information only for as long as they need your personal information to achieve the abovementioned purposes.</p>
													<p>In disclosing or transferring your personal information to third parties and our affiliates located overseas, Danakita take steps to ensure that the receiving jurisdiction has in place personal information protection standards.</p>
													<p>Danakita does not engage into the business of selling customers’ personal information to third parties.</p>
												</li>
											</ul>
										</div>
										<div className="clause">
											<h5>3. Withdrawal of Consent</h5>
											<p>You may communicate your objection to our continual use and/or disclosure of your personal information for any of the purposes and in the manner as stated above at any time by contacting us at our e-mail address below.</p>
											<p>Please note that if you communicate your objection to our use and/or disclosure of your personal information for the purposes and in the manner as stated above, depending on the nature of your objection, we may not be in a position to continue to provide our products or services to you or perform on any contract we have with you. Our legal rights and remedies are expressly reserved in such event.</p>
										</div>
										<div className="clause">
											<h5>4. Updating Your Personal Information</h5>
											<p>You can update your personal information anytime by accessing your account on the Danakita Platform. If you do not have an account with us, you can do so by contacting us at our e-mail address above.</p>
											<p>We take steps to share the updates to your personal information with third parties and our affiliates with whom we have shared your personal information if your personal information is still necessary for the above stated purposes.</p>
										</div>
										<div className="clause">
											<h5>5. Accessing Your Personal Information</h5>
											<p>If you would like to view the personal information we have on you or inquire about the ways in which your personal information has been or may have been used or disclosed by Danakita within the past year, please contact us at our e-mail address below. We reserve the right to charge a reasonable administrative fee for retrieving your personal information records.</p>
											<p>If you have an account with Danakita, you may access details of your order by logging into your account on the Platform. Here you can view the details of your orders that have been completed, those which are open and those which are shortly to be dispatched and administer your address details, bank details and any newsletter to which you may have subscribed. You undertake to treat your Danakita username, password and order details confidentially and not make it available to unauthorized third parties. We cannot assume any liability for misuse of your Danakita username, password or order details, except as stated in the Terms of Use.</p>
										</div>
										<div className="clause">
											<h5>6. Security of Your Personal Information</h5>
											<p><strong>Danakita ensures that all information collected will be safely and securely stored. We protect your personal information by:</strong></p>
											<ul>
												<li><p>Restricting access to personal information</p></li>
												<li><p>Maintaining technology products to prevent unauthorized computer access</p></li>
												<li><p>Danakita uses SSL (secure sockets layer) encryption technology when processing your financial details. SSL encryption is approximated to take at least one trillion years to break, and is the industry standard.</p></li>
												<li><p>If you believe that your privacy has been breached by Danakita, please contact us at our e-mail address below.</p></li>
											</ul>
											<p>
												Your password is the key to your account. Please use unique numbers, letters and special characters, and do not share your Danakita password to anyone. If you do share your password with others, you will be responsible for all actions taken in the name of your account and the consequences. If you lose control of your password, you may lose substantial control over your personal information and other information submitted to Danakita. You could also be subject to legally binding actions taken on your behalf. Therefore, if your password has been compromised for any reason or if you have grounds to believe that your password has been compromised, you should immediately contact us and change your password. You are reminded to log off of your account and close the browser when finished using a shared computer.
        				                    </p>
										</div>
										<div className="clause">
											<h5>7. Minor</h5>
											<p>If you are under 18 years old, you are not allowed to make any transaction on the Danakita Platform.</p>
										</div>
										<div className="clause">
											<h5>8. Collection of Computer Data</h5>
											<p>Danakita or our authorized service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster, safer and personalized experience when you use the Services and/or access the Platform.</p>
											<p><strong>When you visit Danakita, our company servers will automatically record information that your browser sends whenever you visit a website. This data may include:</strong></p>
											<ul>
												<li><p>Your computer's IP address</p></li>
												<li><p>Browser type</p></li>
												<li><p>Webpage you were visiting before you came to our Platform</p></li>
												<li><p>The pages within the Platform which you visit</p></li>
												<li><p>The time spent on those pages, items and information searched for on the Platform, access times and dates, and other statistics.</p></li>
												<li><p>This information is collected for analysis and evaluation in order to help us improve our website and the services and products we provide.</p></li>

											</ul>
											<p>Cookies are small text files (typically made up of letters and numbers) placed in the memory of your browser or device when you visit a website or view a message. They allow us to recognize a particular device or browser and help us to personalize the content to match your preferred interests more quickly, and to make our Services and Platform more convenient and useful to you.</p>
											<p>Web beacons are small graphic images that may be included on our Service and the Platform. They allow us to count users who have viewed these pages so that we can better understand your preference and interests.</p>
										</div>
										<div className="clause">
											<h5>9. No Spam, Spyware, or Virus</h5>
											<p>Spam, spyware or virus is not allowed on Platform. Please set and maintain your communication preferences so that we send communications to you as you prefer. You are not licensed or otherwise allowed to add other users (even a user who has purchased an item from you) to your mailing list (email or physical mail) without their express consent. You should not send any messages which contain spam, spyware or virus via the Platform. If you would like to report any suspicious messages, please contact us at our email address below.</p>
										</div>
										<div className="clause">
											<h5>10. Changes to the Privacy Policy</h5>
											<p>Danakita shall regularly review the sufficiency of this Privacy Policy. We reserve the right to modify and change the Privacy Policy at any time. Any changes to this policy will be published on the Platform.</p>
										</div>
										<div className="clause">
											<h5>11. Danakita's Right</h5>
											<p>YOU ACKNOWLEDGE AND AGREE THAT DANAKITA HAS THE RIGHT TO DISCLOSE YOUR PERSONAL INFORMATION TO ANY LEGAL, REGULATORY, GOVERNMENTAL, TAX, LAW ENFORCEMENT OR OTHER AUTHORITIES OR THE RELEVANT RIGHT OWNERS, IF DANAKITA HAS REASONABLE GROUNDS TO BELIEVETHAT DISCLOSURE OF YOUR PERSONAL INFORMATION IS NECESSARY FOR THE PURPOSE OF MEETING ANY OBLIGATIONS, REQUIREMENTS OR ARRANGEMENTS, WHETHER VOLUNTARY OR MANDATORY, AS A RESULT OF COOPERATING WITH AN ORDER, AN INVESTIGATION AND/OR A REQUEST OF ANY NATURE BY SUCH PARTIES. TO THE EXTENT PERMISSIBLE BY APPLICABLE LAW, YOU AGREE NOT TO TAKE ANY ACTION AND/OR WAIVE YOUR RIGHTS TO TAKE ANY ACTION AGAINST DANAKITA FOR THE DISCLOSURE OF YOUR PERSONAL INFORMATION IN THESE CIRCUMSTANCES.</p>
										</div>
										<div className="clause">
											<h5>12. Contacting Danakita</h5>
											<p>If you wish to withdraw your consent to our use of your personal information, request access and/or correction of your personal information, have any queries, comments or concerns, or require any help on technical matters, please feel free to contact us at <a href="mailto:webmaster@danakita.com" target="_top">webmaster@danakita.com</a>.</p>
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
							<h5>{locale.privacypage.heading}</h5>
						</div>
						<div className="clearfix">
							<div className="col-sm-12 col-xs-12">
								<div className="privacy_cont">
									<div>
										<div className="main_cont_prv">
											<p>This website is operated by PT Danakita Data Prima, a company incorporated under the laws of the Republic of Indonesia, having its registered address at Menara Rajawali, 11th Floor, Jl. Dr. Ide Anak Agung Gde Agung Lot#5.1, Kawasan Mega Kuningan, Jakarta 12950, Indonesia ("Danakita", "we", "us", "our").</p>
											<p>Your privacy is important to us. This Personal Data Protection Policy explains our policy on collecting, using and disclosing your Personal Information. The processing of your Personal Information is also subject to applicable laws. The Personal Information which you provide to us whether from now on or previously will be used and processed, and continued to be used and processed by us, in accordance with this Personal Data Protection Policy (as amended, varied or revised from time to time). We will take reasonable care and precaution to prevent the loss or misuse of your Personal Information. We may amend, vary or revise this Personal Data Protection Policy from time to time. If we revise the Policy, we will post the changes on our website or send a copy of the revised Policy to you by post or email.</p>
											<p>"Personal Information" means any information in our possession or control that relates to you to the extent that you may be identified or identifiable from that information or in combination with other information in our possession.</p>
											<p>If you have any comments, suggestions or complaints, you can contact us via e-mail at <a href="mailto:webmaster@danakita.com" target="_top">webmaster@danakita.com</a></p>
										</div>
										<div className="clause">
											<h5>1.	Collection of Personal Information</h5>
											<p>When you create a Danakita account, or otherwise provide us with your personal information through the Platform, the personal information we collect may include your, Name,  ID Number,  Email Address, Residential Address and Contact Number as well as other information allowing us to better know and service your needs.</p>
											<p>You must only submit to us information which is accurate and not misleading and you must keep it up to date and inform us of changes (more information below). We reserve the right to request for documentation to verify the information provided by you.</p>
											<p>We will only be able to collect your personal information if you voluntarily submit the information to us. If you choose not to submit your personal information to us or subsequently withdraw your consent to our use of your personal information, we may not be able to provide you with our Services. You may access and update your personal information submitted to us at any time as described below.</p>
											<p>If you provide personal information of any third party to us, we assume that you have obtained the required consent from the relevant third party to share and transfer his/her personal information to us.</p>
											<p>If you sign up for Danakita using your social media account or link your Danakita account to your social media account or use certain other Danakita social media features, we may access information about you which you have voluntarily provided under your social media provider in accordance with the provider's policies and we will manage your personal data which we have collected in accordance with Danakita’s privacy policy.</p>
										</div>
										<div className="clause">
											<h5>2. Use and Disclosure of Personal Information</h5>
											<p><strong>The personal information we collect from you will be used, or shared with third parties (including related companies, third party service providers, and third party sellers), for some or all of the following purposes:</strong></p>
											<ul>
												<li><p>To facilitate your use of the Services (as defined in the Terms of Use) and/or access to the Platform;</p></li>
												<li><p>To process transaction(s) you submit through the Platform;</p></li>
												<li><p>To update you on the status of the transaction(s);</p></li>
												<li><p>To compare information, and verify with third parties in order to ensure that the information is accurate;</p></li>
												<li><p>Further, we will use the information you provide to administer your account (if any) with us; verify and carry out financial transactions in relation to transaction you make online; audit the downloading of data from the Platform; improve the layout and/or content of the pages of the Platform and customize them for users; identify visitors on the Platform; carry out research on our users’ demographics and behaviour; provide you with information we think you may find useful or which you have requested from us, including information about our or third party sellers’ products and services, provided you have indicated that you have not objected to being contacted for these purposes;</p></li>
												<li><p>When you register an account with Danakita or otherwise provide us with your personal information through the Platform, we will also use your personal information to send you marketing and/or promotional materials from time to time. You can unsubscribe from receiving marketing information at any time by using the unsubscribe function within the electronic marketing material. We may use your contact information to send newsletters from us and from our related companies;</p> </li>
												<li><p>In exceptional circumstances Danakita may be required to disclose personal information, such as when there are grounds to believe that the disclosure is necessary to prevent a threat to life or health, or for law enforcement purposes, or for fulfillment of legal and regulatory requirements and requests.</p></li>
												<li><p>Danakita may share your personal information with third parties and our affiliates for the abovementioned purposes, specifically, completing a transaction with you, managing your account and our relationship with you, marketing and fulfilling any legal or regulatory requirements and requests as deemed necessary by Danakita. In sharing your personal information with them, we endeavor to ensure that the third parties and our affiliates keep your personal information secure from unauthorized access, collection, use, disclosure, or similar risks and retain your personal information only for as long as they need your personal information to achieve the abovementioned purposes.</p>
													<p>In disclosing or transferring your personal information to third parties and our affiliates located overseas, Danakita take steps to ensure that the receiving jurisdiction has in place personal information protection standards.</p>
													<p>Danakita does not engage into the business of selling customers’ personal information to third parties.</p>
												</li>
											</ul>
										</div>
										<div className="clause">
											<h5>3. Withdrawal of Consent</h5>
											<p>You may communicate your objection to our continual use and/or disclosure of your personal information for any of the purposes and in the manner as stated above at any time by contacting us at our e-mail address below.</p>
											<p>Please note that if you communicate your objection to our use and/or disclosure of your personal information for the purposes and in the manner as stated above, depending on the nature of your objection, we may not be in a position to continue to provide our products or services to you or perform on any contract we have with you. Our legal rights and remedies are expressly reserved in such event.</p>
										</div>
										<div className="clause">
											<h5>4. Updating Your Personal Information</h5>
											<p>You can update your personal information anytime by accessing your account on the Danakita Platform. If you do not have an account with us, you can do so by contacting us at our e-mail address above.</p>
											<p>We take steps to share the updates to your personal information with third parties and our affiliates with whom we have shared your personal information if your personal information is still necessary for the above stated purposes.</p>
										</div>
										<div className="clause">
											<h5>5. Accessing Your Personal Information</h5>
											<p>If you would like to view the personal information we have on you or inquire about the ways in which your personal information has been or may have been used or disclosed by Danakita within the past year, please contact us at our e-mail address below. We reserve the right to charge a reasonable administrative fee for retrieving your personal information records.</p>
											<p>If you have an account with Danakita, you may access details of your order by logging into your account on the Platform. Here you can view the details of your orders that have been completed, those which are open and those which are shortly to be dispatched and administer your address details, bank details and any newsletter to which you may have subscribed. You undertake to treat your Danakita username, password and order details confidentially and not make it available to unauthorized third parties. We cannot assume any liability for misuse of your Danakita username, password or order details, except as stated in the Terms of Use.</p>
										</div>
										<div className="clause">
											<h5>6. Security of Your Personal Information</h5>
											<p><strong>Danakita ensures that all information collected will be safely and securely stored. We protect your personal information by:</strong></p>
											<ul>
												<li><p>Restricting access to personal information</p></li>
												<li><p>Maintaining technology products to prevent unauthorized computer access</p></li>
												<li><p>Danakita uses SSL (secure sockets layer) encryption technology when processing your financial details. SSL encryption is approximated to take at least one trillion years to break, and is the industry standard.</p></li>
												<li><p>If you believe that your privacy has been breached by Danakita, please contact us at our e-mail address below.</p></li>
											</ul>
											<p>
												Your password is the key to your account. Please use unique numbers, letters and special characters, and do not share your Danakita password to anyone. If you do share your password with others, you will be responsible for all actions taken in the name of your account and the consequences. If you lose control of your password, you may lose substantial control over your personal information and other information submitted to Danakita. You could also be subject to legally binding actions taken on your behalf. Therefore, if your password has been compromised for any reason or if you have grounds to believe that your password has been compromised, you should immediately contact us and change your password. You are reminded to log off of your account and close the browser when finished using a shared computer.
        				                    </p>
										</div>
										<div className="clause">
											<h5>7. Minor</h5>
											<p>If you are under 18 years old, you are not allowed to make any transaction on the Danakita Platform.</p>
										</div>
										<div className="clause">
											<h5>8. Collection of Computer Data</h5>
											<p>Danakita or our authorized service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster, safer and personalized experience when you use the Services and/or access the Platform.</p>
											<p><strong>When you visit Danakita, our company servers will automatically record information that your browser sends whenever you visit a website. This data may include:</strong></p>
											<ul>
												<li><p>Your computer's IP address</p></li>
												<li><p>Browser type</p></li>
												<li><p>Webpage you were visiting before you came to our Platform</p></li>
												<li><p>The pages within the Platform which you visit</p></li>
												<li><p>The time spent on those pages, items and information searched for on the Platform, access times and dates, and other statistics.</p></li>
												<li><p>This information is collected for analysis and evaluation in order to help us improve our website and the services and products we provide.</p></li>

											</ul>
											<p>Cookies are small text files (typically made up of letters and numbers) placed in the memory of your browser or device when you visit a website or view a message. They allow us to recognize a particular device or browser and help us to personalize the content to match your preferred interests more quickly, and to make our Services and Platform more convenient and useful to you.</p>
											<p>Web beacons are small graphic images that may be included on our Service and the Platform. They allow us to count users who have viewed these pages so that we can better understand your preference and interests.</p>
										</div>
										<div className="clause">
											<h5>9. No Spam, Spyware, or Virus</h5>
											<p>Spam, spyware or virus is not allowed on Platform. Please set and maintain your communication preferences so that we send communications to you as you prefer. You are not licensed or otherwise allowed to add other users (even a user who has purchased an item from you) to your mailing list (email or physical mail) without their express consent. You should not send any messages which contain spam, spyware or virus via the Platform. If you would like to report any suspicious messages, please contact us at our email address below.</p>
										</div>
										<div className="clause">
											<h5>10. Changes to the Privacy Policy</h5>
											<p>Danakita shall regularly review the sufficiency of this Privacy Policy. We reserve the right to modify and change the Privacy Policy at any time. Any changes to this policy will be published on the Platform.</p>
										</div>
										<div className="clause">
											<h5>11. Danakita's Right</h5>
											<p>YOU ACKNOWLEDGE AND AGREE THAT DANAKITA HAS THE RIGHT TO DISCLOSE YOUR PERSONAL INFORMATION TO ANY LEGAL, REGULATORY, GOVERNMENTAL, TAX, LAW ENFORCEMENT OR OTHER AUTHORITIES OR THE RELEVANT RIGHT OWNERS, IF DANAKITA HAS REASONABLE GROUNDS TO BELIEVETHAT DISCLOSURE OF YOUR PERSONAL INFORMATION IS NECESSARY FOR THE PURPOSE OF MEETING ANY OBLIGATIONS, REQUIREMENTS OR ARRANGEMENTS, WHETHER VOLUNTARY OR MANDATORY, AS A RESULT OF COOPERATING WITH AN ORDER, AN INVESTIGATION AND/OR A REQUEST OF ANY NATURE BY SUCH PARTIES. TO THE EXTENT PERMISSIBLE BY APPLICABLE LAW, YOU AGREE NOT TO TAKE ANY ACTION AND/OR WAIVE YOUR RIGHTS TO TAKE ANY ACTION AGAINST DANAKITA FOR THE DISCLOSURE OF YOUR PERSONAL INFORMATION IN THESE CIRCUMSTANCES.</p>
										</div>
										<div className="clause">
											<h5>12. Contacting Danakita</h5>
											<p>If you wish to withdraw your consent to our use of your personal information, request access and/or correction of your personal information, have any queries, comments or concerns, or require any help on technical matters, please feel free to contact us at <a href="mailto:webmaster@danakita.com" target="_top">webmaster@danakita.com</a>.</p>
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
export default Privacy;