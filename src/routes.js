import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.jsx';
import LenderSection from './components/lender/lenderSection.component.jsx';
import layout from './components/shared/layout.component.jsx';
import Index from './components/index.jsx';
import Home from './components/home/home.component.jsx';
import about from './components/home/about.component.jsx';
import notFound from './components/home/404.component.jsx';
import contactUs from './components/home/contactUs.component.jsx';
import privacy from './components/home/privacy.component.jsx';
import terms from './components/home/terms.component.jsx';
import faq from './components/home/faq.component.jsx';
import ourTeam from './components/home/ourTeam.component.jsx';
import ourTeam2 from './components/home/ourTeam2.component.jsx';
import ourPartners from './components/home/ourPartners.component.jsx';
import Login from './components/login.component.jsx';
import signUp from './components/signup.component.jsx';
import forgotPassword from './components/forgotPassword.component.jsx';
import accountActivation from './components/accountActivation.component.jsx';
import changePassword from './components/lender/changePassword.component.jsx';
import resetPassword from './components/resetPassword.component.jsx';
import topnav from './components/shared/topnav.component.jsx';
import Wizard from './components/common/wizard.component.jsx';
import Wizard2 from './components/common/wizard2.component.jsx';
import Wizard3 from './components/common/wizard3.component.jsx';
import Wizard4 from './components/common/wizard4.component.jsx';
import Wizard5 from './components/common/wizard5.component.jsx';
import Wizard6 from './components/common/wizard6.component.jsx';
import Wizard7 from './components/common/wizard7.component.jsx';
import contactInfo from './components/common/contactinfo.component.jsx';
import LoanInfo from './components/common/loaninfo.component.jsx';
import userInfo from './components/common/userinfo.component.jsx';
import employmentInfo from './components/common/employmentinfo.component.jsx';
import relativeInfo from './components/common/relativeInfo.component.jsx';
import applicationStatus1 from './components/common/applicationStatus1.component.jsx';
import applicationProcess1 from './components/common/applicationProcess1.component.jsx';
import loanapplicationstatus1 from './components/common/loanapplicationStatus1.component.jsx';
import loanapplicationstatus2 from './components/common/loanapplicationStatus2.component.jsx';
import loanapplicationstatus3 from './components/common/loanapplicationStatus3.component.jsx';
import loanapplicationstatus4 from './components/common/loanapplicationStatus4.component.jsx';
import InterestInfo from './components/common/interestinfo.component.jsx';
import userProfile from './components/common/userProfile.component.jsx';
import ErrorPage from './components/common/404.component.jsx';
import dashboard from './components/lender/dashboard.component.jsx';
import lenderChoice from './components/lender/lender_step_1.component.jsx';
import toastr from 'toastr';
//isAuthorized function checks each route call 
//and determines access level for the user

function isAuthorized(nextState, replace, callback) {
    const token = localStorage.getItem('token');
    if (!token || token == undefined)
        replace('/Login')
    return callback()
}
function handleRedirect(nextState, replace, callback) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role == 'borrower')
        replace('/loanapplication_status_1')
    else if (token && role == 'lender')
        replace('/dashboard')
    return callback()
}
function handleLenderRedirection(nextState, replace, callback) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role == 'borrower')
        replace({
            pathname: '*',
        });
    return callback()
}
function handleBorrowerRedirection(nextState, replace, callback) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role == 'lender')
        replace({
            pathname: '*',
        });
    return callback()
}
export default (
    <Route component={App}>
        <Route path="/Login" component={Index}>
            <IndexRoute component={Login} onEnter={handleRedirect} />
            <Route path="/signUp" component={signUp} onEnter={handleRedirect} />
            <Route path="/forgotPassword" component={forgotPassword} />
            <Route path="/empInfo" component={employmentInfo} onEnter={isAuthorized} />
            <Route path="/relativeInfo" component={relativeInfo} onEnter={isAuthorized} />
            <Route path="/applicationStatus" component={applicationStatus1} onEnter={isAuthorized} />
            <Route path="/applicationProcess" component={applicationProcess1} onEnter={isAuthorized} />
            <Route path="/interestinfo" component={InterestInfo} onEnter={isAuthorized} />
            <Route path="/userProfile" component={userProfile} onEnter={isAuthorized} />
        </Route>
        <Route path="/wizard" component={topnav} onEnter={isAuthorized}>
            <IndexRoute component={Wizard} onEnter={handleBorrowerRedirection} />
            <Route path="/wizard2" component={Wizard2} onEnter={handleBorrowerRedirection} />
            <Route path="/wizard3" component={Wizard3} onEnter={handleBorrowerRedirection} />
            <Route path="/wizard4" component={Wizard4} onEnter={handleBorrowerRedirection} />
            <Route path="/wizard5" component={Wizard5} onEnter={handleBorrowerRedirection} />
            <Route path="/wizard6" component={Wizard6} onEnter={handleBorrowerRedirection} />
            <Route path="/wizard7" component={Wizard7} onEnter={handleBorrowerRedirection} />
            <Route path="/contactInfo" component={contactInfo} onEnter={handleBorrowerRedirection} />
            <Route path="/LoanInfo" component={LoanInfo} onEnter={handleBorrowerRedirection} />
            <Route path="/userInfo" component={userInfo} onEnter={handleBorrowerRedirection} />
            <Route path="/loanapplication_status_1" component={loanapplicationstatus1} onEnter={handleBorrowerRedirection} />
            <Route path="/loanapplication_status_2" component={loanapplicationstatus2} onEnter={handleBorrowerRedirection} />
            <Route path="/loanapplication_status_3" component={loanapplicationstatus3} onEnter={handleBorrowerRedirection} />
             <Route path="/loanapplication_status_4" component={loanapplicationstatus4} onEnter={handleBorrowerRedirection} />
        </Route>
        <Route path="/" component={layout} onEnter={handleRedirect}>
            <IndexRoute component={Home} />
            <Route path="/about" component={about} />
            <Route path="/faq" component={faq} />
            <Route path="/contactUs" component={contactUs} />
            <Route path="/privacy" component={privacy} />
            <Route path="/notFound" component={notFound} />
            <Route path="/terms" component={terms} />
            <Route path="/ourteam" component={ourTeam} />
            <Route path="/ourteam2" component={ourTeam2} />
            {/*<Route path="/ourpartners" component={ourPartners} />*/}
        </Route>
        <Route path="/dashboard" component={LenderSection} onEnter={isAuthorized}>
            <IndexRoute component={dashboard} onEnter={handleLenderRedirection} />
            <Route path="/changePassword" component={changePassword} onEnter={handleLenderRedirection}/>
            <Route path="/lender_step_1" component={lenderChoice} onEnter={handleLenderRedirection}/>
        </Route>
        <Route path="/accountActivation" component={accountActivation} />
        <Route path="/resetPassword" component={resetPassword} />
        <Route path="*" >
            <IndexRoute component={notFound} />
        </Route>
    </Route>

);