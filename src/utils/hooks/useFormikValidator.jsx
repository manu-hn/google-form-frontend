import { useSelector } from "react-redux";


const useFormikValidator = () => {
    const isFresher = useSelector((store) => store.user.isFresher)

    const validate = values => {
        const errors = {};

        const fresherRequiredFields = [
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
            'drugAndAlcoholTest', 'criminalCases', 'acknowledge',




        ];
        const expRequiredFields = [
            'totalExperience', 'organizationName', 'jobTitle', 'empStartDate', 'empEndDate',
            'rolesAndResponsibilities', 'reasonForLeaving', 'currentCTC', 'expectedCTC',
            'noticePeriod', 'salarySlips', 'bankStatements', 'offerLetter',
            'incrementLetter', 'experienceCertificate', 'servingNoticePeriod', 'lastWorkingDate',
            'anyExistingOffers', 'existingOfferOrganizationName', 'proofOfExistingOffer',
            'haveYouAcceptedTheOffer', 'dateAcceptedTheOffer', 'proposedCTC'
        ]

        if (!isFresher) {
            expRequiredFields.forEach(field => {
                if (!values[field]) {
                    errors[field] = 'This is a required question';
                }
            });

        }
        fresherRequiredFields.forEach(field => {
            if (!values[field]) {
                errors[field] = 'This is a required question';
            }
        });

        if (values.emailID && !/\S+@\S+\.\S+/.test(values.emailID)) {
            errors.emailID = 'Email ID is invalid';
        }

        return errors;
    };


    return {
        validate
    }

}

export default useFormikValidator;