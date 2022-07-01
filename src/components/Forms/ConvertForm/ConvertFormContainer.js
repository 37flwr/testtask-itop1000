import { Formik } from 'formik'
import ConvertForm from './ConvertForm';
import { exchangeCurrency } from '../../../utils';

const ConvertFormContainer = ({
    initialValues = {
        currency_base: 'usd',
        currency_conv: 'uah',
        amount_base: '',
        amount_conv: '',
    },
    setValueBase,
    setValueConv,
    setCurrencyBase,
    setCurrencyConv
}) => {

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={async (form) => {
        const convertedCurr = await exchangeCurrency(form)
        setValueBase(convertedCurr.valueBase)
        setValueConv(convertedCurr.valueConv)
        setCurrencyBase(form.currency_base)
        setCurrencyConv(form.currency_conv)
        }
      }
    >
        {({values}) => <ConvertForm values={values} />}
    </Formik>
  )
}

export default ConvertFormContainer