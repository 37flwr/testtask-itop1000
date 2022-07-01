import { Form } from 'formik';
import { useEffect } from 'react';
import { FormField, SelectFormField } from '../../Formik/Fields'
import './styles.scss'

const formFields = () => [
    {
        id: 'amount_base',
        name: 'amount_base',
        type: 'text',
        placeholder: '0',
        show: true
    },
    {
        id: 'amount_conv',
        name: 'amount_conv',
        type: 'text',
        placeholder: '0',
        show: true
    },
].filter(({show}) => show)

const selectFormFields = () => [
    {
        id: 'currency_base',
        name: 'currency_base',
        as: 'select',
        options: [
            'usd',
            'eur',
            'uah'
        ],
        placeholder: 'Upload your photo',
        show: true
    },
    {
        id: 'currency_conv',
        name: 'currency_conv',
        as: 'select',
        options: [
            'usd',
            'eur',
            'uah'
        ],
        placeholder: 'Upload your photo',
        show: true
    },
].filter(({show}) => show)

const renderFormField = ({ show, ...fieldProps }) => (
    <FormField key={fieldProps.id} {...fieldProps} />
)

const renderSelectFormField = ({ show, ...fieldProps }) => (
    <SelectFormField key={fieldProps.id} {...fieldProps} />
)

const ConvertForm = ({ values }) => {
    useEffect(() => {
        async function handleChange() {
            document.getElementById('convert-form-submit').click()
        }
        setTimeout(handleChange, 250)
    }, [values]);
    return (
        <Form className="convert-form" id='convert-form'>
            <div className='convert-inputs-container'>
                {formFields({values}).map(renderFormField)}
            </div>
            <div className='convert-select-container'>
                {selectFormFields({values}).map(renderSelectFormField)}
            </div>

            <button id='convert-form-submit' type='submit'>
                asd
            </button>
        </Form>
    )
}

export default ConvertForm