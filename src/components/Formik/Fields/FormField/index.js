import { Field } from 'formik';

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
  </div>
  );

export default FormField;