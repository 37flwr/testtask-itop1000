import { Form } from 'formik';
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

const ConvertForm = ({ values }) => (
    <Form className="apply-form" id='apply-form'>
        {formFields({values}).map(renderFormField)}

        {selectFormFields({values}).map(renderSelectFormField)}

        <button id='convert-form-submit' type='submit'>
            asd
        </button>
    </Form>
)

export default ConvertForm