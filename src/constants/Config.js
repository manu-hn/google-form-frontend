import {
    FIRST_PAGE_FIELDS, ADDRESS_INFORMATION_FIELDS,
    IDENTIFICATION_DOCUMENTS, PROFESSIONAL_LINKS_AND_DOCUMENTS,
    EDUCATIONAL_DETAILS, ACKNOWLEDGEMENT_CONSENT, EMPLOYMENT_DETAILS, DOCUMENTS_RELATED_TO_EXPERIENCE,
    CURRENT_OFFERS, EMPLOYMENT_VERIFICATION_REFERENCE_CHECK, VERIFICATION_CONSENT
} from "@constants/Constants.js";

export const HEAD_TEXT = `Candidate Application Form - VYZEN`;

export const DESCRIPTIVE_HEADER_TEXT = `Please fill out the following details accurately to apply for the position..
 Ensure you upload necessary documents where required. Fields marked with an asterisk (*) are mandatory.`;

export const SUBMIT_DESCRIPTIVE_TEXT = `The name, email address and photo associated with your Google Account will be recorded when you upload files and submit this form`;
export const REQUIRED_INDICATE_TEXT = `* Indicates required question`

export const validate = values => {
    const errors = {};

    const requiredFields = [
        'firstName', 'lastName', 'contactNumber', 'alternateContactNumber',
        'emailID', 'dateOfBirth', 'nationality', 'currentResidentialAddress',
        'permanentResidentialAddress', 'currentLocation', 'preferredLocation',
        'age', 'gender', 'maritalStatus', 'bloodGroup', 'adhaarCardNumber',
        'panCardNumber', 'photograph', 'linkedIn', 'resume', 'socialLinks',
        'onlinePortfolioLink', 'skills', 'languagesKnown', 'educationCourse',
        'specialization', 'educationInstitution', 'yearOfCompletion',
        'passPercentage', 'proofOfEducationCompletion', 'anyCertifications',
        'certificationsObtained', 'certificationIssuingAuthority', 'certificationCompletionDate',
        'proofOfCertification', 'dateOfJoin', 'fresher', 'backgroundChecks',
        'drugAndAlcoholTest', 'criminalCases', 'acknowledge', 'totalExperience',
        'organizationName', 'jobTitle', 'empStartDate', 'empEndDate',
        'rolesAndResponsibilities', 'reasonForLeaving', 'currentCTC', 'expectedCTC',
        'noticePeriod', 'salarySlips', 'bankStatements', 'offerLetter',
        'incrementLetter', 'experienceCertificate', 'servingNoticePeriod', 'lastWorkingDate',
        'anyExistingOffers', 'existingOfferOrganizationName', 'proofOfExistingOffer',
        'haveYouAcceptedTheOffer', 'dateAcceptedTheOffer', 'proposedCTC'
    ];

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'This is a required question';
        }
    });

    if (values.emailID && !/\S+@\S+\.\S+/.test(values.emailID)) {
        errors.emailID = 'Email ID is invalid';
    }

    return errors;
};


export const config = {
    headers: {

        'Content-type': 'application/json',

    }
}

export const DOCS_ARRAY = [
    {
        id: "1doc",
        pageTitle: "",
        item: FIRST_PAGE_FIELDS,
    },
    {
        id: "2doc",
        pageTitle: "ADDRESS INFORMATION FIELDS",
        item: ADDRESS_INFORMATION_FIELDS,
    },
    {
        id: "3doc",
        pageTitle: "IDENTIFICATION DOCUMENTS",
        item: IDENTIFICATION_DOCUMENTS,
    },
    {
        id: "4doc",
        pageTitle: "PROFESSIONAL LINKS AND DOCUMENTS",
        item: PROFESSIONAL_LINKS_AND_DOCUMENTS,
    },
    {
        id: "5doc",
        pageTitle: "EDUCATIONAL DETAILS",
        item: EDUCATIONAL_DETAILS,
    },

    {
        id: "6doc",
        pageTitle: "EMPLOYMENT DETAILS",
        item: EMPLOYMENT_DETAILS,
    },
    {
        id: "7doc",
        pageTitle: "DOCUMENTS RELATED TO EXPERIENCE",
        item: DOCUMENTS_RELATED_TO_EXPERIENCE,
    },
    {
        id: "8doc",
        pageTitle: "CURRENT OFFERS",
        item: CURRENT_OFFERS,
    },
    {
        id: "9doc",
        pageTitle: "EMPLOYMENT VERIFICATION REFERENCE CHECK",
        item: EMPLOYMENT_VERIFICATION_REFERENCE_CHECK,
    },
    {
        id: "10doc",
        pageTitle: "EMPLOYMENT VERIFICATION REFERENCE CHECK",
        item: VERIFICATION_CONSENT,
    },
    {
        id: "11doc",
        pageTitle: "VERIFICATION CONSENT",
        item: ACKNOWLEDGEMENT_CONSENT,
    },

];