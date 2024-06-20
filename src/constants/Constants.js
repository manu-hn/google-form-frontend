

export const HEAD_TEXT = `Candidate Application Form - VYZEN`;

export const DESCRIPTIVE_HEADER_TEXT = `Please fill out the following details accurately to apply for the position..
 Ensure you upload necessary documents where required. Fields marked with an asterisk (*) are mandatory.`;

export const SUBMIT_DESCRIPTIVE_TEXT = `The name, email address and photo associated with your Google Account will be recorded when you upload files and submit this form`;
export const REQUIRED_INDICATE_TEXT = `* Indicates required question`

export const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'This is a required question';
    }

    if (!values.lastName) {
        errors.lastName = 'This is a required question';
    }

    if (!values.contactNumber) {
        errors.contactNumber = 'This is a required question';
    }
    if (!values.alternateContactNumber) {
        errors.alternateContactNumber = 'This is a required question';
    }

    if (!values.emailID) {
        errors.emailID = 'This is a required question';
    } else if (!/\S+@\S+\.\S+/.test(values.emailID)) {
        errors.emailID = 'Email ID is invalid';
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = 'This is a required question';
    }

    if (!values.nationality) {
        errors.nationality = 'This is a required question';
    }

    if (!values.emailChecked) {
        errors.emailChecked = 'This is a required question';
    }

    if (!values.currentResidentialAddress) {
        errors.currentResidentialAddress = 'This is a required question';
    }
    if (!values.permanentResidentialAddress) {
        errors.permanentResidentialAddress = 'This is a required question';
    }
    if (!values.currentLocation) {
        errors.currentLocation = 'This is a required question';
    }
    if (!values.preferredLocation) {
        errors.preferredLocation = 'This is a required question';
    }
    return errors;
};


export const FIRST_PAGE_FIELDS = [

    {
        id: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Your Answer",
        description: "Description: Enter your first name.",
        required: true,
    },
    {
        id: "middleName",
        label: "Middle Name",
        type: "text",
        placeholder: "Your Answer",
        description: "Description: Enter your Middle name.",
        required: false,
    },
    {
        id: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Your Answer",
        description: "Description: Enter your Last name.",
        required: true,
    },
    {
        id: "contactNumber",
        label: "Contact Number",
        type: "text",
        placeholder: "Your Answer",
        description: "Description: Enter your primary contact number. Format: +(Country Code) [Number]",
        required: true,
    },
    {
        id: "alternateContactNumber",
        label: "Alternate Contact Number",
        type: "text",
        placeholder: "Your Answer",
        description: "Description: Enter an alternate contact number. Format: +(Country Code) [Number]",
        required: true,
    },
    {
        id: "emailID",
        label: "Email ID",
        type: "text",
        placeholder: "Your Answer",
        description: "Description: Enter your email address. Format: example@example.com.",
        required: true,
    },
    {
        id: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        placeholder: "Your Answer",
        description: "Description: Select your date of birth from the calendar.",
        required: true,
    },
    {
        id: "age",
        label: "Age",
        type: "number",
        placeholder: "Your Answer",
        description: "Description: Enter your age. Format: 25",
        required: true,
    },

    {
        id: "gender",
        label: "Gender",
        type: "radio",
        placeholder: "",
        description: "",
        options: ['Male', 'Female', 'Prefer Not To Say'],
        required: true,

    },
    {
        id: "maritalStatus",
        label: "Marital Status",
        type: "radio",
        placeholder: "",
        description: "",
        options: ['Married', 'Unmarried', 'Prefer Not To Say'],
        required: true,

    },

    {
        id: "nationality",
        label: "Nationality / Citizen",
        type: "text",
        placeholder: "Your Answer",
        description: "Description: Enter The name of the Country of nationality or citizenship.",
        required: true,

    },
    {
        id: "bloodGroup",
        label: "Blood Group",
        type: "radio",
        placeholder: "Your Answer",
        description: "Description: Enter your blood group. Format: O+, A-, etc.",
        options: ['Option 1'],
        required: true,

    },
]


export const ADDRESS_INFORMATION_FIELDS = [
    {
        id: "currentResidentialAddress",
        label: "Current Residential Address",
        type: "text",
        placeholder: "Your Answer",
        description: `Description: Enter your current residential address in Full along with
                        City
                        State
                        Postal Code`,
    },
    {
        id: "permanentResidentialAddress",
        label: "Permanent Residential Address",
        type: "text",
        placeholder: "Your Answer",
        description: `Description: Enter your permanent residential address in Full along with
                        City
                        State
                        Postal Code`,
    },
    {
        id: "currentLocation",
        label: "Current Location",
        type: "text",
        placeholder: "Your Answer",
        description: `Description: Enter your current city of residence.`,
    },
    {
        id: "preferredLocation",
        label: "Preferred Location",
        type: "text",
        placeholder: "Your Answer",
        description: `Description: Enter your preferred city of residence.`,
    },

]


export const IDENTIFICATION_DOCUMENTS = [
    {
        id: 'passport',
        label: 'Do you have a passport?',
        type: 'radio',
        placeholder: 'Your Answer',
        description: `Description: Select 'Yes' if you have a passport, otherwise select 'No'.'`,
        options: ['YES', 'NO'],
    },
    {
        id: 'passportNumber',
        label: 'Passport Number',
        type: 'text',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, enter your passport number.`,

    },
    {
        id: 'passportCopy',
        label: 'Upload your Passport Copy',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, Upload a copy of  your passport.`,

    },
    {
        id: 'adhaarCardNumber',
        label: 'Adhaar Card Number',
        type: 'text',
        placeholder: 'Your Answer',
        description: `Description: Enter your Aadhaar card number.`,
        required : true,

    },
    {
        id: 'adharCardCopy',
        label: 'Upload your Aadhaar Card Copy',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, Upload a copy of  your Aadhaar Card.`,
        required : true,

    },
    {
        id: 'panCardNumber',
        label: 'PAN Card Number',
        type: 'text',
        placeholder: 'Your Answer',
        description: `Description: Enter your PAN card number.`,

    },
    {
        id: 'panCardCopy',
        label: 'Upload your PAN Card Copy',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, Upload a copy of  your PAN Card.`,

    },
    {
        id: 'drivingLicenseDetails',
        label: 'Driving License Details (if applicable) ',
        type: 'radio',
        placeholder: 'Your Answer',
        description: `Description: Enter your driving license number if applicable.`,
        options: ['Option 1'],

    },
    {
        id: 'drivingLicenseCopy',
        label: 'Upload your Driving License Copy',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, Upload a copy of  your Driving License Card.`,

    },
    {
        id: 'voterIdDetails',
        label: 'Voter ID Card Details (if applicable)',
        type: 'radio',
        placeholder: 'Your Answer',
        description: `Description: Enter your Voter ID card number if applicable.`,
        options: ['Option 1'],

    },
    {
        id: 'voterIdCopy',
        label: 'Upload your Voter ID Copy',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, Upload a copy of  your Voter ID Card.`,

    },
]


export const PROFESSIONAL_LINKS_AND_DOCUMENTS = [
    {
        id: 'photograph',
        label: 'Photograph',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: Upload a recent passport-sized photograph.`,
        required: true,

    },
    {
        id: 'linkedIn',
        label: 'Work Link/Portfolio (LinkedIn)',
        type: 'text',
        placeholder: 'Your Answer',
        description: `Description: Provide a link to your LinkedIn profile or online portfolio.`,
        required: true,

    },
    {
        id: 'resume',
        label: 'Please attached your updated Resume/CV',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: Upload your resume and portfolio.`,
        required: true,

    },
    {
        id: 'socialLinks',
        label: 'Please share the links of your Social Media Profiles (LinkedIn, Facebook, Instagram, etc.',
        type: 'text',
        placeholder: 'Your Answer',
        description: `Description: Provide links to your social media profiles.`,
        required: true,

    },
    {
        id: 'onlinePortfolioLink',
        label: 'Please share the links of your Online Portfolio or Website (if applicable) {If none please mention NA}',
        type: 'text',
        placeholder: 'Your Answer',
        description: `Description: Provide the link to your online portfolio or personal website.`,
        required: true,

    },
    {
        id: 'skills',
        label: `Skills`,
        type: 'text',
        placeholder: 'Your Answer',
        description: `List down all the Skills you posses`,
        required: true,

    },
    {
        id: 'languagesKnown',
        label: 'Languages',
        type: 'text',
        placeholder: 'Your Answer',
        description: `List the Languages you are Proficient`,
        required: true,

    },
]


export const EDUCATIONAL_DETAILS = [
    {
        id: `educationCourse`,
        label: `Education: Course`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter the course you have completed.`,
        required: true,

    },
    {
        id: `specialization`,
        label: `Education: Specialization`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter your area of specialization.`,
        required: true,

    },
    {
        id: `educationInstitution`,
        label: `Education: Institution`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter the name of the institution where you completed your course.`,
        required: true,

    },
    {
        id: `yearOfCompletion`,
        label: `Education: Year of Completion`,
        type: 'date',
        placeholder: `Your Answer`,
        description: `Description: Enter the date you completed your course`,
        required: true,

    },
    {
        id: `passPercentage`,
        label: `Education: Pass Percentage`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter the percentage you achieved in your course. Format: 85.6%.`,
        required: true,

    },
    {
        id: `proofOfEducationCompletion`,
        label: `Upload Proof of Education Completion`,
        type: 'file',
        placeholder: `Your Answer`,
        description: `Description: Upload the proof of your education completion. Please upload your Consolidated MarkSheet or Semester Marksheet, Provisional Degree Certificate, Degree Completion Cetificate.`,
        required: true,

    },
    {
        id: `anyCertifications`,
        label: `Any Certifications`,
        type: 'radio',
        placeholder: `Your Answer`,
        description: `Description: Select 'Yes' if you have any certifications, otherwise select 'No'.`,
        required: true,
        options: ['YES', 'NO'],


    },

    {
        id: `certificationsObtained`,
        label: `Certifications Obtained`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: List the certifications you have obtained.`,
        required: true,


    },
    {
        id: `certificationIssuingAuthority`,
        label: `Name of Certification Issuing Authority Obtained`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter the name of the authority that issued the certification.`,
        required: true,


    },
    {
        id: `certificationCompletionDate`,
        label: `Certification Completion Date`,
        type: 'date',
        placeholder: `Your Answer`,
        description: `Description: Select the date when the certification was issued.`,
        required: true,
    },
    {
        id: `proofOfCertification`,
        label: `Upload Proof of Certification`,
        type: 'file',
        placeholder: `Your Answer`,
        description: `Description: Upload the proof of your certification.`,
        required: true,
    },
    {
        id: `dateOfJoin`,
        label: `Please Enter a Tentative  Date you are expected to join us incase you are shorlisted/selected`,
        type: 'date',
        placeholder: `Your Answer`,
        description: ``,
        required: true,
    },
    {
        id: `fresher`,
        label: `Are you a Fresher?`,
        type: 'radio',
        placeholder: `Your Answer`,
        description: ``,
        required: true,
        options: ['YES', 'NO'],
    },
]

export const ACKNOWLEDGEMENT_CONSENT = [
    {
        id: `backgroundChecks`,
        label: `Consent to conduct background checks`,
        type: 'radio',
        placeholder: `Your Answer`,
        description: ``,
        required: true,
        options: ['YES', 'NO', 'MAY BE'],
    },
    {
        id: `drugAndAlcoholTest`,
        label: `Consent to Drug/Alcohol Testing Consent`,
        type: 'radio',
        placeholder: `Your Answer`,
        description: ``,
        required: true,
        options: ['YES', 'NO', 'MAY BE'],
    },
    {
        id: `criminalCases`,
        label: `Disclosure of any Criminal Convictions or Pending Criminal Cases`,
        type: 'radio',
        placeholder: `Your Answer`,
        description: `Description: Select 'Yes' if you have any criminal convictions or pending criminal cases, otherwise select 'No'.`,
        required: true,
        options: ['YES', 'NO',],
    },
    {
        id: `detailsOfCriminalCases`,
        label: `Details of any Criminal Convictions or Pending Criminal Cases`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: If you selected 'Yes' above, please provide details of your criminal convictions or pending criminal cases, including charges, dates, and outcomes.`,
        required: true,

    },
    {
        id: `acknowledge`,
        label: `By submitting this form, I acknowledge that all the information provided is true and accurate to the best of my knowledge.`,
        type: 'radio',
        placeholder: `Your Answer`,
        description: ``,
        required: true,
        options: ['YES', 'NO',],
    },
]