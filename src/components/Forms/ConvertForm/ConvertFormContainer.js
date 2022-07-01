import { Formik } from 'formik'
import ConvertForm from './ConvertForm';
import { exchangeCurrency } from '../../../utils';
// import getValidationSchema from './convertFormValidationSchema';

const ConvertFormContainer = ({
    initialValues = {
        currency_base: 'usd',
        currency_conv: 'uah',
        amount_base: '',
        amount_conv: '',
    },
    setValueBase,
    setValueConv
}) => {
  return (
    <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={async (form) => {
          const convertedCurr = await exchangeCurrency(form)
          setValueBase(convertedCurr.valueBase)
          setValueConv(convertedCurr.valueConv)
          }
        }
    >
        {({values}) => <ConvertForm values={values} />}
    </Formik>
  )
}

export default ConvertFormContainer