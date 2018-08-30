//constants for api URL
var base_url = 'http://172.10.57.101:8000/';

export const SIGNUP_USER = base_url + 'api/v1/user/signup';

export const LOGIN_USER = base_url + 'api/v1/user/login';

export const SAVE_KTP = base_url + 'api/v1/user/voterApiDetail';

export const SAVE_PERSONALDETAILS = base_url + 'api/v1/user/SaveUserDetail';

export const SAVE_STATUS = base_url + 'api/v1/loan/saveBorrowerEmpDetail';

export const GET_STATUS = base_url + 'api/v1/loan/getBorrowerEmpDetail';

export const GET_EMPINFO = base_url + 'api/v1/loan/getEmpDetail';

export const SAVE_EMPINFO = base_url + 'api/v1/loan/saveEmpDetail';

export const GET_RELATIVEINFO = base_url + 'api/v1/loan/getRelativeDetail';

export const SAVE_RELATIVEINFO = base_url + 'api/v1/loan/saveRelativeDetail';

export const COMPLETE_USERINFO = base_url + 'api/v1/user/completeLoan';

export const GET_KTP_DETAILS = base_url + 'api/v1/user/getVoterApiDetail';

export const GET_PHONENUM = base_url + 'api/v1/user/getPhoneNo';

export const REGISTER_PHONE = base_url + 'api/v1/user/registerPhone';

export const VERIFY_PHONE = base_url + 'api/v1/user/verifyPhone';

export const SAVE_CONTACTINFO = base_url + 'api/v1/user/saveAddress';

export const GET_CONTACTINFO = base_url + 'api/v1/user/getAddress';

export const SAVE_LOANINFO = base_url + 'api/v1/loan/createloan';

export const GET_LOANINFO = base_url + 'api/v1/loan/getLoanDetail';

export const ACCOUNT_ACTIVATION = base_url + 'api/v1/user/verifyAccount';

export const LENDER_LOGIN = base_url + 'api/v1/user/lenderLogin';

export const FORGOT_PASSWORD = base_url + 'api/v1/user/forgotPassword';

export const RESET_PASSWORD = base_url + 'api/v1/user/resetPassword';

export const CHANGE_PASSWORD = base_url + 'api/v1/user/changePassword';

export const UPLOAD_IMAGE = base_url + 'api/v1/upload/docUpload';

export const VERIFY_ZIP = base_url + 'api/v1/user/validateZip';