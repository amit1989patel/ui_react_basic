import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import '../../css/customHomepage.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));

//contact presentational component
class Terms extends React.Component {

	render() {
		const locale = this.props.locale;
		return (
			<div>
				<div className="middle_content">
					<div className="about contact">
						<div className="last_update">
							<h3>{locale.Termspage.heading}</h3>
							<span>Last Updated: 2nd February 2017</span>
						</div>
						<div className="row">
							<div className="col-sm-12 col-xs-12">
								<div className="privacy_cont">
									<div>
										<div className="main_cont_prv">
											<p>Welcome to the Danakita.com. Please read these terms and conditions carefully. The following Terms of Service govern your use and access of the Platform (defined below) and the use of the Services. By accessing the Platform and/or using the Services, you agree to be bound by these Terms of Service. If you do not agree to these Terms of Service, do not access and/or use this Platform or the Services.</p>
											<p>Access to and use of password protected and/or secure areas of the Platform and/or use of the Services are restricted to Customers with accounts only. You may not obtain or attempt to obtain unauthorized access to such parts of this Platform and/or Services, or to any other protected information, through any means not intentionally made available by us for your specific use. Violation of this provision is based on the violation of Indonesian law and / or laws and regulations.</p>
											<p>If you are below 18 years old: you are not allowed to make any transaction using this Platform and Services.</p>

										</div>
										<div className="clause">
											<h5>1. Definitions & Interpretation</h5>
											<p>Unless otherwise defined, the definitions and provisions in respect of interpretation set out in Schedule 1 will apply to these Terms of Service.</p>
										</div>
										<div className="clause">
											<h5>2. General use of Services and/or access of Platform</h5>
											<p><strong>2.1	Guidelines to the use of Platform and/or Services:</strong> You agree to comply with any and all the guidelines, notices, operating rules and policies and instructions pertaining to the use of the Services and/or access to the Platform, as well as any amendments to the aforementioned, issued by us, from time to time. We reserve the right to revise these guidelines, notices, operating rules and policies and instructions at any time and you are deemed to be aware of and bound by any changes to the foregoing upon their publication on the Platform.</p>

											<p><strong>2.2 Restricted activities:</strong> You agree and undertake NOT to:</p>
											<ul>
												<li><p>Impersonate any person or entity or to falsely state or otherwise misrepresent your affiliation with any person or entity;</p></li>
												<li><p>Use the Platform or Services for illegal purposes;</p></li>
												<li><p>Attempt to gain unauthorized access to or otherwise interfere or disrupt other computer systems or networks connected to the Platform or Services;</p></li>
												<li><p>Post, promote or transmit through the Platform or Services any Prohibited Materials;</p></li>
												<li><p>Interfere with another’s utilization and enjoyment of the Platform or Services;</p></li>
												<li><p>Use or upload, in any way, any software or material that contains, or which you have reason to suspect that contains, viruses, damaging components, malicious code or harmful components which may impair or corrupt the Platform’s data or damage or interfere with the operation of another Customer’s computer or mobile device or the Platform or Services;</p> </li>
												<li><p>Use the Platform or Services other than in conformance with the acceptable use policies of any connected computer networks, any applicable Internet standards and any other applicable laws.</p></li>

											</ul>
											<p><strong>2.3 Availability of Platform and Services:</strong> We may, from time to time and without giving any reason or prior notice, upgrade, modify, suspend or discontinue the provision of or remove, whether in whole or in part, the Platform or any Services and shall not be liable if any such upgrade, modification, suspension or removal prevents you from accessing the Platform or any part of the Services.</p>
											<p><strong>2.4 Right, but not obligation, to monitor content:</strong> We reserve the right, but shall not be obliged to:</p>
											<ul>
												<li><p>Monitor, screen or otherwise control any activity, content or material on the Platform and/or through the Services. We may in our sole and absolute discretion, investigate any violation of the terms and conditions contained herein and may take any action it deems appropriate;</p></li>
												<li><p>Prevent or restrict access of any Customer to the Platform and/or the Services;</p></li>
												<li><p>Report any activity it suspects to be in violation of any applicable law, statute or regulation to the appropriate authorities and to co-operate with such authorities;</p></li>
												<li><p>To request any information and data from you in connection with your use of the Services and/or access of the Platform at any time and to exercise our right under this paragraph if you refuse to divulge such information and/or data or if you provide or if we have reasonable grounds to suspect that you have provided inaccurate, misleading or fraudulent information and/or data.</p></li>

											</ul>
											<p><strong>2.5 Privacy Policy:</strong> Your use of the Services and/or access to the Platform is also subject to the Privacy Policy </p>
											<p><strong>2.6 Additional terms:</strong> In addition to these Terms of Service, the use of specific aspects of the Materials and Services, more comprehensive or updated versions of the Materials offered by us or our designated sub-contractors, may be subject to additional terms and conditions, which will apply in full force and effect.</p>
										</div>
										<div className="clause">
											<h5>3. Use of Services</h5>
											<p><strong>3.1	Application of this Clause:</strong> In addition to all other terms and conditions of these Terms of Service, the provisions in this Clause 3 are the additional specific terms and conditions governing your use of the Services.</p>
											<p><strong>3.2	Restrictions:</strong> Use of the Services is limited to authorized Customers that are of legal age and who have the legal capacity to enter into and form contracts under any applicable law. Customers who have breached or are in breach of the terms and conditions contained herein and Customers who have been permanently or temporarily suspended from use of any of the Services may not use the Services even if they satisfy the requirements of this Clause 3.2.</p>
											<p><strong>3.3	General Terms of Service:</strong> You agree:</p>
											<ul>
												<li><p>To access and/or use the Services only for lawful purposes and in a lawful manner at all times and further agree to conduct any activity relating to the Services in good faith;</p></li>
												<li><p>To ensure that any information or data you post or cause to appear on the Platform in connection with the Services is accurate and agree to take sole responsibility for such information and data.</p></li>
											</ul>
											<p><strong>3.4 Loan description:</strong> While we endeavor to provide an accurate description of the Loans, we do not warrant that such description is accurate, current or free from error.</p>
											<p><strong>3.5 Interest Rate of Loans:</strong> All Listing Interest Rates are subject to taxes, unless otherwise stated. We reserve the right to amend the Listing Interest Rate at any time without giving any reason or prior notice.</p>
											<p><strong>3.6 Borrowers:</strong> You acknowledge that parties other than Danakita (i.e. borrowers) list Loans on the Platform. For the avoidance of doubt, each agreement entered into for the investment in a Borrower’s Loan to a Customer shall be an agreement entered into directly and only between the Borrower and the Customer.</p>
										</div>
										<div className="clause">
											<h5>4. Customers with Danakita accounts</h5>
											<p><strong>4.1	Username/Password:</strong> Certain Services that may be made available on the Platform may require creation of an account with us or for you to provide Personal Data. If you request to create an account with us, a Username and Password may either be: (i) determined and issued to you by us; or (ii) provided by you and accepted by us in our sole and absolute discretion in connection with the use of the Services and/or access to the relevant Platform. We may at any time in our sole and absolute discretion, request that you update your Personal Data or forthwith invalidate the Username and/or Password without giving any reason or prior notice and shall not be liable or responsible for any Losses suffered by or caused by you or arising out of or in connection with or by reason of such request or invalidation. You hereby agree to change your Password from time to time and to keep the Username and Password confidential and shall be responsible for the security of your account and liable for any disclosure or use (whether such use is authorized or not) of the Username and/or Password. You are to notify us immediately if you have knowledge that or have reason for suspecting that the confidentiality of the Username and/or Password has been compromised or if there has been any unauthorized use of the Username and/or Password or if your Personal Data requires updating.</p>
											<p><strong>4.2	Purported use/access:</strong> You agree and acknowledge that any use of the Services and/or any access to the Platform and any information, data or communications referable to your Username and Password shall be deemed to be, as the case may be:</p>
											<ul>
												<li><p>Access to the relevant Platform and/or use of the Services by you; or</p></li>
												<li><p>Information, data or communications posted, transmitted and validly issued by you.</p></li>
											</ul>
											<p>You agree to be bound by any access of the Platform and/or use of any Services (whether such access or use are authorized by you or not) and you agree that we shall be entitled (but not obliged) to act upon, rely on or hold you solely responsible and liable in respect thereof as if the same were carried out or transmitted by you. You further agree and acknowledge that you shall be bound by and agree to fully indemnify us against any and all Losses attributable to any use of any Services and/or or access to the Platform referable to your Username and Password.</p>
										</div>
										<div className="clause">
											<h5>5. Intellectual property</h5>
											<p><strong>5.1 Ownership:</strong> The Intellectual Property in and to the Platform and the Materials are owned, licensed to or controlled by us, our licensors or our service providers. We reserve the right to enforce its Intellectual Property to the fullest extent of the law.</p>
											<p><strong>5.2 Restricted use:</strong> No part or parts of the Platform, or any Materials may be reproduced, reverse engineered, decompiled, disassembled, separated, altered, distributed, republished, displayed, broadcast, hyperlinked, mirrored, framed, transferred or transmitted in any manner or by any means or stored in an information retrieval system or installed on any servers, system or equipment without our prior written permission or that of the relevant copyright owners. Subject to Clause 5.3, permission will only be granted to you to download, print or use the Materials for personal and non-commercial uses, provided that you do not modify the Materials and that we or the relevant copyright owners retain all copyright and other proprietary notices contained in the Materials.</p>
											<p><strong>5.3 Trademarks:</strong> The Trademarks are registered and unregistered trademarks of us or third parties. Nothing on the Platform and in these Terms of Service shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use (including as a meta tag or as a “hot” link to any other website) any Trademarks displayed on the Services, without our written permission or any other applicable trademark owner.</p>
										</div>
										<div className="clause">
											<h5>6. Our limitation of responsibility and liability</h5>
											<p><strong>6.1 No representations or warranties:</strong> The Services, the Platform and the Materials are provided on an “as is” and “as available” basis. All data and/or information contained in the Platform, the Services or the Materials are provided for informational purposes only. No representations or warranties of any kind, implied, express or statutory, including the warranties of non-infringement of third party rights, title, merchantability, satisfactory quality or fitness for a particular purpose, are given in conjunction with the Platform, the Services or the Materials. Without prejudice to the generality of the foregoing, we do not warrant:</p>
											<ul>
												<li><p>The accuracy, timeliness, adequacy, commercial value or completeness of all data and/or information contained in the Platform, the Services or the Materials;</p></li>
												<li><p>That the Platform, the Services or that any of the Materials will be provided uninterrupted, secure or free from errors or omissions, or that any identified defect will be corrected;</p></li>
												<li><p>That the Platform, the Services or the Materials are free from any computer virus or other malicious, destructive or corrupting code, agent, program or macros; and</p></li>
												<li><p>The security of any information transmitted by you or to you through the Platform or the Services, and you accept the risk that any information transmitted or received through the Services or the Platform may be accessed by unauthorized third parties and/or disclosed by us or our officers, employees or agents to third parties purporting to be you or purporting to act under your authority. Transmissions over the Internet and electronic mail may be subject to interruption, transmission blackout, delayed transmission due to internet traffic or incorrect data transmission due to the public nature of the Internet.</p></li>
											</ul>
											<p>
												<strong>6.2 Exclusion of liability:</strong> Danakita shall not be liable to you for any Losses whatsoever or howsoever caused (regardless of the form of action) arising directly or indirectly in connection with:
        		                     		</p>
											<ul>
												<li><p>Any access, use and/or inability to use the Platform or the Services;</p></li>
												<li><p>Reliance on any data or information made available through the Platform and/or through the Services. You should not act on such data or information without first independently verifying its contents;</p></li>
												<li><p>Any system, server or connection failure, error, omission, interruption, delay in transmission, computer virus or other malicious, destructive or corrupting code, agent program or macros; and</p></li>
												<li><p>Any use of or access to any other website or webpage linked to the Platform, even if we or our officers or agents or employees may have been advised of, or otherwise might have anticipated, the possibility of the same.</p></li>
											</ul>
											<p>
												<strong>6.3 At your own risk:</strong> Any risk of misunderstanding, error, damage, expense or Losses resulting from the use of the Platform is entirely at your own risk and we shall not be liable therefor.
        			                    	</p>
										</div>
										<div className="clause">
											<h5>7. Hyperlinks, alerts and advertising</h5>
											<p><strong>7.1 Hyperlinks:</strong> For your convenience, we may include hyperlinks to other websites or content on the Internet that are owned or operated by third parties. Such linked websites or content are not under our control and we are not liable for any errors, omissions, delays, defamation, libel, slander, falsehood, obscenity, pornography, profanity, inaccuracy or any other objectionable material contained in the contents, or the consequences of accessing, any linked website. Any hyperlinks to any other websites or content are not an endorsement or verification of such websites or content and you agree that your access to or use of such linked websites or content is entirely at your own risk.</p>
											<p>
												<strong>7.2 Advertising:</strong> We may attach banners, java applets and/or such other materials to the Platform for the purposes of advertising our or our Third Party Vendors’ products and/or services. For the avoidance of doubt, you shall not be entitled to receive any payment, fee and/or commission in respect of any such advertising or other promotional materials.
        			                     	</p>
										</div>
										<div className="clause">
											<h5>8. Your submissions and information</h5>
											<p><strong>8.1	Submissions by you:</strong> You grant us a non-exclusive license to use the materials or information that you submit to the Platform and/or provide to us, including but not limited to, questions, reviews, comments, and suggestions (collectively, “Submissions”). When you post comments or reviews to the Platform, you also grant us the right to use the name that you submit or your Username in connection with such review, comment, or other content. You shall not use a false e-mail address, pretend to be someone other than yourself or otherwise mislead us or third parties as to the origin of any Submissions. We may, but shall not be obligated to, publish, remove or edit your Submissions.</p>
											<p><strong>8.2	Consent to receive e-mails:</strong> You consent to and authorize the use by us of any information provided by you (including Personal Data) for the purposes of sending informational and promotional e-mails to you. Your agreement to the provisions of this Clause 8.2 shall constitute your consent for the purpose of the provisions of any spam control laws (whether in Indonesia or elsewhere). You may subsequently opt out of receiving promotional e-mails by clicking on the appropriate hyperlink in any promotional e-mail.</p>

											<p><strong>8.3	Privacy Policy:</strong> You acknowledge that you have read and agree to the Privacy Policy at (insert url) consent to our collection, use and disclosure of your Personal Data for the purposes as set out in the Privacy Policy.</p>
										</div>
										<div className="clause">
											<h5>9. Termination</h5>
											<p><strong>9.1	Termination by us:</strong> In our sole and absolute discretion, we may with immediate effect upon giving you notice, terminate your use of the Platform and/or Services and/or disable your Username and Password. We may bar access to the Platform and/or Services (or any part thereof) for any reason whatsoever, including a breach of any of these Terms of Service or where if we believe that you have violated or acted inconsistently with any terms or conditions set out herein, or if in our opinion or the opinion of any regulatory authority, it is not suitable to continue providing the services relating to the Platform.</p>
											<p><strong>9.2 Termination by You:</strong> You may terminate these Terms and Conditions of Use by giving notice in writing within seven (7) working days to us.</p>
											<p><strong>9.3</strong>	For the purpose of this termination, you and Danakita agreed to waive the provisions set forth in Article 1266 of the Civil Code Indonesia so that the termination will be made without the approval or decision of a court or other institution in the territory of the Republic of Indonesia.</p>
										</div>
										<div className="clause">
											<h5>10. Notices</h5>
											<p><strong>10.1 Notices from us:</strong> All notices or other communications given to you if:</p>
											<ul>
												<li><p>Communicated through any print or electronic media as we may select will be deemed to be notified to you on the date of publication or broadcast; or;</p></li>
												<li><p>Sent by post or left at your last known address will be deemed to be received by you on the day following such posting or on the day when it was so left.</p></li>
											</ul>
											<p><strong>10.2	Notices from you:</strong> You may only give notice to us in writing sent to our designated address or e-mail address, and we shall be deemed to have received such notice only upon receipt. While we endeavor to respond promptly to notices from you, we cannot guarantee that we will always respond with consistent speed.</p>
											<p><strong>10.3	Other modes:</strong> Notwithstanding Clauses 10.1 and 10.2, we may from time to time designate other acceptable modes of giving notices (including but not limited to e-mail or other forms of electronic communication) and the time or event by which such notice shall be deemed given.</p>
										</div>
										<div className="clause">
											<h5>11. General</h5>
											<p><strong>11.1	Cumulative rights and remedies:</strong> Unless otherwise provided under these Terms of Service, the provisions of these Terms of Service and our rights and remedies under these Terms of Service are cumulative and are without prejudice and in addition to any rights or remedies we may have in law or in equity, and no exercise by us of any one right or remedy under these Terms of Service, or at law or in equity, shall (save to the extent, if any, provided expressly in these Terms of Service or at law or in equity) operate so as to hinder or prevent our exercise of any other such right or remedy as at law or in equity.</p>

											<p><strong>11.2	No waiver:</strong> Our failure to enforce these Terms of Service shall not constitute a waiver of these terms, and such failure shall not affect the right later to enforce these Terms of Service. We would still be entitled to use our rights and remedies in any other situation where you breach these Terms of Service.</p>

											<p><strong>11.3	Severability:</strong> If at any time any provision of these Terms of Service shall be or shall become illegal, invalid or unenforceable in any respect, the legality, validity and enforceability of the remaining provisions of this Agreement shall not be affected or impaired thereby, and shall continue in force as if such illegal, invalid or unenforceable provision was severed from these Terms of Service.</p>

											<p><strong>11.4	Third Party Rights:</strong> A person or party who is not a party that is subject to the Terms and Conditions of Use, is not entitled under any law and any jurisdiction to enforce any term of these Terms and Conditions of Use. For the avoidance of doubt, nothing in this clause shall affect the rights of any permitted transfer of the Terms and Conditions of Use.</p>


											<p><strong>11.5	Governing law:</strong> Use of Platform and / or Service and Terms & Conditions of Use shall be governed by and construed in accordance with the laws of the Republic of Indonesia and the exclusive jurisdiction of the courts of South Jakarta.</p>

											<p><strong>11.6	Injunctive relief:</strong> We may seek immediate injunctive relief if we make a good faith determination that a breach or non-performance is such that a temporary restraining order or other immediate injunctive relief is the only appropriate or adequate remedy.</p>

											<p><strong>11.7	Amendments:</strong> We may by notice through the Platform or by such other method of notification as we may designate (which may include notification by way of e-mail), vary the terms and conditions of these Terms of Service, such variation to take effect on the date we specify through the above means. If you use the Platform or the Services after such date, you are deemed to have accepted such variation. If you do not accept the variation, you must stop access or using the Platform and the Services and terminate these Terms of Service. Our right to vary these Terms of Service in the manner aforesaid will be exercised with may be exercised without the consent of any person or entity who is not a party to these Terms of Service.</p>

											<p><strong>11.8	Correction of errors:</strong> Any typographical, clerical or other error or omission in any acceptance, invoice or other document on our part shall be subject to correction without any liability on our part.</p>

											<p><strong>11.9	Currency:</strong> Money references under these Terms of Service are denominated in Indonesian Rupiah.</p>

											<p><strong>11.10 Language:</strong> In the event that these Terms of Service is executed or translated in any language other than English ("Foreign Language Version"), the English language version of these Terms of Service shall govern and shall take precedence over the Foreign Language Version.</p>

											<p><strong>11.11 Entire agreement:</strong> These Terms of Service shall constitute the entire agreement between you and us relating to the subject matter hereof and supersedes and replaces in full all prior understandings, communications and agreements with respect to the subject matter hereof.</p>

											<p><strong>11.12 Binding and conclusive:</strong> You acknowledge and agree that any records (including records of any telephone conversations relating to the Services, if any) maintained by us or our service providers relating to or in connection with the Platform and Services shall be binding and conclusive on you for all purposes whatsoever and shall be conclusive evidence of any information and/or data transmitted between us and you. You hereby agree that all such records are admissible in evidence and that you shall not challenge or dispute the admissibility, reliability, accuracy or the authenticity of such records merely on the basis that such records are in electronic form or are the output of a computer system, and you hereby waive any of your rights, if any, to so object.</p>

											<p><strong>11.13 Sub-contracting and delegation:</strong> We reserve the right to delegate or sub-contract the performance of any of our functions in connection with the Platform and/or Services and reserve the right to use any service providers, subcontractors and/or agents on such terms as we deem appropriate.</p>

											<p><strong>11.14 Assignment:</strong> You may not assign your rights under these Terms of Service without our prior written consent. We may assign our rights under these Terms of Service to any third party.</p>

											<p><strong>11.15 Force Majeure:</strong> We shall not be liable for non-performance, error, interruption or delay in the performance of its obligations under these Terms of Service (or any part thereof) or for any inaccuracy, unreliability or unsuitability of the Platform's and/or Services’ contents if this is due, in whole or in part, directly or indirectly to an event or failure which is beyond our reasonable control.</p>

										</div>
										<div className="clause">
											<h5>12. Definitions and Interpretation</h5>
											<p><strong>Definitions. Unless the context otherwise requires, the following expressions shall have the following meanings in these Terms of Service:</strong></p>

											<p><strong>12.1</strong> “Customer” means the authorized user of the Platform and / or Service.</p>

											<p><strong>12.2</strong> “Intellectual Property” means all copyright, patents, utility innovations, trade marks and service marks, geographical indications, domain names, layout design rights, registered designs, design rights, database rights, trade or business names, rights protecting trade secrets and confidential information, rights protecting goodwill and reputation, and all other similar or corresponding proprietary rights and all applications for the same, whether presently existing or created in the future, anywhere in the world, whether registered or not, and all benefits, privileges, rights to sue, recover damages and obtain relief or other remedies for any past, current or future infringement, misappropriation or violation of any of the foregoing rights.</p>

											<p><strong>12.3</strong> “Danakita Indemnitees” means Danakita and all of its respective officers, employees, directors, agents, contractors and assigns.</p>

											<p><strong>12.4</strong> “Danakita”, “we”, “our” and “us” refer to PT Danakita Data Prima, a company incorporated under the laws of the Republic of Indonesia, having its registered address at: Menara Rajawali, 11th Floor, Jl. Dr. Ide Anak Agung Gde Agung Lot#5.1, Kawasan Mega Kuningan, Jakarta 12950,  Indonesia</p>

											<p><strong>12.5</strong> “Listing Interest Rate” means the return Interest Rate of Loans listed for funding to Customers, as stated on the Platform.</p>

											<p><strong>12.6</strong> “Losses” means all penalties, losses, settlement sums, costs (including legal fees and expenses on a solicitor-client basis), charges, expenses, actions, proceedings, claims, demands and other liabilities, whether foreseeable or not.</p>

											<p><strong>12.7</strong>	“Materials” means, collectively, all web pages on the Platform, including the information, images, links, sounds, graphics, video, software, applications and other materials displayed or made available on the Platform and the functionalities or services provided on the Platform.</p>

											<p><strong>12.8</strong>	“Password” refers to the valid password that a Customer who has an account with Danakita may use in conjunction with the Username to access the relevant Platform and/or Services.</p>

											<p><strong>12.9</strong>	“Personal Data” means data, whether true or not, that can be used to identify, contact or locate you. Personal Data can include your name, e-mail address, billing address, shipping address, phone number and credit card information. “Personal Data” shall be deemed to include any data that you have provided to us when placing a transaction, regardless of whether you have an account with us.</p>

											<p><strong>12.10</strong> “Platform” means (a) both the web and mobile versions of the website operated and/or owned by Danakita which is presently located at the following URL: www.danakita.com; and (b) the mobile applications made available from time to time by Danakita, including the iOS and Android versions.</p>

											<p><strong>12.11</strong> “Privacy Policy” means the privacy policy set out at (insert url)</p>

											<p><strong>12.12</strong> “Loan” means a loan available for funding to Customers on the Platform.</p>

											<p><strong>12.13</strong> “Prohibited Material” means any information, graphics, photographs, data and/or any other material that:</p>

											<ul>
												<li><p>Contains any computer virus or other invasive or damaging code, program or macro;</p></li>
												<li><p>Infringes any third-party Intellectual Property or any other proprietary rights;</p></li>
												<li><p>Is defamatory, libelous or threatening;</p></li>
												<li><p>Obscene, pornographic, obscene, false, fraud, theft, malicious or illegal under applicable laws; and / or content offensive or inappropriate, based on our opinion.</p></li>
											</ul>

											<p><strong>12.14</strong>	“Services” means services, information and functions made available by us at the Platform.</p>

											<p><strong>12.15</strong>	“Submission” is as defined in Clause 8.1 of these Terms of Service.</p>

											<p><strong>12.16</strong>	“Terms of Service” means the recitals, Clauses 1 to 11 and any Schedules to these terms and conditions.</p>

											<p><strong>12.17</strong>	“Trademarks” means the trademarks, service marks, trade names and logos used and displayed on the Platform.</p>

											<p><strong>12.18</strong>	“Username” refers to the unique login identification name or code which identifies a Customer who has an account with Danakita.</p>
											<p><strong>12.19</strong>	“you” and “your” refer to the individuals over the age of 18.</p>


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
							<h5>{locale.Termspage.heading}</h5>
						</div>

						<div className="clearfix">

							<div className="col-sm-12 col-xs-12">
								<div className="privacy_cont">
									<div>
										<div className="main_cont_prv">
											<p>Welcome to the Danakita.com. Please read these terms and conditions carefully. The following Terms of Service govern your use and access of the Platform (defined below) and the use of the Services. By accessing the Platform and/or using the Services, you agree to be bound by these Terms of Service. If you do not agree to these Terms of Service, do not access and/or use this Platform or the Services.</p>
											<p>Access to and use of password protected and/or secure areas of the Platform and/or use of the Services are restricted to Customers with accounts only. You may not obtain or attempt to obtain unauthorized access to such parts of this Platform and/or Services, or to any other protected information, through any means not intentionally made available by us for your specific use. Violation of this provision is based on the violation of Indonesian law and / or laws and regulations.</p>
											<p>If you are below 18 years old: you are not allowed to make any transaction using this Platform and Services.</p>

										</div>
										<div className="clause">
											<h5>1. Definitions & Interpretation</h5>
											<p>Unless otherwise defined, the definitions and provisions in respect of interpretation set out in Schedule 1 will apply to these Terms of Service.</p>
										</div>
										<div className="clause">
											<h5>2. General use of Services and/or access of Platform</h5>
											<p><strong>2.1	Guidelines to the use of Platform and/or Services:</strong> You agree to comply with any and all the guidelines, notices, operating rules and policies and instructions pertaining to the use of the Services and/or access to the Platform, as well as any amendments to the aforementioned, issued by us, from time to time. We reserve the right to revise these guidelines, notices, operating rules and policies and instructions at any time and you are deemed to be aware of and bound by any changes to the foregoing upon their publication on the Platform.</p>

											<p><strong>2.2 Restricted activities:</strong> You agree and undertake NOT to:</p>
											<ul>
												<li><p>Impersonate any person or entity or to falsely state or otherwise misrepresent your affiliation with any person or entity;</p></li>
												<li><p>Use the Platform or Services for illegal purposes;</p></li>
												<li><p>Attempt to gain unauthorized access to or otherwise interfere or disrupt other computer systems or networks connected to the Platform or Services;</p></li>
												<li><p>Post, promote or transmit through the Platform or Services any Prohibited Materials;</p></li>
												<li><p>Interfere with another’s utilization and enjoyment of the Platform or Services;</p></li>
												<li><p>Use or upload, in any way, any software or material that contains, or which you have reason to suspect that contains, viruses, damaging components, malicious code or harmful components which may impair or corrupt the Platform’s data or damage or interfere with the operation of another Customer’s computer or mobile device or the Platform or Services;</p> </li>
												<li><p>Use the Platform or Services other than in conformance with the acceptable use policies of any connected computer networks, any applicable Internet standards and any other applicable laws.</p></li>

											</ul>
											<p><strong>2.3 Availability of Platform and Services:</strong> We may, from time to time and without giving any reason or prior notice, upgrade, modify, suspend or discontinue the provision of or remove, whether in whole or in part, the Platform or any Services and shall not be liable if any such upgrade, modification, suspension or removal prevents you from accessing the Platform or any part of the Services.</p>
											<p><strong>2.4 Right, but not obligation, to monitor content:</strong> We reserve the right, but shall not be obliged to:</p>
											<ul>
												<li><p>Monitor, screen or otherwise control any activity, content or material on the Platform and/or through the Services. We may in our sole and absolute discretion, investigate any violation of the terms and conditions contained herein and may take any action it deems appropriate;</p></li>
												<li><p>Prevent or restrict access of any Customer to the Platform and/or the Services;</p></li>
												<li><p>Report any activity it suspects to be in violation of any applicable law, statute or regulation to the appropriate authorities and to co-operate with such authorities;</p></li>
												<li><p>To request any information and data from you in connection with your use of the Services and/or access of the Platform at any time and to exercise our right under this paragraph if you refuse to divulge such information and/or data or if you provide or if we have reasonable grounds to suspect that you have provided inaccurate, misleading or fraudulent information and/or data.</p></li>

											</ul>
											<p><strong>2.5 Privacy Policy:</strong> Your use of the Services and/or access to the Platform is also subject to the Privacy Policy </p>
											<p><strong>2.6 Additional terms:</strong> In addition to these Terms of Service, the use of specific aspects of the Materials and Services, more comprehensive or updated versions of the Materials offered by us or our designated sub-contractors, may be subject to additional terms and conditions, which will apply in full force and effect.</p>
										</div>
										<div className="clause">
											<h5>3. Use of Services</h5>
											<p><strong>3.1	Application of this Clause:</strong> In addition to all other terms and conditions of these Terms of Service, the provisions in this Clause 3 are the additional specific terms and conditions governing your use of the Services.</p>
											<p><strong>3.2	Restrictions:</strong> Use of the Services is limited to authorized Customers that are of legal age and who have the legal capacity to enter into and form contracts under any applicable law. Customers who have breached or are in breach of the terms and conditions contained herein and Customers who have been permanently or temporarily suspended from use of any of the Services may not use the Services even if they satisfy the requirements of this Clause 3.2.</p>
											<p><strong>3.3	General Terms of Service:</strong> You agree:</p>
											<ul>
												<li><p>To access and/or use the Services only for lawful purposes and in a lawful manner at all times and further agree to conduct any activity relating to the Services in good faith;</p></li>
												<li><p>To ensure that any information or data you post or cause to appear on the Platform in connection with the Services is accurate and agree to take sole responsibility for such information and data.</p></li>
											</ul>
											<p><strong>3.4 Loan description:</strong> While we endeavor to provide an accurate description of the Loans, we do not warrant that such description is accurate, current or free from error.</p>
											<p><strong>3.5 Interest Rate of Loans:</strong> All Listing Interest Rates are subject to taxes, unless otherwise stated. We reserve the right to amend the Listing Interest Rate at any time without giving any reason or prior notice.</p>
											<p><strong>3.6 Borrowers:</strong> You acknowledge that parties other than Danakita (i.e. borrowers) list Loans on the Platform. For the avoidance of doubt, each agreement entered into for the investment in a Borrower’s Loan to a Customer shall be an agreement entered into directly and only between the Borrower and the Customer.</p>
										</div>
										<div className="clause">
											<h5>4. Customers with Danakita accounts</h5>
											<p><strong>4.1	Username/Password:</strong> Certain Services that may be made available on the Platform may require creation of an account with us or for you to provide Personal Data. If you request to create an account with us, a Username and Password may either be: (i) determined and issued to you by us; or (ii) provided by you and accepted by us in our sole and absolute discretion in connection with the use of the Services and/or access to the relevant Platform. We may at any time in our sole and absolute discretion, request that you update your Personal Data or forthwith invalidate the Username and/or Password without giving any reason or prior notice and shall not be liable or responsible for any Losses suffered by or caused by you or arising out of or in connection with or by reason of such request or invalidation. You hereby agree to change your Password from time to time and to keep the Username and Password confidential and shall be responsible for the security of your account and liable for any disclosure or use (whether such use is authorized or not) of the Username and/or Password. You are to notify us immediately if you have knowledge that or have reason for suspecting that the confidentiality of the Username and/or Password has been compromised or if there has been any unauthorized use of the Username and/or Password or if your Personal Data requires updating.</p>
											<p><strong>4.2	Purported use/access:</strong> You agree and acknowledge that any use of the Services and/or any access to the Platform and any information, data or communications referable to your Username and Password shall be deemed to be, as the case may be:</p>
											<ul>
												<li><p>Access to the relevant Platform and/or use of the Services by you; or</p></li>
												<li><p>Information, data or communications posted, transmitted and validly issued by you.</p></li>
											</ul>
											<p>You agree to be bound by any access of the Platform and/or use of any Services (whether such access or use are authorized by you or not) and you agree that we shall be entitled (but not obliged) to act upon, rely on or hold you solely responsible and liable in respect thereof as if the same were carried out or transmitted by you. You further agree and acknowledge that you shall be bound by and agree to fully indemnify us against any and all Losses attributable to any use of any Services and/or or access to the Platform referable to your Username and Password.</p>
										</div>
										<div className="clause">
											<h5>5. Intellectual property</h5>
											<p><strong>5.1 Ownership:</strong> The Intellectual Property in and to the Platform and the Materials are owned, licensed to or controlled by us, our licensors or our service providers. We reserve the right to enforce its Intellectual Property to the fullest extent of the law.</p>
											<p><strong>5.2 Restricted use:</strong> No part or parts of the Platform, or any Materials may be reproduced, reverse engineered, decompiled, disassembled, separated, altered, distributed, republished, displayed, broadcast, hyperlinked, mirrored, framed, transferred or transmitted in any manner or by any means or stored in an information retrieval system or installed on any servers, system or equipment without our prior written permission or that of the relevant copyright owners. Subject to Clause 5.3, permission will only be granted to you to download, print or use the Materials for personal and non-commercial uses, provided that you do not modify the Materials and that we or the relevant copyright owners retain all copyright and other proprietary notices contained in the Materials.</p>
											<p><strong>5.3 Trademarks:</strong> The Trademarks are registered and unregistered trademarks of us or third parties. Nothing on the Platform and in these Terms of Service shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use (including as a meta tag or as a “hot” link to any other website) any Trademarks displayed on the Services, without our written permission or any other applicable trademark owner.</p>
										</div>
										<div className="clause">
											<h5>6. Our limitation of responsibility and liability</h5>
											<p><strong>6.1 No representations or warranties:</strong> The Services, the Platform and the Materials are provided on an “as is” and “as available” basis. All data and/or information contained in the Platform, the Services or the Materials are provided for informational purposes only. No representations or warranties of any kind, implied, express or statutory, including the warranties of non-infringement of third party rights, title, merchantability, satisfactory quality or fitness for a particular purpose, are given in conjunction with the Platform, the Services or the Materials. Without prejudice to the generality of the foregoing, we do not warrant:</p>
											<ul>
												<li><p>The accuracy, timeliness, adequacy, commercial value or completeness of all data and/or information contained in the Platform, the Services or the Materials;</p></li>
												<li><p>That the Platform, the Services or that any of the Materials will be provided uninterrupted, secure or free from errors or omissions, or that any identified defect will be corrected;</p></li>
												<li><p>That the Platform, the Services or the Materials are free from any computer virus or other malicious, destructive or corrupting code, agent, program or macros; and</p></li>
												<li><p>The security of any information transmitted by you or to you through the Platform or the Services, and you accept the risk that any information transmitted or received through the Services or the Platform may be accessed by unauthorized third parties and/or disclosed by us or our officers, employees or agents to third parties purporting to be you or purporting to act under your authority. Transmissions over the Internet and electronic mail may be subject to interruption, transmission blackout, delayed transmission due to internet traffic or incorrect data transmission due to the public nature of the Internet.</p></li>
											</ul>
											<p>
												<strong>6.2 Exclusion of liability:</strong> Danakita shall not be liable to you for any Losses whatsoever or howsoever caused (regardless of the form of action) arising directly or indirectly in connection with:
        				</p>
											<ul>
												<li><p>Any access, use and/or inability to use the Platform or the Services;</p></li>
												<li><p>Reliance on any data or information made available through the Platform and/or through the Services. You should not act on such data or information without first independently verifying its contents;</p></li>
												<li><p>Any system, server or connection failure, error, omission, interruption, delay in transmission, computer virus or other malicious, destructive or corrupting code, agent program or macros; and</p></li>
												<li><p>Any use of or access to any other website or webpage linked to the Platform, even if we or our officers or agents or employees may have been advised of, or otherwise might have anticipated, the possibility of the same.</p></li>
											</ul>
											<p>
												<strong>6.3 At your own risk:</strong> Any risk of misunderstanding, error, damage, expense or Losses resulting from the use of the Platform is entirely at your own risk and we shall not be liable therefor.
        				</p>
										</div>
										<div className="clause">
											<h5>7. Hyperlinks, alerts and advertising</h5>
											<p><strong>7.1 Hyperlinks:</strong> For your convenience, we may include hyperlinks to other websites or content on the Internet that are owned or operated by third parties. Such linked websites or content are not under our control and we are not liable for any errors, omissions, delays, defamation, libel, slander, falsehood, obscenity, pornography, profanity, inaccuracy or any other objectionable material contained in the contents, or the consequences of accessing, any linked website. Any hyperlinks to any other websites or content are not an endorsement or verification of such websites or content and you agree that your access to or use of such linked websites or content is entirely at your own risk.</p>
											<p>
												<strong>7.2 Advertising:</strong> We may attach banners, java applets and/or such other materials to the Platform for the purposes of advertising our or our Third Party Vendors’ products and/or services. For the avoidance of doubt, you shall not be entitled to receive any payment, fee and/or commission in respect of any such advertising or other promotional materials.
        				</p>
										</div>
										<div className="clause">
											<h5>8. Your submissions and information</h5>
											<p><strong>8.1	Submissions by you:</strong> You grant us a non-exclusive license to use the materials or information that you submit to the Platform and/or provide to us, including but not limited to, questions, reviews, comments, and suggestions (collectively, “Submissions”). When you post comments or reviews to the Platform, you also grant us the right to use the name that you submit or your Username in connection with such review, comment, or other content. You shall not use a false e-mail address, pretend to be someone other than yourself or otherwise mislead us or third parties as to the origin of any Submissions. We may, but shall not be obligated to, publish, remove or edit your Submissions.</p>
											<p><strong>8.2	Consent to receive e-mails:</strong> You consent to and authorize the use by us of any information provided by you (including Personal Data) for the purposes of sending informational and promotional e-mails to you. Your agreement to the provisions of this Clause 8.2 shall constitute your consent for the purpose of the provisions of any spam control laws (whether in Indonesia or elsewhere). You may subsequently opt out of receiving promotional e-mails by clicking on the appropriate hyperlink in any promotional e-mail.</p>

											<p><strong>8.3	Privacy Policy:</strong> You acknowledge that you have read and agree to the Privacy Policy at (insert url) consent to our collection, use and disclosure of your Personal Data for the purposes as set out in the Privacy Policy.</p>
										</div>
										<div className="clause">
											<h5>9. Termination</h5>
											<p><strong>9.1	Termination by us:</strong> In our sole and absolute discretion, we may with immediate effect upon giving you notice, terminate your use of the Platform and/or Services and/or disable your Username and Password. We may bar access to the Platform and/or Services (or any part thereof) for any reason whatsoever, including a breach of any of these Terms of Service or where if we believe that you have violated or acted inconsistently with any terms or conditions set out herein, or if in our opinion or the opinion of any regulatory authority, it is not suitable to continue providing the services relating to the Platform.</p>
											<p><strong>9.2 Termination by You:</strong> You may terminate these Terms and Conditions of Use by giving notice in writing within seven (7) working days to us.</p>
											<p><strong>9.3</strong>	For the purpose of this termination, you and Danakita agreed to waive the provisions set forth in Article 1266 of the Civil Code Indonesia so that the termination will be made without the approval or decision of a court or other institution in the territory of the Republic of Indonesia.</p>
										</div>
										<div className="clause">
											<h5>10. Notices</h5>
											<p><strong>10.1 Notices from us:</strong> All notices or other communications given to you if:</p>
											<ul>
												<li><p>Communicated through any print or electronic media as we may select will be deemed to be notified to you on the date of publication or broadcast; or;</p></li>
												<li><p>Sent by post or left at your last known address will be deemed to be received by you on the day following such posting or on the day when it was so left.</p></li>
											</ul>
											<p><strong>10.2	Notices from you:</strong> You may only give notice to us in writing sent to our designated address or e-mail address, and we shall be deemed to have received such notice only upon receipt. While we endeavor to respond promptly to notices from you, we cannot guarantee that we will always respond with consistent speed.</p>
											<p><strong>10.3	Other modes:</strong> Notwithstanding Clauses 10.1 and 10.2, we may from time to time designate other acceptable modes of giving notices (including but not limited to e-mail or other forms of electronic communication) and the time or event by which such notice shall be deemed given.</p>
										</div>
										<div className="clause">
											<h5>11. General</h5>
											<p><strong>11.1	Cumulative rights and remedies:</strong> Unless otherwise provided under these Terms of Service, the provisions of these Terms of Service and our rights and remedies under these Terms of Service are cumulative and are without prejudice and in addition to any rights or remedies we may have in law or in equity, and no exercise by us of any one right or remedy under these Terms of Service, or at law or in equity, shall (save to the extent, if any, provided expressly in these Terms of Service or at law or in equity) operate so as to hinder or prevent our exercise of any other such right or remedy as at law or in equity.</p>

											<p><strong>11.2	No waiver:</strong> Our failure to enforce these Terms of Service shall not constitute a waiver of these terms, and such failure shall not affect the right later to enforce these Terms of Service. We would still be entitled to use our rights and remedies in any other situation where you breach these Terms of Service.</p>

											<p><strong>11.3	Severability:</strong> If at any time any provision of these Terms of Service shall be or shall become illegal, invalid or unenforceable in any respect, the legality, validity and enforceability of the remaining provisions of this Agreement shall not be affected or impaired thereby, and shall continue in force as if such illegal, invalid or unenforceable provision was severed from these Terms of Service.</p>

											<p><strong>11.4	Third Party Rights:</strong> A person or party who is not a party that is subject to the Terms and Conditions of Use, is not entitled under any law and any jurisdiction to enforce any term of these Terms and Conditions of Use. For the avoidance of doubt, nothing in this clause shall affect the rights of any permitted transfer of the Terms and Conditions of Use.</p>


											<p><strong>11.5	Governing law:</strong> Use of Platform and / or Service and Terms & Conditions of Use shall be governed by and construed in accordance with the laws of the Republic of Indonesia and the exclusive jurisdiction of the courts of South Jakarta.</p>

											<p><strong>11.6	Injunctive relief:</strong> We may seek immediate injunctive relief if we make a good faith determination that a breach or non-performance is such that a temporary restraining order or other immediate injunctive relief is the only appropriate or adequate remedy.</p>

											<p><strong>11.7	Amendments:</strong> We may by notice through the Platform or by such other method of notification as we may designate (which may include notification by way of e-mail), vary the terms and conditions of these Terms of Service, such variation to take effect on the date we specify through the above means. If you use the Platform or the Services after such date, you are deemed to have accepted such variation. If you do not accept the variation, you must stop access or using the Platform and the Services and terminate these Terms of Service. Our right to vary these Terms of Service in the manner aforesaid will be exercised with may be exercised without the consent of any person or entity who is not a party to these Terms of Service.</p>

											<p><strong>11.8	Correction of errors:</strong> Any typographical, clerical or other error or omission in any acceptance, invoice or other document on our part shall be subject to correction without any liability on our part.</p>

											<p><strong>11.9	Currency:</strong> Money references under these Terms of Service are denominated in Indonesian Rupiah.</p>

											<p><strong>11.10 Language:</strong> In the event that these Terms of Service is executed or translated in any language other than English ("Foreign Language Version"), the English language version of these Terms of Service shall govern and shall take precedence over the Foreign Language Version.</p>

											<p><strong>11.11 Entire agreement:</strong> These Terms of Service shall constitute the entire agreement between you and us relating to the subject matter hereof and supersedes and replaces in full all prior understandings, communications and agreements with respect to the subject matter hereof.</p>

											<p><strong>11.12 Binding and conclusive:</strong> You acknowledge and agree that any records (including records of any telephone conversations relating to the Services, if any) maintained by us or our service providers relating to or in connection with the Platform and Services shall be binding and conclusive on you for all purposes whatsoever and shall be conclusive evidence of any information and/or data transmitted between us and you. You hereby agree that all such records are admissible in evidence and that you shall not challenge or dispute the admissibility, reliability, accuracy or the authenticity of such records merely on the basis that such records are in electronic form or are the output of a computer system, and you hereby waive any of your rights, if any, to so object.</p>

											<p><strong>11.13 Sub-contracting and delegation:</strong> We reserve the right to delegate or sub-contract the performance of any of our functions in connection with the Platform and/or Services and reserve the right to use any service providers, subcontractors and/or agents on such terms as we deem appropriate.</p>

											<p><strong>11.14 Assignment:</strong> You may not assign your rights under these Terms of Service without our prior written consent. We may assign our rights under these Terms of Service to any third party.</p>

											<p><strong>11.15 Force Majeure:</strong> We shall not be liable for non-performance, error, interruption or delay in the performance of its obligations under these Terms of Service (or any part thereof) or for any inaccuracy, unreliability or unsuitability of the Platform's and/or Services’ contents if this is due, in whole or in part, directly or indirectly to an event or failure which is beyond our reasonable control.</p>

										</div>
										<div className="clause">
											<h5>12. Definitions and Interpretation</h5>
											<p><strong>Definitions. Unless the context otherwise requires, the following expressions shall have the following meanings in these Terms of Service:</strong></p>

											<p><strong>12.1</strong> “Customer” means the authorized user of the Platform and / or Service.</p>

											<p><strong>12.2</strong> “Intellectual Property” means all copyright, patents, utility innovations, trade marks and service marks, geographical indications, domain names, layout design rights, registered designs, design rights, database rights, trade or business names, rights protecting trade secrets and confidential information, rights protecting goodwill and reputation, and all other similar or corresponding proprietary rights and all applications for the same, whether presently existing or created in the future, anywhere in the world, whether registered or not, and all benefits, privileges, rights to sue, recover damages and obtain relief or other remedies for any past, current or future infringement, misappropriation or violation of any of the foregoing rights.</p>

											<p><strong>12.3</strong> “Danakita Indemnitees” means Danakita and all of its respective officers, employees, directors, agents, contractors and assigns.</p>

											<p><strong>12.4</strong> “Danakita”, “we”, “our” and “us” refer to PT Danakita Data Prima, a company incorporated under the laws of the Republic of Indonesia, having its registered address at: Menara Rajawali, 11th Floor, Jl. Dr. Ide Anak Agung Gde Agung Lot#5.1, Kawasan Mega Kuningan, Jakarta 12950,  Indonesia</p>

											<p><strong>12.5</strong> “Listing Interest Rate” means the return Interest Rate of Loans listed for funding to Customers, as stated on the Platform.</p>

											<p><strong>12.6</strong> “Losses” means all penalties, losses, settlement sums, costs (including legal fees and expenses on a solicitor-client basis), charges, expenses, actions, proceedings, claims, demands and other liabilities, whether foreseeable or not.</p>

											<p><strong>12.7</strong>	“Materials” means, collectively, all web pages on the Platform, including the information, images, links, sounds, graphics, video, software, applications and other materials displayed or made available on the Platform and the functionalities or services provided on the Platform.</p>

											<p><strong>12.8</strong>	“Password” refers to the valid password that a Customer who has an account with Danakita may use in conjunction with the Username to access the relevant Platform and/or Services.</p>

											<p><strong>12.9</strong>	“Personal Data” means data, whether true or not, that can be used to identify, contact or locate you. Personal Data can include your name, e-mail address, billing address, shipping address, phone number and credit card information. “Personal Data” shall be deemed to include any data that you have provided to us when placing a transaction, regardless of whether you have an account with us.</p>

											<p><strong>12.10</strong> “Platform” means (a) both the web and mobile versions of the website operated and/or owned by Danakita which is presently located at the following URL: www.danakita.com; and (b) the mobile applications made available from time to time by Danakita, including the iOS and Android versions.</p>

											<p><strong>12.11</strong> “Privacy Policy” means the privacy policy set out at (insert url)</p>

											<p><strong>12.12</strong> “Loan” means a loan available for funding to Customers on the Platform.</p>

											<p><strong>12.13</strong> “Prohibited Material” means any information, graphics, photographs, data and/or any other material that:</p>

											<ul>
												<li><p>Contains any computer virus or other invasive or damaging code, program or macro;</p></li>
												<li><p>Infringes any third-party Intellectual Property or any other proprietary rights;</p></li>
												<li><p>Is defamatory, libelous or threatening;</p></li>
												<li><p>Obscene, pornographic, obscene, false, fraud, theft, malicious or illegal under applicable laws; and / or content offensive or inappropriate, based on our opinion.</p></li>
											</ul>

											<p><strong>12.14</strong>	“Services” means services, information and functions made available by us at the Platform.</p>

											<p><strong>12.15</strong>	“Submission” is as defined in Clause 8.1 of these Terms of Service.</p>

											<p><strong>12.16</strong>	“Terms of Service” means the recitals, Clauses 1 to 11 and any Schedules to these terms and conditions.</p>

											<p><strong>12.17</strong>	“Trademarks” means the trademarks, service marks, trade names and logos used and displayed on the Platform.</p>

											<p><strong>12.18</strong>	“Username” refers to the unique login identification name or code which identifies a Customer who has an account with Danakita.</p>
											<p><strong>12.19</strong>	“you” and “your” refer to the individuals over the age of 18.</p>


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
export default Terms;