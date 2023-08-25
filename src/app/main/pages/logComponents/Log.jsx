import { Formik,Form,Field, ErrorMessage } from "formik";
import { Paper } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" style={{borderRadius:'5px'}}>{msg}</p>}/>

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
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" style={{right:'35%',borderRadius:'5px'}}>{msg}</p>}/>

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
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" style={{right:'62%',borderRadius:'5px'}}>{msg}</p>}/>

                        <Field type="text" name="event" placeHolder="نوع رویداد"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.event && !errors.event ? 'valid-input' : ''}`} />
                        <ErrorMessage name="event" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" style={{top:'17%',borderRadius:'5px'}}>{msg}</p>}/>

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
                        style={{right:'35%',top:'17%',borderRadius:'5px'}}>{msg}</p>}/>

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

            <Paper className="container min-h-auto sm:min-h-auto rounded-0 px-1 sm:p-16 sm:rounded-2xl sm:shadow mt-4" style={{width:'95%'}}>
                        <Box className="row w-100 m-auto" 
                            style={{height:'30px',borderBottom:'1px solid #aaa'}}>
                            <span className='col-2 yekan fs-5 fw-bold text-center head2'>توضیحات</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head2'>نام سازمان</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head2'>نام سامانه</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head2'>دسته بندی</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head2'>نوع رویداد</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head2'>حساسیت رویداد</span>
                        </Box>

                        <Box className="row w-100 m-auto searchs" 
                            style={{height:'40px',borderBottom:'1px solid #aaa'}}>
                            <Box className="col-auto yekan position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto yekan position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto yekan position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>


                            <Box className="col-auto yekan position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto yekan position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>


                            <Box className="col-auto yekan position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                        </Box>

                        <Box className="row w-100 m-auto" 
                            style={{height:'auto',borderBottom:'1px solid #aaa'}}>
                            {
                                logData.map(log =>(
                                    <LogItems key={log.organizationName} log={log}/>
                                ))
                            }
                            
                        </Box>
                        <Stack spacing={2} className="pagination" style={{width:'450px'}}>
                        <Pagination  color="secondary"
                            count={10}
                            renderItem={(item) => (
                            <PaginationItem
                                slots={{ next: ArrowBackIcon, previous: ArrowForwardIcon }}
                                {...item}
                            />
                            )}
                        />
                    </Stack>
                   
                </Paper>
    
        </>
    )
}

export default Log;