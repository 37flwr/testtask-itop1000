import { Formik } from 'formik'
import ConvertForm from './ConvertForm';
// import getValidationSchema from './convertFormValidationSchema';

const ConvertFormContainer = ({
    initialValues = {
        currency_base: 'usd',
        currency_conv: 'uah',
        amount_base: 0,
        amount_conv: 0,
    },
}) => {
  return (
    <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(form) => {
          console.log(form);
          }
        }
    >
        {({values}) => <ConvertForm values={values} />}
    </Formik>
  )
}

export default ConvertFormContainer