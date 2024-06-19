import InputField from "@components/input";
import PropTypes from 'prop-types';
import { useFormik } from "formik";
import { validate } from "@/constants/Constants";


const GoogleForm = ({ formDetails }) => {
    const formik = useFormik({
        initialValues: {
            emailChecked: false,
            firstName: '',
            middleName: "",
            lastName: '',
            contactNumber: '',
            alternateContactNumber: '',
            emailID: '',
            dateOfBirth: '',
            age: '',
            gender: '',
            maritalStatus: '',
            nationality: "",
            bloodGroup: '',
        }, validate,
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <div className="w-3/5 ">
            <form onSubmit={formik.handleSubmit}>
                <InputField
                    id="emailChecked"
                    type="checkbox"
                    label="Email"
                    value={formik.values.emailChecked}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.emailChecked}
                    touched={formik.touched.emailChecked}
                    required={true}
                    classNames="w-[2rem] h-[2rem] bg-[#008DA2] text-[]"
                            containerClasses="flex flex-col bg-white my-2 p-6 border border-gray-300 rounded-lg"F
                />
                {
                    formDetails.map((field) => (
                        <InputField
                            key={field.id}
                            description={field.description}
                            id={field.id}
                            label={field.label}
                            placeholder={field.placeholder}
                            options={field.options}
                            type={field.type}
                            value={formik.values[field.id]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors[field.id]}
                            touched={formik.touched[field.id]}
                            required={field.required}
                            classNames="my-2 border-b-2 w-2/4 outline-none focus:border-b-[#008DA2] p-2"
                            containerClasses="flex flex-col bg-white my-2 p-6 border border-gray-300 rounded-lg"
                        />
                    ))
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

GoogleForm.propTypes = {
    formDetails: PropTypes.array.isRequired,
};

export default GoogleForm;
