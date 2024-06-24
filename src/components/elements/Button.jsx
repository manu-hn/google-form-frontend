import PropTypes from 'prop-types';


const Button = ({ isDisabled, handleClick, classNames, title }) => {
    return (
        <button
            type="button"
            className={classNames}
            disabled={isDisabled}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    isDisabled: PropTypes.bool,
    handleClick: PropTypes.func,
    classNames: PropTypes.string,
};
export default Button