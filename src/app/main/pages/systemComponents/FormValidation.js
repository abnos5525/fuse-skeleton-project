import * as yup from 'yup'

const formValidation = yup.object().shape({
    systemName: yup.string().required('نام سامانه را وارد کنید'),
    systemLatinName: yup.string().matches(/^[0-9A-Za-z.\s]+$/, 'حروف انگلیسی وارد کنید')
    .required('نام لاتین را وارد کنید'),
    systemNumber: yup.number().typeError('عدد وارد کنید').positive('عدد باید مثبت باشد')
    .required('شناسه سامانه را وارد کنید'),
    systemPort: yup.number().typeError('عدد وارد کنید').positive('عدد باید مثبت باشد').required('شماره پورت را وارد کنید').max(9999,'پورت باید کمتر از 5 رقم باشد')
})


export default formValidation