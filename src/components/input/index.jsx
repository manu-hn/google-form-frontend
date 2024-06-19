import PropTypes from 'prop-types';

const InputField = ({ id, type, label, placeholder, value, options, onChange, onBlur, error, touched, classNames, required, containerClasses, description }) => {
    const renderInput = () => {
        switch (type) {
            case 'text':
            case 'number':
            case 'date':
                return (
                    <input
                        className={classNames}
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                );
            case 'radio':
                return (
                    <div>
                        {options.map((option, index) => (
                            <div key={index} className='w-64 flex justify-start'>
                                <input
                                    className="mr-3"
                                    type="radio"
                                    id={`${id}-${option}`}
                                    name={id}
                                    value={option}
                                    checked={value === option}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                                <label htmlFor={`${id}-${option}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            case 'checkbox': return (
                <div>
                    
                    <input  className={classNames} type={type} id={id} />
                    
                </div>
            )
            default:
                return null;
        }
    };

    return (
        <section className={containerClasses}>
            <label htmlFor={id}>{label} {required && <span className='text-red-500'>*</span>}</label>
            <p className='mb-4 mt-1'>{description}</p>
            {renderInput()}
            {error && touched && <p className="text-red-500 text-[1.25rem] flex">
                <p className=' w-8 h-8 text-center rounded-full border-[2.5px] flex items-center justify-center text-[1.25rem] font-bold border-red-500 mr-4'>!</p>{error}</p>}
        </section>
    );
};

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'date', 'radio', 'file','checkbox']).isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    classNames: PropTypes.string,
    containerClasses: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.string,
    touched: PropTypes.bool,
    required: PropTypes.bool,
};

export default InputField;
