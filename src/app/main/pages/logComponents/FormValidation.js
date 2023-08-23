import * as yup from 'yup'

const formValidation = yup.object().shape({
    organName: yup.string().required('نام سازمان را وارد کنید'),
    systemName: yup.string().required('نام سامانه را وارد کنید'),
    group: yup.string().required('دسته بندی را وارد کنید'),
    event: yup.string().required('نوع رویداد را وارد کنید'),
    sensitive: yup.string().required('حساسیت رویداد را وارد کنید'),
})


export default formValidation