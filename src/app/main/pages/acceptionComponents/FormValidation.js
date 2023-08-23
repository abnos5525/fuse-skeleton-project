import * as yup from 'yup'

const formValidation = yup.object().shape({
    acceptName: yup.string().required('نام را وارد کنید'),
    softwareName: yup.string().required('نام سامانه را وارد کنید'),
    organName: yup.string().required('نام سازمان را وارد کنید'),
    systemAddress: yup.string().required('آدرس سامانه را وارد کنید'),
    systemPort: yup.number().typeError('عدد وارد کنید').positive('عدد باید مثبت باشد')
    .required('پورت سامانه را وارد کنید').max(9999,'پورت باید کمتر از 5 رقم باشد'),
    systemMainAddress: yup.string().required('آدرس سامانه اصلی را وارد کنید'),
    systemMainPort: yup.number().typeError('عدد وارد کنید').positive('عدد باید مثبت باشد')
    .required('پورت سامانه اصلی را وارد کنید').max(9999,'پورت باید کمتر از 5 رقم باشد')
})


export default formValidation