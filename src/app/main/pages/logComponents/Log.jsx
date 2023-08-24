import { Formik,Form,Field, ErrorMessage } from "formik";
import { Paper } from "@mui/material";
import Button from '@mui/material/Button';

import {Pagination} from 'react-bootstrap'

import formValidation from './FormValidation'
import { getallLogData } from "./data"; 
import LogItems from "./LogItems";

const Log = () =>{
    const logData = getallLogData();

    return(
        <>
            <Paper className=" container min-h-auto sm:min-h-auto rounded-0 py-5 px-5 sm:p-5 sm:rounded-2xl sm:shadow mt-5" style={{width:'95%'}}>

                <Formik initialValues={{
                    organName: '',
                    systemName: '',
                    group: '',
                    event: '',
                    sensitive: ''
                }} validationSchema={formValidation} 
                    onSubmit={()=> alert('ok')}>

                {({ touched, errors, isValid }) => (
                    <Form>
                        <Field as='select' name='organName'
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.organName && !errors.organName ? 'valid-input' : ''} `} >
                            <option value="">
                            نام سازمان
                            </option>
                            <option>سازمان1</option>
                            <option>سازمان2</option>
                        </Field>
                        <ErrorMessage name="organName" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1">{msg}</p>}/>

                        <Field name='systemName' as='select' 
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemName && !errors.systemName ? 'valid-input' : ''}`}>
                            <option value="">
                            نام سامانه
                            </option>
                            <option>سامانه1</option>
                            <option>سامانه2</option>
                        </Field>
                        <ErrorMessage name="systemName" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" style={{right:'35%'}}>{msg}</p>}/>

                        <Field name='group' as='select' 
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.group && !errors.group ? 'valid-input' : ''}`}>
                            <option value="">
                             دسته بندی
                            </option>
                            <option>دسته بندی1</option>
                            <option>دسته بندی2</option>
                        </Field>
                        <ErrorMessage name="group" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" style={{right:'62%'}}>{msg}</p>}/>

                        <Field type="text" name="event" placeHolder="نوع رویداد"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.event && !errors.event ? 'valid-input' : ''}`} />
                        <ErrorMessage name="event" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" style={{top:'17%'}}>{msg}</p>}/>

                        <Field name='sensitive' as='select' 
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.sensitive && !errors.sensitive ? 'valid-input' : ''}`}>
                            <option value="">
                              حساسیت رویداد
                            </option>
                            <option>نرمال</option>
                            <option>کم</option>
                            <option>بحرانی</option>
                        </Field>
                        <ErrorMessage name="sensitive"  
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" 
                        style={{right:'35%',top:'18%'}}>{msg}</p>}/>

                        <Button
                            variant="contained"
                            color="secondary"
                            className="float-start"
                            aria-label="Register"
                            disabled={!isValid || Object.keys(touched).length === 0}
                            type="submit"
                            size="small"
                            style={{marginTop:'6vw',width: '120px'}}
                            >
                                ذخیره
                        </Button>
                    </Form>
                    )}
                </Formik>
            </Paper>

            <Paper className="container min-h-auto sm:min-h-auto rounded-0 px-1 sm:p-16 sm:rounded-2xl sm:shadow mt-4 info-info-log" style={{width:'95%'}}>
                        <div className="row">
                            <div className="col-2"><span className='fs-5'>توضیحات</span></div>
                            <div className="col-2"><span className='fs-5'>نام سازمان</span></div>
                            <div className="col-2"><span className='fs-5'>نام سامانه</span></div>
                            <div className="col-2"><span className='fs-5'>دسته بندی</span></div>
                            <div className="col-2"><span className='fs-5'>نوع رویداد</span></div>
                            <div className="col-2"><span className='fs-5'>حساسیت رویداد</span></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-2">
                                <div style={{position:'relative'}}>
                                    <i className="fa-solid fa-magnifying-glass fa-rotate-90"> </i>
                                    <input type="text" className="form-control" placeholder="جستجو"/>
                                </div>
                            </div>

                            <div className="col-2">
                                <div style={{position:'relative'}}>
                                    <i className="fa-solid fa-magnifying-glass fa-rotate-90"> </i>
                                    <input type="text" className="form-control" placeholder="جستجو"/>
                                </div>
                            </div>

                            <div className="col-2">
                                <div style={{position:'relative'}}>
                                    <i className="fa-solid fa-magnifying-glass fa-rotate-90"> </i>
                                    <input type="text" className="form-control" placeholder="جستجو"/>
                                </div>
                            </div>

                            <div className="col-2">
                                <div style={{position:'relative'}}>
                                    <i className="fa-solid fa-magnifying-glass fa-rotate-90"> </i>
                                    <input type="text" className="form-control" placeholder="جستجو"/>
                                </div>
                            </div>

                            <div className="col-2">
                                <div style={{position:'relative'}}>
                                    <i className="fa-solid fa-magnifying-glass fa-rotate-90"> </i>
                                    <input type="text" className="form-control" placeholder="جستجو"/>
                                </div>
                            </div>

                            <div className="col-2">
                                <div style={{position:'relative'}}>
                                    <i className="fa-solid fa-magnifying-glass fa-rotate-90"> </i>
                                    <input type="text" className="form-control" placeholder="جستجو"/>
                                </div>
                            </div>
                        </div>

                        <div className="row p-2 h-100">
                            {
                                logData.map(log =>(
                                    <LogItems key={log.organizationName} log={log}/>
                                ))
                            }
                            <Paper className="rounded-0 position-relative" style={{height:'30px'}}>
                                <Pagination className="pagination-system">
                                    <Pagination.First className="pagination-system-item" />
                                    <Pagination.Prev className="pagination-system-item" />
                                    <Pagination.Item className="pagination-system-item">{1}</Pagination.Item>
                                    <Pagination.Item className="pagination-system-item">{2}</Pagination.Item>
                                    <Pagination.Item className="pagination-system-item">{3}</Pagination.Item>
                                    <Pagination.Ellipsis className="pagination-system-item" />
                                    <Pagination.Item className="pagination-system-item">{10}</Pagination.Item>
                                    <Pagination.Next className="pagination-system-item" />
                                    <Pagination.Last className="pagination-system-item" />
                                </Pagination>
                            </Paper>
                        </div>
                   
                </Paper>
    
        </>
    )
}

export default Log;