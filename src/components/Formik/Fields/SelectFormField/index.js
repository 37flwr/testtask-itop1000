import { ErrorMessage, Field } from 'formik';

import FormikError from '../../FormikError';
import './styles.scss';

const SelectFormField = ({
  component,
  name,
  label,
  legend,
  type,
  id,
  customClassName,
  divCustomClassName,
  errorCustomClassName,
  options,
  ...restProps
}) => (
  <div className='select-container' >
    {label && <label className="select-label" htmlFor={id}>{label}</label>}
    <Field
        name={name}
        id={id}
        {...(component && { component })}
        {...(type && { type })}
        {...restProps}
        className='select-field'
    >
        {options.map((option, idx) => {
            return (
                <option key={idx}>
                    {option}
                </option>
            )
        })}
    </Field>
    {legend && <span className='select-legend'>{legend}</span>}
    <ErrorMessage component={FormikError} name={name} className={errorCustomClassName} />
  </div>
  );

export default SelectFormField;