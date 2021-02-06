import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup.string().min(3).max(60).required('*required'),
    email: yup.string().max(100).email('*invalid email').required('*required'),
    password: yup.string().min(6,'*password must be 6-16 charachters').max(16, '*password must be 6-16 charachters').required('*required'),
    agreeToTerms: yup.mixed().oneOf([true], "*You must agree to terms")
});