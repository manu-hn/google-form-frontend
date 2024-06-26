import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import InputField from "@components/input";
import Button from "./elements/Button";
import PropTypes from 'prop-types';
import { clearData, loadData, storeData } from '@/utils/indexdb/IndexDb.js';
import useSubmitFormData from "@/utils/hooks/useSubmitFormData";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from "@/constants/firebase";
import { DOCS_ARRAY } from "@/constants/Config.js";
import { initialValues } from "@/constants/StateValues";
import useFormikValidator from '@/utils/hooks/useFormikValidator';

const GoogleForm = ({ formDetails, index, setIndexValue, pageTitle, isFresher }) => {
    const { userInfo, isFormSubmitted } = useSelector(store => store.user);
    const { submitFormData } = useSubmitFormData();
    const { validate } = useFormikValidator()

    const storeFormData = async (values, currentIndex) => {
        try {
            await storeData({ id: 'formData', formValues: values, index: currentIndex });
        } catch (error) {
            console.error('Error storing form data:', error);
        }
    };

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: async (values) => {
            await submitFormData({ ...values, loggedInEmail: userInfo?.email });

            try {
                await clearData();
                console.log('IndexedDB data cleared successfully.');
            } catch (error) {
                console.error('Error clearing IndexedDB data:', error);
            }
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            const savedData = await loadData();
            if (savedData.length > 0) {
                formik.setValues(savedData[savedData.length - 1].formValues);
                setIndexValue(savedData[0].index);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handle = setTimeout(() => {
            storeFormData(formik.values, index);
        }, 1000);

        return () => clearTimeout(handle);
    }, [formik.values, index]);

    const handleStoreImage = async (file, fieldId) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = userInfo.name + "_" + fieldId + "_" + new Date().getTime() + file.name;
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

    const filteredDocsArray = isFresher
        ? DOCS_ARRAY.filter((_, idx) => idx < 5 || idx === 10)
        : DOCS_ARRAY;

    const currentDocsLength = filteredDocsArray.length;

    return (
        <div className="w-[85%] md:w-[55%]">
            <form onSubmit={formik.handleSubmit}>
                {pageTitle && (
                    <h1 className="w-full bg-[#83D3E0] font-bold h-16 text-xs md:h-24 px-6 rounded-t-xl flex items-center -mb-6 z-10">{pageTitle}</h1>
                )}
                {index === 0 && (
                    <InputField
                        id="emailChecked"
                        type="checkbox"
                        label="Email"
                        value={formik.values.emailChecked}
                        onChange={(e) => {
                            formik.handleChange(e);
                            storeFormData(formik.values, index);
                        }}
                        onBlur={formik.handleBlur}
                        error={formik.errors.emailChecked}
                        touched={formik.touched.emailChecked}
                        required={true}
                        classNames="md:w-[1.75rem] md:h-[1.75rem] bg-[#008DA2] placeholder:text-[1.25rem] md:placeholder:text-[1rem]"
                        containerClasses="flex flex-col bg-white my-2 p-6 border border-gray-300 rounded-lg"
                        fieldValues={formik.values}
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
                        onChange={(e) => {
                            formik.handleChange(e);
                            storeFormData(formik.values, index);
                        }}
                        onBlur={formik.handleBlur}
                        error={formik.errors[field.id]}
                        touched={formik.touched[field.id]}
                        required={field.required}
                        classNames="my-2 border-b-2 w-2/4 outline-none focus:border-b-[#008DA2] p-2 placeholder:text-xs sm:placeholder:text-sm"
                        containerClasses="flex flex-col bg-white my-2 p-6 border border-gray-300 rounded-lg "
                        handleStoreImage={handleStoreImage}
                        fieldValues={formik.values}
                    />
                ))}
                <div className="flex justify-start">
                    {index > 0 && (
                        <Button classNames="px-6 py-2 rounded-md text-[#008DA2] text-xs md:text-sm bg-white mx-1 font-[450] shadow-md border-b border-gray-400"
                            handleClick={handlePrevChange} isDisabled={index === 0} title="Back" />
                    )}
                    {index < currentDocsLength - 1 && (
                        <Button classNames="px-6 py-2 rounded-md text-[#008DA2] text-xs md:text-sm bg-white mx-1 font-[450] shadow-md border-b border-gray-400"
                            handleClick={handleNextChange} isDisabled={index === currentDocsLength - 1} title="Next" />
                    )}
                    {index === currentDocsLength - 1 && (
                        <button type="submit"
                            className="bg-[#1496A9] px-4 py-2 rounded-md text-xs md:text-sm mx-2 text-white font-[500]">
                            {isFormSubmitted ? "Submitting" : "Submit"}
                        </button>
                    )}
                    <div className=" flex  items-center gap-4 ">
                        <input className='w-full  '
                            type="range"
                            value={index}
                            min={0}
                            max={currentDocsLength - 1}
                            onChange={(e) => setIndexValue(parseInt(e.target.value))}
                        />
                        <span className='text-xs hidden md:block'>
                            Page {index + 1} of 11
                        </span>
                        <span className='text-xs block md:hidden'>
                             {index + 1} /  11
                        </span>
                    </div>
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
    isFresher: PropTypes.bool.isRequired,
};

export default GoogleForm;
