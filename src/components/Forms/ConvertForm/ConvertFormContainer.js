import { Formik } from 'formik'
import { useDispatch } from 'react-redux';
import ConvertForm from './ConvertForm';
import { sendExchange } from '../../../store/actions'
// import getValidationSchema from './convertFormValidationSchema';

const ConvertFormContainer = ({
    initialValues = {
        currency_base: 'usd',
        currency_conv: 'uah',
        amount_base: '',
        amount_conv: '',
    },
}) => {
  const dispatch = useDispatch()
  return (
    <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(form) => {
          dispatch(sendExchange(form))
          }
        }
    >
        {({values}) => <ConvertForm values={values} />}
    </Formik>
  )
}

export default ConvertFormContainer