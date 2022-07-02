import PropTypes from 'prop-types';

import './styles.scss';

const FieldError = ({ children, className }) => {
    if (children && typeof children !== 'string') {
        return (
        <div className={`error-message ${className}`}>
            {Object.keys(children).map((fieldKey, idx) => (
            <div key={`error-${idx}`}>
                {fieldKey}: {JSON.stringify(children[fieldKey])}
            </div>
            ))}
        </div>
        );
    }
    return <span className={`error-message ${className}`}>*{children}</span>;
};

FieldError.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.object.isRequired,
    ]),
};

export default FieldError;