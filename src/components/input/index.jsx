import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useRenderInput from '@/utils/hooks/useRenderInput';

const InputField = ({ id, type, label, placeholder, value, options, onChange, onBlur,
    error, touched, classNames, required, containerClasses, description, handleStoreImage, fieldValues }) => {

    const { renderInput } = useRenderInput()
    const { userInfo } = useSelector((store) => store.user)

    return (
        <section className={containerClasses}>
            <label htmlFor={id} className='text-[0.85rem] md:text-[1.15rem]'>{label} {required && <span className='text-red-500'>*</span>}</label>
            <p className='mb-4 mt-1 text-[0.65rem] md:text-[0.85rem]'>{description}</p>
            {renderInput(type, classNames, id, value, placeholder, onChange, onBlur, options, handleStoreImage, userInfo?.email, fieldValues)}
            {error && touched && <p className="text-red-500 text-[0.7rem] flex">
                <span className=' w-5 h-5 text-center rounded-full border-[2.5px] flex items-center justify-center text-[0.85rem] font-bold border-red-500 mr-4'>!</span>{error}</p>}
        </section>
    );
};

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'date', 'radio', 'file', 'checkbox', 'paragraph']).isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.instanceOf(Date)]),
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    classNames: PropTypes.string,
    containerClasses: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.string,
    touched: PropTypes.bool,
    required: PropTypes.bool,
    handleStoreImage: PropTypes.func,
    fieldValues : PropTypes.object,
};

export default InputField;
