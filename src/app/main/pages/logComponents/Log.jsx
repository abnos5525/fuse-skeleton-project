import { useState } from "react";
import { Formik,Form,Field, ErrorMessage } from "formik";

import {Pagination} from 'react-bootstrap'


import formValidation from './FormValidation'
import { getallLogData } from "./data"; 
import LogItems from "./LogItems";

const Log = () =>{
    const logData = getallLogData();

    return(
        <>
            <div className="container">
                <div className="info-form p-3">
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
                        render={msg => <p className="text-danger position-absolute">{msg}</p>}/>

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
                        render={msg => <p className="text-danger position-absolute" style={{right:'33%'}}>{msg}</p>}/>

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
                        render={msg => <p className="text-danger position-absolute" style={{right:'64%'}}>{msg}</p>}/>

                        <Field type="text" name="event" placeHolder="نوع رویداد"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.event && !errors.event ? 'valid-input' : ''}`} />
                        <ErrorMessage name="event" 
                        render={msg => <p className="text-danger position-absolute" style={{top:'35%'}}>{msg}</p>}/>

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
                        render={msg => <p className="text-danger position-absolute" 
                        style={{right:'33%',top:'35%'}}>{msg}</p>}/>

                        <input disabled={!isValid || Object.keys(touched).length === 0} id="info-form-btn" type="submit" className="btn btn-primary" value='ذخیره'/>
                    </Form>
                    )}
                </Formik>
                </div>

                <div className="container pt-2 info-info-log">
                    <div className="grid">
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
                            <div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Log;