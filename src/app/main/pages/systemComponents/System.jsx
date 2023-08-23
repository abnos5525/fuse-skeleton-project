import { Formik,Form,Field, ErrorMessage } from "formik";

import {Pagination} from 'react-bootstrap'
import { getallSystemData } from "./data"; 
import SystemItems from "./SystemItems";

import FormValidation from './FormValidation'

const System = () =>{
    const systemData = getallSystemData();
    return(
        <>
            <div className="container">
                <div className="info-form p-3">
                <Formik initialValues={{
                    systemName: '',
                    systemLatinName: '',
                    systemNumber: '',
                    systemPort: '',
                }}
                validationSchema={FormValidation}
                 onSubmit={()=> alert('ok')}>

                {({ touched, errors, isValid }) => (
                    <Form>
                        <Field name="systemName" placeHolder="نام سامانه"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemName && !errors.systemName ? 'valid-input' : ''}`} type="text" />
                        <ErrorMessage name="systemName" 
                        render={msg => <p className="text-danger position-absolute">{msg}</p>}/>

                        <Field name="systemLatinName" placeHolder="نام لاتین سامانه"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemLatinName && !errors.systemLatinName ? 'valid-input' : ''}`} type="text" />
                        <ErrorMessage name="systemLatinName" 
                        render={msg => <p className="text-danger position-absolute" 
                        style={{right:'33%'}}>{msg}</p>}/>

                        <Field name="systemNumber" placeHolder="شماره سامانه"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemNumber && !errors.systemNumber ? 'valid-input' : ''}`}  type="text"  />
                        <ErrorMessage name="systemNumber" 
                        render={msg => <p className="text-danger position-absolute" 
                        style={{right:'64%'}}>{msg}</p>}/>

                        <Field  name="systemPort" placeHolder="شماره پورت"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemPort && !errors.systemPort ? 'valid-input' : ''}`}  type="text"  />
                        <ErrorMessage name="systemPort" 
                        render={msg => <p className="text-danger position-absolute" 
                        style={{top:'37%'}}>{msg}</p>}/>

                        <input disabled={!isValid || Object.keys(touched).length === 0} id="info-form-btn" type="submit" className="btn btn-primary" value='ذخیره'/>

                    </Form>
                    )}
                </Formik>
                </div>

                <div className="container info-info pt-2">
                    <div className="grid">
                        <div className="row">
                            <div className="col-2"><span>نام سامانه</span></div>
                            <div className="col-2"><span>نام لاتین سامانه</span></div>
                            <div className="col-2"><span>شناسه سامانه</span></div>
                            <div className="col-2"><span>شماره پورت</span></div>
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
                        </div>

                        <div className="row p-2 h-100">
                            {
                                systemData.map(sys =>(
                                    <SystemItems key={sys.name} sys={sys}/>
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

export default System;