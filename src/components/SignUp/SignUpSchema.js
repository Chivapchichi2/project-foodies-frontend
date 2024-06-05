import * as Yup from 'yup';

export const sinUpSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Za-zА-Яа-яІіЇїЄєҐґ'-]+$/, 'only letters')
        .min(3, 'more than 3 characters')
        .max(50, 'less than 50 characters')
        .trim()
        .required('required field'),
    email: Yup.string()
        .min(3, 'more than 3 characters')
        .max(150, 'less than 150 characters')
        .email('wrong email format')
        .matches(/^[A-Z0-9._%+-]+@(?!.*\.ru)[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Wrong email format')
        .trim()
        .required('required field'),
    password: Yup.string()
        .min(8, 'more than 8 characters')
        .max(50, 'less than 50 characters')
        .trim()
        .required('required field'),
});