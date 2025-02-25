import * as yup from 'yup';

export const LOGIN_SCHEMAS = yup.object({
    // email: yup.string().email().required(),
    email: yup
        .string()
        .min(2)
        .required('Enter your email or mobile phone number'),
    password: yup
        .string()
        .min(8)
        .matches(/^[a-z]*$/)
        .required('Enter your password'),
});
