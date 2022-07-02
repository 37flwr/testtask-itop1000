import { Formik } from 'formik'
import ConvertForm from './ConvertForm';
import getValidationSchema from './convertFormValidationSchema';
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
    currencyBase,
    currencyConv,
    setCurrencyBase,
    setCurrencyConv,
    valueBase,
    valueConv
}) => (
  <Formik
    enableReinitialize
    initialValues={initialValues}
    validationSchema={getValidationSchema}
    onSubmit={async (form) => {
      const convertedCurr = await exchangeCurrency(form)
      setValueBase(convertedCurr.valueBase)
      setValueConv(convertedCurr.valueConv)
      setCurrencyBase(form.currency_base)
      setCurrencyConv(form.currency_conv)
      }
    }
  >
      {({values}) => <ConvertForm values={values} valueBase={valueBase} valueConv={valueConv} currencyBase={currencyBase} currencyConv={currencyConv} />}
  </Formik>
)

export default ConvertFormContainer