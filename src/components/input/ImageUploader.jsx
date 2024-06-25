import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const ImageUploader = ({ type, id, fieldId, handleStoreImage }) => {
    const [files, setFiles] = useState(null);
    const fileRef = useRef(null);
    const [imagePercentage, setImagePercentage] = useState(null);
   

    useEffect(() => {
        if (files) {
            handleStoreImage(files, fieldId).then((url) => {
                setImagePercentage(100); 
                console.log(`File uploaded to ${url}`);
            });
        }
    }, [files]);

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
                className='uppercase hover:shadow-lg disabled:opacity-80 rounded text-sky-500 border px-4 py-2 border-sky-700'
            >
                {imagePercentage === 100 ? 'Uploaded' : 'Add File'}
            </button>
        </div>
    );
};

ImageUploader.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'date', 'radio', 'file', 'checkbox']).isRequired,
    fieldId: PropTypes.string.isRequired, 
    handleStoreImage: PropTypes.func.isRequired,
   
};

export default ImageUploader;
