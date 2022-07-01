import { Form } from 'formik';
import { useEffect } from 'react';
import { FormField, SelectFormField } from '../../Formik/Fields'
import DoubleArrowIcon from '../../../assets/DoubleArrow.svg'
import './styles.scss'

const formFieldsBase = (valueBase, currencyBase) => [
    {
        id: 'amount_base',
        name: 'amount_base',
        type: 'text',
        placeholder: '0',
    },
    {
        id: 'currency_base',
        name: 'currency_base',
        type: 'select',
        as: 'select',
        options: [
            'usd',
            'eur',
            'uah'
        ],
        placeholder: 'Upload your photo',
    },
    {
        id: 'line_base',
        type: 'line'
    },
    {
        id: 'abbr_base',
        value: valueBase,
        currency: currencyBase
    } 
]

const formFieldsConv = (valueConv, currencyConv) => [
    {
        id: 'amount_conv',
        name: 'amount_conv',
        type: 'text',
        placeholder: '0',
    },
    {
        id: 'currency_conv',
        name: 'currency_conv',
        type: 'select',
        as: 'select',
        options: [
            'uah',
            'usd',
            'eur'
        ],
        placeholder: 'Upload your photo',
    },
    {
        id: 'line_conv',
        type: 'line'
    },
    {
        id: 'abbr_conv',
        value: valueConv,
        currency: currencyConv,
    } 
]

const renderFormFields = ({...fieldProps}) => {
    return (
        fieldProps.type === 'text' ?
            <FormField key={fieldProps.id} {...fieldProps} />
        :
            fieldProps.type === 'select' ?
                <SelectFormField key={fieldProps.id} {...fieldProps} />
            :
                fieldProps.type === 'line' ?
                    <div key={fieldProps.id} className='convert-form-line'/>
                :
                    fieldProps.value !== null ? 
                        <span key={fieldProps.id} >
                            {fieldProps.value} {fieldProps.currency.toUpperCase()}
                        </span>
                    :
                        <span key={fieldProps.id} >
                            0 {fieldProps.currency.toUpperCase()}
                        </span>
    )
}


const ConvertForm = ({ values, valueBase, valueConv, currencyBase, currencyConv }) => {
    useEffect(() => {
        async function handleChange() {
            document.getElementById('convert-form-submit').click()
        }
        setTimeout(handleChange, 250)
    }, [values]);

    return (
        <Form className="convert-form" id='convert-form'>
            <div className='convert-form-group'>
                {formFieldsBase(valueConv, currencyBase).map(renderFormFields)}
            </div>
            <img src={DoubleArrowIcon} alt="" className='convert-form-icon'/>
            <div className='convert-form-group'>
                {formFieldsConv(valueBase, currencyConv).map(renderFormFields)}
            </div>

            <button id='convert-form-submit' type='submit'>
                Submit
            </button>
        </Form>
    )
}

export default ConvertForm