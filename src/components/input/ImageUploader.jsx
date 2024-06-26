import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const ImageUploader = ({ type, id, fieldId, handleStoreImage, fieldValues }) => {
    const [files, setFiles] = useState(null);
    const fileRef = useRef(null);
    const [imagePercentage, setImagePercentage] = useState(0);

    useEffect(() => {
        if (files) {
            handleStoreImage(files, fieldId).then((url) => {
                setImagePercentage(100);
                console.log(`File uploaded to ${url}`);
            });
        }
    }, [files]);
    console.log(imagePercentage)
    return (
        <div className=' '>
            <input
                className='p-3 border border-gray-400 rounded w-full'
                onChange={(e) => setFiles(e?.target?.files[0])}
                ref={fileRef}
                hidden
                type={type}
                name=""
                id={id}
            />
            <button
                type='button' // Changed to button to prevent form submission
                onClick={() => fileRef.current.click()}
                className='uppercase hover:shadow-lg disabled:opacity-80 rounded text-sky-500 border px-4 py-2 text-xs md:text-sm border-sky-700'
            > Add File
                {/* {fieldValues[id] !== 'N/A' ? 'Uploaded' : 'Add File'} */}
            </button>
        </div>
    );
};

ImageUploader.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'date', 'radio', 'file', 'checkbox']).isRequired,
    fieldId: PropTypes.string.isRequired,
    handleStoreImage: PropTypes.func.isRequired,
    fieldValues: PropTypes.object,

};

export default ImageUploader;
