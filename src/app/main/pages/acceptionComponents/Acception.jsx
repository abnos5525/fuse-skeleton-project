import { Formik,Form,Field, ErrorMessage } from "formik";

import {Pagination} from 'react-bootstrap'

import formValidation from './FormValidation'

import { getallAcceptionData } from "./data"; 
import AcceptionItems from "./AcceptionItems";

const Acception = () =>{
    const acceptionData = getallAcceptionData();
    return(
        <>
            <div className="container">
                <div className="info-form p-3">
                <Formik initialValues={{
                    acceptName: '',
                    softwareName: '',
                    organName: '',
                    systemAddress: '',
                    systemPort: '',
                    systemMainAddress: '',

                }} validationSchema={formValidation} 
                    onSubmit={()=> alert('ok')}>

                {({ touched, errors, isValid }) => (
                    <Form>
                        
                    <Field type="text" name="acceptName" placeHolder="نام"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.acceptName && !errors.acceptName ? 'valid-input' : ''} `}
                    />
                    <ErrorMessage name="acceptName" 
                    render={msg => <p className="text-danger position-absolute">{msg}</p>}/>

                    <Field name='softwareName' as='select' 
                        className={`form-control info-form-input vazir fs-5 ${touched.softwareName && !errors.softwareName ? 'valid-input' : ''} `}>
                            <option value="">
                              سامانه
                            </option>
                            <option> سامانه1</option>
                            <option> سامانه2</option>
                        </Field>
                        <ErrorMessage name="softwareName" 
                        render={msg => <p className="text-danger position-absolute" style={{right:'33%'}}>{msg}</p>}/>

                        <Field name='organName' as='select' 
                        className={`form-control info-form-input vazir fs-5 ${touched.organName && !errors.organName ? 'valid-input' : ''} `}>
                            <option value="">
                              سازمان
                            </option>
                            <option> سازمان1</option>
                            <option> سازمان2</option>
                        </Field>
                        <ErrorMessage name="organName" 
                        render={msg => <p className="text-danger position-absolute"style={{right:'64%'}}>{msg}</p>}/>
                        

                        <Field type="text" name="systemAddress" placeHolder="آدرس سامانه عامل"
                            className={`form-control info-form-input vazir fs-5 
                        ${touched.systemAddress && !errors.systemAddress ? 'valid-input' : ''} `}
                        />
                        <ErrorMessage name="systemAddress" 
                        render={msg => <p className="text-danger position-absolute" style={{top:'35%'}}>{msg}</p>}/>

                        <Field type="text" name="systemPort" placeHolder="پورت سامانه عامل"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemPort && !errors.systemPort ? 'valid-input' : ''} `} />
                        <ErrorMessage name="systemPort" 
                        render={msg => <p className="text-danger position-absolute"
                        style={{right:'33%',top:'35%'}}>{msg}</p>}/>

                        <Field type="text" name="systemMainAddress" placeHolder="آدرس سامانه اصلی"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemMainAddress && !errors.systemMainAddress ? 'valid-input' : ''} `} />
                        <ErrorMessage name="systemMainAddress" 
                        render={msg => <p className="text-danger position-absolute"
                        style={{right:'64%',top:'35%'}}>{msg}</p>}/>

                        <Field type="text" name="systemMainPort" placeHolder="پورت سامانه اصلی"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemMainPort && !errors.systemMainPort ? 'valid-input' : ''} `} />
                        <ErrorMessage name="systemMainPort" 
                        render={msg => <p className="text-danger position-absolute"
                        style={{top:'65%'}}>{msg}</p>}/>

                        <input disabled={!isValid || Object.keys(touched).length === 0} id="info-form-btn" type="submit" className="btn btn-primary" value='ذخیره'/>
                    </Form>
                    )}
                </Formik>
                </div>

                <div className="container info-info pt-2 info-info-acception">
                    <div className="grid">
                        <div className="row">
                            <div className="col-2"><span>نام سازمان</span></div>
                            <div className="col-2"><span>نام سامانه</span></div>
                            <div className="col-2"><span>آدرس عامل</span></div>
                            <div className="col-2"><span>پورت عامل</span></div>
                            <div className="col-2"><span>آدرس سامانه اصلی</span></div>
                            <div className="col-2"><span>پورت سامانه اصلی</span></div>
                            <div className="col-2"><span>وضعیت</span></div>
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

                            <div className="col-2">
                                <div style={{position:'relative'}}>
                                    <i className="fa-solid fa-magnifying-glass fa-rotate-90"> </i>
                                    <input type="text" className="form-control" placeholder="جستجو"/>
                                </div>
                            </div>
                        </div>

                        <div className="row p-2 h-100">
                            {
                                acceptionData.map(acpt =>(
                                    <AcceptionItems key={acpt.organizationName} acpt={acpt}/>
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

export default Acception;