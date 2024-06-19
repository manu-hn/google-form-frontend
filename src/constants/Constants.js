

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
        description: "Description: Enter your primary contact number. Format: +(Country Code) [Number}",
        required: true,
    },
    {
        id: "alternateContactNumber",
        label: "Alternate Contact Number",
        type: "text",
        placeholder: "Your Answer",
        description: "Description: Enter an alternate contact number. Format: +(Country Code) [Number}",
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


export const SECOND_PAGE_FIELDS = [
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


export const THIRD_PAGE_RESULTS = [
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
        label: 'Passport Number',
        type: 'text',
        placeholder: 'Your Answer',
        description: `Description: Enter your Aadhaar card number.`,

    },
    {
        id: 'adharCardCopy',
        label: 'Upload your Aadhaar Card Copy',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, Upload a copy of  your Aadhaar Card.`,

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
