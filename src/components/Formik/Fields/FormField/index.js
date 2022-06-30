import { ErrorMessage, Field } from 'formik';

import FormikError from '../../FormikError';
import './styles.scss';

const FormField = ({
  component,
  name,
  label,
  legend,
  type,
  id,
  customClassName,
  divCustomClassName,
  errorCustomClassName,
  ...restProps
}) => (
  <div className='input-container' >
    {label && <label className="input-label" htmlFor={id}>{label}</label>}
    <Field
        name={name}
        id={id}
        {...(component && { component })}
        {...(type && { type })}
        {...restProps}
        className='input-field'
    />
    {legend && <span className='input-legend'>{legend}</span>}
    <ErrorMessage component={FormikError} name={name} className={errorCustomClassName} />
  </div>
  );

export default FormField;