
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
        type: "text",
        placeholder: "Your Answer",
        description: "Description: Enter your blood group. Format: O+, A-, etc.",
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
        required: true,
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
        required: true,
    },
    {
        id: "currentLocation",
        label: "Current Location",
        type: "text",
        placeholder: "Your Answer",
        description: `Description: Enter your current city of residence.`,
        required: true,
    },
    {
        id: "preferredLocation",
        label: "Preferred Location",
        type: "text",
        placeholder: "Your Answer",
        description: `Description: Enter your preferred city of residence.`,
        required: true,
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
        required: true,
    },
    {
        id: 'passportNumber',
        label: 'Passport Number',
        type: 'text',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, enter your passport number.`,
        required: false,

    },
    {
        id: 'passportCopy',
        label: 'Upload your Passport Copy',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, Upload a copy of  your passport.`,
        required: false,

    },
    {
        id: 'adhaarCardNumber',
        label: 'Adhaar Card Number',
        type: 'text',
        placeholder: 'Your Answer',
        description: `Description: Enter your Aadhaar card number.`,
        required: true,

    },
    {
        id: 'adharCardCopy',
        label: 'Upload your Aadhaar Card Copy',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, Upload a copy of  your Aadhaar Card.`,
        required: true,

    },
    {
        id: 'panCardNumber',
        label: 'PAN Card Number',
        type: 'text',
        placeholder: 'Your Answer',
        description: `Description: Enter your PAN card number.`,
        required: true,

    },
    {
        id: 'panCardCopy',
        label: 'Upload your PAN Card Copy',
        type: 'file',
        placeholder: 'Your Answer',
        description: `Description: If you selected 'Yes' above, Upload a copy of  your PAN Card.`,
        required: false,

    },
    {
        id: 'drivingLicenseDetails',
        label: 'Driving License Details (if applicable) ',
        type: 'radio',
        placeholder: 'Your Answer',
        description: `Description: Enter your driving license number if applicable.`,
        options: ['YES', 'NO'],

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
        options: ['YES', 'NO'],

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
        id: "paragraph",
        label: "",
        type: "paragraph",
        placeholder: "",
        description: "Please share details of your highly qualification only",
    },
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



export const EMPLOYMENT_DETAILS = [
    {
        id: `totalExperience`,
        label: `Total Experience`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter your total years & months of experience.`,
        required: true,

    },
    {
        id: `organizationName`,
        label: `Organization Name`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter the name of the current organization you have worked for.`,
        required: true,

    },
    {
        id: `jobTitle`,
        label: `Designation/Job Title`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter your current designation or job title.`,
        required: true,

    },
    {
        id: `empStartDate`,
        label: `Employment Start Date`,
        type: 'date',
        placeholder: `Your Answer`,
        description: `Description: Select the start date of your employment.`,
        required: true,

    },
    {
        id: `empEndDate`,
        label: `Employment End Date`,
        type: 'date',
        placeholder: `Your Answer`,
        description: `Description: Select the end date of your employment (if applicable).`,
        required: true,

    },
    {
        id: `rolesAndResponsibilities`,
        label: `List down your Roles and Responsibilities `,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Describe your roles and responsibilities in the organization.`,
        required: true,

    },
    {
        id: `reasonForLeaving`,
        label: ` Reason for Leaving `,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Provide the reason for leaving your previous or current job.`,
        required: true,

    },
    {
        id: `currentCTC`,
        label: ` Current CTC `,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter your current Cost to Company (CTC).Format : INR 100000 (Annual CTC)`,
        required: true,

    },
    {
        id: `expectedCTC`,
        label: ` Expected CTC`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter your expected Cost to Company (CTC). Format : INR 100000 (Annual CTC)`,
        required: true,

    },
    {
        id: `noticePeriod`,
        label: ` Notice Period`,
        type: 'text',
        placeholder: `Your Answer`,
        description: `Description: Enter the number of days in your notice period. , Example : 60 Days`,
        required: true,

    },
]

export const DOCUMENTS_RELATED_TO_EXPERIENCE = [
    {
        id: `salarySlips`,
        label: `Please upload your Salary Slips/Payslips (Last 3 Months) for your total experience`,
        type: 'file',
        placeholder: `Your Answer`,
        description: ``,
        required: true,

    },
    {
        id: `bankStatements`,
        label: `Please upload your Bank Statements (Last 3 Months) for your total experience`,
        type: 'file',
        placeholder: `Your Answer`,
        description: ``,
        required: true,

    },
    {
        id: `offerLetter`,
        label: `Upload Offer Letter/Joining Letter/Employment Agreement from organization(s) for your total experience`,
        type: 'file',
        placeholder: `Your Answer`,
        description: ``,
        required: true,

    },
    {
        id: `incrementLetter`,
        label: `Upload increment letter from from organization(s) for your total experience`,
        type: 'file',
        placeholder: `Your Answer`,
        description: ``,
        required: true,

    },
    {
        id: `experienceCertificate`,
        label: `Upload Relieving Letter/Experience Certificates / Acceptance of resignation from present employment`,
        type: 'file',
        placeholder: `Your Answer`,
        description: ``,
        required: true,

    },
];


export const CURRENT_OFFERS = [
    {
        id: `servingNoticePeriod`,
        label: `Are you Currently Serving your Notice Period?`,
        type: 'radio',
        placeholder: `Your Answer`,
        description: ``,
        required: true,
        options: ['YES', 'NO'],

    },
    {
        id: `lastWorkingDate`,
        label: `Mention your Last working Date`,
        type: 'date',
        placeholder: `Your Answer`,
        description: `Description: If you selected 'Yes' above, enter your last working date in the organization.`,
        required: true,
    },
    {
        id: `anyExistingOffers`,
        label: `Do you hold any existing offers that we should be aware of?`,
        type: 'radio',
        placeholder: `Your Answer`,
        description: ``,
        required: true,
        options: ['YES', "NO", 'MAYBE'],
    },
    {
        id: `existingOfferOrganizationName`,
        label: `If yes, enter the name of the organization you hold an offer from`,
        type: 'text',
        placeholder: `Your Answer`,
        description: ``,
        required: true,

    },
    {
        id: `proofOfExistingOffer`,
        label: `Please upload the offer letter or proof of offer you hold`,
        type: 'file',
        placeholder: `Your Answer`,
        description: ``,
        required: true,

    },
    {
        id: `haveYouAcceptedTheOffer`,
        label: `Please confirm if you have accepted the offer you hold?`,
        type: 'file',
        placeholder: `Your Answer`,
        description: ``,
        required: true,
       

    },
    {
        id: `dateAcceptedTheOffer`,
        label: `Please mention the date you have to accept the Offer you hold or the date you have Accepted the Offer`,
        type: 'date',
        placeholder: `Your Answer`,
        description: ``,
        required: true,

    },
    {
        id: `proposedCTC`,
        label: `If no, mention the expected/proposed CTC you are offered`,
        type: 'text',
        placeholder: `Your Answer`,
        description: ``,
        required: true,


    },
];


export const EMPLOYMENT_VERIFICATION_REFERENCE_CHECK = [
    {
        id: `referenceContactPersonName`,
        label: `Please mention One reference contact person name from this organization`,
        type: 'text',
        placeholder: `Your Answer`,
        description: ``,
        required: true,


    },
    {
        id: `referenceContactPersonDesignation`,
        label: `One reference contact person's Designation from this organization`,
        type: 'text',
        placeholder: `Your Answer`,
        description: ``,
        required: true,


    },
    {
        id: `referenceContactPersonContact`,
        label: `One reference contact person's Contact No from this organization`,
        type: 'text',
        placeholder: `Your Answer`,
        description: ``,
        required: true,


    },
    {
        id: `referenceContactPersonEmailID`,
        label: `One reference contact person's Email ID from this organization`,
        type: 'text',
        placeholder: `Your Answer`,
        description: ``,
        required: true,


    },
    {
        id: `referenceContactPersonProfessionalRelationship`,
        label: `One reference contact person's - Pleasestate the Professional Relationship with the mentioned reference contact person's`,
        type: 'text',
        placeholder: `Your Answer`,
        description: ``,
        required: true,


    },
    {
        id: `referenceCheckDate`,
        label: `Please mention the date we can Reference Check`,
        type: 'date',
        placeholder: `Your Answer`,
        description: ``,
        required: true,


    },
];


export const VERIFICATION_CONSENT = [
    {
        id: `employmentVerificationConsent`,
        label: `Employment Verification Consent`,
        type: 'radio',
        placeholder: `Your Answer`,
        description: ``,
        required: true,
        options: ['YES', "NO", 'MAYBE'],

    },
    {
        id: `authorizationToContactReferences`,
        label: `Authorization to contact previous employers and references`,
        type: 'radio',
        placeholder: `Your Answer`,
        description: ``,
        required: true,
        options: ['YES', "NO", 'MAYBE'],

    },
];


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