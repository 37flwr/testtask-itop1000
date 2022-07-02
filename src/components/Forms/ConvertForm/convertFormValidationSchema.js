import * as Yup from 'yup'

const getValidationSchema = () => {
    return Yup.object().shape({
        amount_base: Yup.number()
            .typeError('Must be a number'),
        amount_conv: Yup.number()
            .typeError('Must be a number'),
    })
}

export default getValidationSchema