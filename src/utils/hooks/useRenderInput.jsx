import ImageUploader from '@/components/input/ImageUploader';

const useRenderInput = () => {
    const renderInput = (type, classNames, id, value, placeholder, onChange, onBlur, options, handleStoreImage, email, fieldValues) => {
        switch (type) {
            case 'text':
            case 'number':
            case 'date':
                return (
                    <input className={`${classNames}  text-xs sm:text-sm`} id={id} type={type} placeholder={placeholder} 
                        value={value} onChange={onChange} onBlur={onBlur} />
                );
            case 'radio':
                return (
                    <div className='w-full'>
                        {options.map((option, index) => (
                            <div key={index} className='w-full flex justify-start  my-2 md:my-1'>
                                <input className="mr-3" type="radio" id={`${id}-${option}`} name={id}
                                    value={option} checked={value === option} onChange={onChange} onBlur={onBlur} />
                                <label className='text-[0.65rem] sm:text-sm' htmlFor={`${id}-${option}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            case 'checkbox':
                return (
                    <div className='flex items-center'>
                        <input className={classNames} type={type} id={id} checked={value} onChange={onChange} />
                        <p className='mx-2 md:mx-4 text-[0.45rem] md:text-[0.85rem]'>Record <span className='font-bold text-gray-500'>{email}</span> as the email to be included with my response</p>
                    </div>
                );
            case 'file':
                return (
                    <ImageUploader type={type} id={id} fieldId={id} handleStoreImage={handleStoreImage} fieldValues={fieldValues} />
                );

            default:
                return null;
        }
    };

    return {
        renderInput
    }
}

export default useRenderInput;
