import { Formik,Form,Field, ErrorMessage } from "formik";
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import {Pagination} from 'react-bootstrap'
import { getallSystemData } from "./data"; 
import SystemItems from "./SystemItems";

import FormValidation from './FormValidation'


const System = () =>{
    const systemData = getallSystemData();
    return(
        <>
            <div className="container">
            <Paper className="w-full sm:w-auto min-h-full h-50 sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow">
                {/* <div className="info-form p-3"> */}
                
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
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" style={{borderRadius:'5px'}}>{msg}</p>}/>

                        <Field name="systemLatinName" placeHolder="نام لاتین سامانه"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemLatinName && !errors.systemLatinName ? 'valid-input' : ''}`} type="text" />
                        <ErrorMessage name="systemLatinName" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" 
                        style={{right:'35%',borderRadius:'5px'}}>{msg}</p>}/>

                        <Field name="systemNumber" placeHolder="شماره سامانه"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemNumber && !errors.systemNumber ? 'valid-input' : ''}`}  type="text"  />
                        <ErrorMessage name="systemNumber" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" 
                        style={{right:'62%',borderRadius:'5px'}}>{msg}</p>}/>

                        <Field  name="systemPort" placeHolder="شماره پورت"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemPort && !errors.systemPort ? 'valid-input' : ''}`}  type="text"  />
                        <ErrorMessage name="systemPort" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" 
                        style={{top:'16%',borderRadius:'5px'}}>{msg}</p>}/>

                        {/* <input disabled={!isValid || Object.keys(touched).length === 0} id="info-form-btn" type="submit" className="btn btn-primary" value='ذخیره'/> */}

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