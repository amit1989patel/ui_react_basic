import jQuery from 'jquery';
import $ from 'jquery';
import * as api from '../../tools/apiConfig';
import validate from 'jquery-validation';

export const FormValidationMd = function () {

    var handleValidationforKTP = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form1 = jQuery('#wizardform');
        var error1 = jQuery('.alert-danger', form1);
        var success1 = jQuery('.alert-success', form1);
        jQuery.validator.addMethod("regexForKtp", function (value, element) {
            return this.optional(element) || /^\d{0}([1][1-9]+)|^\d{0}([2][1]+)|^\d{0}([3][1-6]+)|^\d{0}([5][1-3]+)|^\d{0}([6][1-4]+)|^\d{0}([7][1-6]+)|^\d{0}([8][1-2]+)|^\d{0}([9][1]+)|^\d{0}([9][4]+)/i.test(value);
        }, "Please enter a valid KTP number.");
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            rules: {
                KTP: {
                    regexForKtp: true,
                    required: true,
                    minlength: 18
                }
            },

            messages: {
                KTP: {
                    minlength: "Please enter 16 digit KTP number.",
                    required: "Please enter KTP number."
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element);
                    // for other inputs, just perform default behavior
                }
            },

            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error');
            },
            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });
    }
    var handleValidationforOtherStatus = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form10 = jQuery('#other_status');
        var error10 = jQuery('.alert-danger', form10);
        var success10 = jQuery('.alert-success', form10);
        jQuery.validator.addMethod("regexForStatus", function (value, element) {
            return this.optional(element) || /^[a-zA-Z ]*$/i.test(value);
        }, "please enter valid characters");
        form10.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            rules: {
                status: {
                    regexForStatus: true,
                    required: true,
                }
            },
            // messages:{
            //     KTP:{
            //         minlength: "Please enter at least 16 digits."

            //     }
            // },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success10.hide();
                error10.show();
            },

            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element);
                    element.css('border-color', 'red'); // for other inputs, just perform default behavior
                }
            },

            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                success10.show();
                error10.hide();
            }
        });


    }
    var handleValidationforWizard2 = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form2 = jQuery('#wizard2');
        var error2 = jQuery('.alert-danger', form2);
        var success2 = jQuery('.alert-success', form2);
        // jQuery.validator.addMethod("regexforFullName", function (value, element) {
        //     return this.optional(element) ||  /^[a-zA-Z ]*$/i.test(value);
        // }, "Invalid name ");
        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                salary: {
                    required: true,
                }
            },
            messages: {
                salary: {
                    required: "Please enter your monthly salary."
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success2.hide();
                error2.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success2.show();
                error2.hide();
            }
        });
    }
    var handleValidationforWizard7 = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form2 = jQuery('#wizard7');
        var error2 = jQuery('.alert-danger', form2);
        var success2 = jQuery('.alert-success', form2);
        jQuery.validator.addMethod("regexforFullName", function (value, element) {
            return this.optional(element) || /^[a-zA-Z ]*$/i.test(value);
        }, "Invalid name ");
        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                fullname: {
                    regexforFullName: true,
                    required: true
                }
            },
            messages: {
                fullname: {
                    required: "Please enter your name."
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success2.hide();
                error2.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success2.show();
                error2.hide();
            }
        });
    }
    var handleValidationforWizard4 = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form1 = jQuery('#wizard4');
        var error1 = jQuery('.alert-danger', form1);
        var success1 = jQuery('.alert-success', form1);
        jQuery.validator.addMethod("regexforPhone", function (value, element) {
            return this.optional(element) || /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/i.test(value);
        }, "Invalid phone number");
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                phonenumber: {
                    minlength: 15,
                    required: true
                }
            },
            messages: {
                phonenumber: {
                    minlength: "Please enter a valid phone number.",
                    required: "Please enter the phone number."
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });
    }
    var handleValidationforPIN = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form1 = jQuery('#PINVerify');
        var error1 = jQuery('.alert-danger', form1);
        var success1 = jQuery('.alert-success', form1);
        // jQuery.validator.addMethod("regexforPhone", function (value, element) {
        //     return this.optional(element) ||   /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/i.test(value);
        // }, "Invalid phone number");
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                PIN: {
                    minlength: 6,
                    required: true,
                    number: true
                }
            },
            messages: {
                PIN: {
                    minlength: "Please enter 6 digit pin code",
                    required: "Please enter the pin.",
                    number: "Please enter a valid pin code"
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });
    }
    var handleValidationforContactInfo = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form4 = jQuery('#contact_info');
        var error = jQuery('.alert-danger', form4);
        var success4 = jQuery('.alert-success', form4);
        jQuery.validator.addMethod("regexforContactPage", function (value, element) {
            return this.optional(element) || /\d|[a-z\@\.\_\ ]/i.test(value);
        }, "Invalid email");
        // jQuery.validator.addMethod("regexforaddress", function (value, element) {
        //     return this.optional(element) || /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
        // }, "Invalid email");
        // jQuery.validator.addMethod("regexforProvince", function (value, element) {
        //     return this.optional(element) || /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
        // }, "Invalid email");
        // jQuery.validator.addMethod("regexforRegency", function (value, element) {
        //     return this.optional(element) || /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
        // }, "Invalid email");
        // jQuery.validator.addMethod("regexforDistrict", function (value, element) {
        //     return this.optional(element) || /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
        // }, "Invalid email");
        // jQuery.validator.addMethod("regexforVillage", function (value, element) {
        //     return this.optional(element) || /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
        // }, "Invalid email");
        form4.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                email: {
                    regexforContactPage: true,
                    required: true,
                    email: true
                },
                //  address: {
                //     regexforContactPage: true,
                // },
                //  province: {
                //     regexforContactPage: true,
                // },
                //  regency: {
                //     regexforContactPage: true,
                // },
                //  district: {
                //     regexforContactPage: true,
                // },
                //  village: {
                //     regexforContactPage: true,
                // },
                postalcode: {
                    digits: true,
                    required: true,
                    minlength: 5,
                    maxlength: 5,
                    remote: function () {
                        var c = {
                            type: "POST",
                            url: api.VERIFY_ZIP,
                            contentType: "application/json",
                            dataType: "json",
                            data: JSON.stringify({ postal_code: jQuery("#postal_code").val() })
                        }
                        return c;
                    },
                }
            },
            messages: {
                postalcode: {
                    minlength: "Please enter five digits.",
                    remote: "Please enter valid postal code."
                },
                email: {
                    required: "please enter your email address."
                },
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                success4.hide();
                error.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success4.show();
                error.hide();
            }
        });
    }
    var handleValidationforLoanInfo = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form1 = jQuery('#loaninfo');
        var error1 = jQuery('.alert-danger', form1);
        var success1 = jQuery('.alert-success', form1);
        jQuery.validator.addMethod("regexforLoanInfo", function (value, element) {
            return this.optional(element) || /^[a-zA-Z\s]*$/i.test(value);
        }, "Please enter valid characters");
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                purpose: {
                    regexforLoanInfo: true,
                    required: true
                },
                reason_loan: {
                    regexforLoanInfo: true,
                    required: true
                }
            },
            messages: {
                purpose: {
                    required: "Please enter purpose of loan."
                },
                reason_loan: {
                    required: "Please enter some details."
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });
    }
    var handleValidationforEmpInfo = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form1 = jQuery('#employment_info');
        var error1 = jQuery('.alert-danger', form1);
        var success1 = jQuery('.alert-success', form1);
        jQuery.validator.addMethod("regexforcompanyPhone", function (value, element) {
            return this.optional(element) || /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/i.test(value);
        }, "Please enter a valid phone number");
        jQuery.validator.addMethod("regexforCommonField", function (value, element) {
            return this.optional(element) || /^[a-zA-Z ]*$/i.test(value);
        }, "Invalid format ");
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                occupation: {
                    regexforCommonField: true
                },
                companyname: {
                    regexforCommonField: true
                },
                companysector: {
                    regexforCommonField: true
                },
                companyaddress: {
                    regexforCommonField: true
                },
                companycountry: {
                    regexforCommonField: true
                },
                companydistrict: {
                    regexforCommonField: true
                },
                companyregency: {
                    regexforCommonField: true
                },
                companyprovince: {
                    regexforCommonField: true
                },
                companymanagername: {
                    regexforCommonField: true
                },
                jobtitle: {
                    regexforCommonField: true
                },
                monthlyotherincome: {
                    regexforCommonField: true
                },
                companyphone: {
                    minlength: 15,
                },
                postalcode: {
                    digits: true,
                    required: true,
                    minlength: 5,
                    maxlength: 5,
                    remote: function () {
                        var c = {
                            type: "POST",
                            url: api.VERIFY_ZIP,
                            contentType: "application/json",
                            dataType: "json",
                            data: JSON.stringify({ postal_code: jQuery("#postal_code").val() })
                        }
                        return c;
                    },
                }
            },
            messages: {
                postalcode: {
                    minlength: "Please enter five digits.",
                    remote: "Please enter valid postal code."
                },
                companyphone: {
                    minlength: "Please enter a valid phone number.",
                    //required: "Please enter the phone number."
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });
    }
    var handleValidationforRelativeInfo = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form1 = jQuery('#relative_info');
        var error1 = jQuery('.alert-danger', form1);
        var success1 = jQuery('.alert-success', form1);
        jQuery.validator.addMethod("relative_KTP", function (value, element) {
            return this.optional(element) || /^\d{0}([1][1-9]+)|^\d{0}([2][1]+)|^\d{0}([3][1-6]+)|^\d{0}([5][1-3]+)|^\d{0}([6][1-4]+)|^\d{0}([7][1-6]+)|^\d{0}([8][1-2]+)|^\d{0}([9][1]+)|^\d{0}([9][4]+)/i.test(value);
        }, "plese enter a valid ktp number");
        jQuery.validator.addMethod("regexforZip", function (value, element) {
            return this.optional(element) || /[0-9]{2,3}$/i.test(value);
        }, "plese enter a valid format of zip code");
        jQuery.validator.addMethod("phone", function (value, element) {
            return this.optional(element) || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(value);
        }, "plese enter a valid phone number");
        jQuery.validator.addMethod("zip", function (value, element) {
            return this.optional(element) || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(value);
        }, "plese enter a valid zip code");
        jQuery.validator.addMethod("regexforCommonFieldName", function (value, element) {
            return this.optional(element) || /^[a-zA-Z ]*$/i.test(value);
        }, "Invalid format ");
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                name: {
                    regexforCommonFieldName: true
                },
                spouse_name: {
                    regexforCommonFieldName: true
                },
                companyname: {
                    regexforCommonFieldName: true
                },
                spouse_occupation: {
                    regexforCommonFieldName: true
                },
                spouse_address: {
                    regexforCommonFieldName: true
                },
                spouse_district: {
                    regexforCommonFieldName: true
                },
                spouse_regency: {
                    regexforCommonFieldName: true
                },
                spouse_province: {
                    regexforCommonFieldName: true
                },
                spouse_country: {
                    regexforCommonFieldName: true
                },
                relative_name: {
                    regexforCommonFieldName: true
                },
                relative_phone: {
                    minlength: 15,
                },
                relative_relationship: {
                    regexforCommonFieldName: true
                },
                relative_occupation: {
                    regexforCommonFieldName: true
                },
                relative_address: {
                    regexforCommonFieldName: true
                },
                relative_district: {
                    regexforCommonFieldName: true
                },
                relative_regency: {
                    regexforCommonFieldName: true
                },
                relative_province: {
                    regexforCommonFieldName: true
                },
                relative_KTP: {
                    relative_KTP: true,
                    required: true,
                    minlength: 18
                },
                relative_country: {
                    regexforCommonFieldName: true
                },
                zip: {
                    digits: true,
                    required: true,
                    minlength: 5,
                    maxlength: 5,
                    remote: function () {
                        var c = {
                            type: "POST",
                            url: api.VERIFY_ZIP,
                            contentType: "application/json",
                            dataType: "json",
                            data: JSON.stringify({ postal_code: jQuery("#relative_zip").val() })
                        }
                        return c;
                    },
                },
                spouse_phone: {
                    minlength: 15,
                },
                spouse_zip: {
                    digits: true,
                    required: true,
                    minlength: 5,
                    maxlength: 5,
                    remote: function () {
                        var c = {
                            type: "POST",
                            url: api.VERIFY_ZIP,
                            contentType: "application/json",
                            dataType: "json",
                            data: JSON.stringify({ postal_code: jQuery("#spouse_zip").val() })
                        }
                        return c;
                    },
                }
            },
            messages: {
                spouse_zip: {
                    minlength: "Please enter five digits.",
                    remote: "Please enter valid postal code."
                },
                spouse_phone: {
                    minlength: "Please enter a valid phone number.",
                    required: "Please enter the phone number."
                },
                relative_phone: {
                    minlength: "Please enter a valid phone number.",
                    required: "Please enter the phone number."
                },
                relative_zip: {
                    minlength: "Please enter five digits.",
                    remote: "Please enter valid postal code."
                },
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success1: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });
    }
    var handleValidationforLogin = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form1 = jQuery('#login_form');
        var error1 = jQuery('.alert-danger', form1);
        var success1 = jQuery('.alert-success', form1);
        jQuery.validator.addMethod("regexforloginEmail", function (value, element) {
            return this.optional(element) || /\d|[a-z\@\.\_\ ]/i.test(value);
        }, "Invalid email");
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                login_email: {
                    regexforloginEmail: true,
                    maxlength: 100,
                    required: true,
                    email: true
                },
                login_password: {
                    maxlength: 100,
                    required: true,
                }
            },
            messages: {
                login_email: {
                    required: "Please enter your email address."
                },
                login_password: {
                    required: "Please enter your password."
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });
    }
    var handleValidationForgotPassword = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form1 = jQuery('#forgotpassword_page');
        var error1 = jQuery('.alert-danger', form1);
        var success1 = jQuery('.alert-success', form1);
        jQuery.validator.addMethod("regexforForgotPasswordEmail", function (value, element) {
            return this.optional(element) || /\d|[a-z\@\.\_\ ]/i.test(value);
        }, "Invalid email");
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                password_forgot_email: {
                    regexforForgotPasswordEmail: true,
                    maxlength: 100,
                    required: true,
                    email: true
                }

            },
            messages: {
                password_forgot_email: {
                    required: "Please enter your email address."
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });
    }
    var toggleHtmlfunction = function () {
        $.fn.toggleHTML = function (a, b) {
            return this.html(function (_, html) {
                return $.trim(html) === a ? b : a;
            });
        }
        jQuery(".show_details").click(function () {
            jQuery(".loan_fields .loan_label , .pay_info_wrap , .review_note").slideToggle();
            jQuery('.show_details').toggleHTML('<i class="fa fa-angle-double-up"></i> Hide Details', '<i class="fa fa-angle-double-down"></i> Show Details');
        });
    }
    var handleValidationResetPassword = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form1 = jQuery('#account_activation');
        var error1 = jQuery('.alert-danger', form1);
        var success1 = jQuery('.alert-success', form1);
        // jQuery.validator.addMethod("regexforForgotPasswordEmail", function (value, element) {
        //     return this.optional(element) || /\d|[a-z\@\.\_\ ]/i.test(value);
        // }, "Invalid email");
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    maxlength: 100,
                    required: true,
                    email: true
                },
                userpassword: {
                    required: true
                },
                token: {
                    required: true
                }
            },
            messages: {
                username: {
                    required: "Please enter your email address."
                },
                userpassword: {
                    required: "Please enter password"
                },
                token: {
                    required: "Please enter token"
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });
    }
    var handleValidationChangePassword = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation
        var form1 = jQuery('#change_password');
        var error1 = jQuery('.alert-danger', form1);
        var success1 = jQuery('.alert-success', form1);
        // jQuery.validator.addMethod("regexforForgotPasswordEmail", function (value, element) {
        //     return this.optional(element) || /\d|[a-z\@\.\_\ ]/i.test(value);
        // }, "Invalid email");
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                oldpassword: {
                    required: true,
                },
                newpassword: {
                    required: true
                },
                confirm_password: {
                    equalTo: "#newpassword",
                    required: true
                },
            },
            messages: {
                oldpassword: {
                    required: "Please enter old password."
                },
                newpassword: {
                    required: "Please enter new password."
                },
                confirm_password: {
                    equalTo: "Password did not match.",
                    required: "Please re enter password"
                },
                token: {
                    required: "Please enter token.",
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                jQuery(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                jQuery(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });
    }
    var toggleSidebar = function () {
        jQuery(".menu_toggle").click(function () {
            jQuery("#sidebar_togg").addClass('nav-sm')
        });

    }
    return {
        //main function to initiate the module
        init: function () {
            handleValidationforKTP();
            handleValidationforOtherStatus();
            handleValidationforWizard7();
            handleValidationforPIN();
            handleValidationforWizard2();
            handleValidationforWizard4();
            handleValidationforContactInfo();
            handleValidationforLoanInfo();
            handleValidationforEmpInfo();
            handleValidationforLogin();
            handleValidationForgotPassword();
            handleValidationResetPassword();
            handleValidationforRelativeInfo();
            handleValidationChangePassword();
            //toggleHtmlfunction();
            toggleSidebar();
        }
    };
}();




