import InputField from "@components/input";
import PropTypes from 'prop-types';
import { useFormik } from "formik";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from "@/constants/firebase";
import { validate } from "@/constants/Constants";
import { initialValues } from "@/constants/StateValues";

const GoogleForm = ({ formDetails, docsLength, index, setIndexValue, pageTitle }) => {
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            console.log("Form submitted with values: ", values);  // Console log to check
        },
    });

    const handleStoreImage = async (file, fieldId) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = fieldId + new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress);
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        resolve(downloadUrl);
                        formik.setFieldValue(fieldId, downloadUrl); 
                        console.log(downloadUrl);
                    });
                }
            );
        });
    };

    const handleNextChange = () => {
        setIndexValue((prevVal) => prevVal + 1);
    };

    const handlePrevChange = () => {
        setIndexValue((prevVal) => prevVal - 1);
    };

    return (
        <div className="w-3/5 ">
            <form onSubmit={formik.handleSubmit}>
                
                {pageTitle && (
                    <h1 className="w-full bg-[#83D3E0] font-bold h-24 px-6 rounded-t-xl flex items-center -mb-6 z-10">{pageTitle}</h1>
                )}
                {index === 0 && (
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
                        classNames="w-[2rem] h-[2rem] bg-[#008DA2]"
                        containerClasses="flex flex-col bg-white my-2 p-6 border border-gray-300 rounded-lg"
                    />
                )}
                {formDetails.map((field) => (
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
                        handleStoreImage={handleStoreImage} 
                    />
                ))}
                <div>
                    {index > 0 && (
                        <button
                            type="button"
                            className="px-8 py-2 rounded-md text-[#008DA2] bg-white mx-2 font-[450] shadow-md border-b border-gray-400"
                            disabled={index === 0}
                            onClick={handlePrevChange}
                        >
                            Back
                        </button>
                    )}
                    {index < docsLength - 1 && (
                        <button
                            type="button"
                            className="px-8 py-2 rounded-md text-[#008DA2] bg-white mx-2 font-[450] shadow-md border-b border-gray-400"
                            disabled={index === docsLength - 1}
                            onClick={handleNextChange}
                        >
                            Next
                        </button>
                    )}
                    {index === docsLength - 1 && (
                        <button
                            type="submit"
                            className="bg-[#1496A9] px-10 py-2 rounded-md mx-4 text-white font-[500]"
                        >
                            Submit
                        </button>
                    )}
                    <input
                        type="range"
                        value={index}
                        min={0}
                        max={docsLength - 1}
                        onChange={(e) => setIndexValue(parseInt(e.target.value))}
                    />
                </div>
            </form>
        </div>
    );
};

GoogleForm.propTypes = {
    formDetails: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    docsLength: PropTypes.number.isRequired,
    setIndexValue: PropTypes.func.isRequired,
    pageTitle: PropTypes.string,
};

export default GoogleForm;
