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

import { getallAcceptionData } from "./data"; 
import AcceptionItems from "./AcceptionItems";

const Acception = () =>{
    const acceptionData = getallAcceptionData();
    return(
        <>
            <Paper className=" container min-h-auto sm:min-h-auto rounded-0 py-5 px-5 sm:p-5 sm:rounded-2xl sm:shadow mt-5" style={{width:'95%'}}>

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
                    render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1"
                    style={{borderRadius:'5px'}}>{msg}</p>}/>

                    <Field name='softwareName' as='select' 
                        className={`form-control info-form-input vazir fs-5 ${touched.softwareName && !errors.softwareName ? 'valid-input' : ''} `}>
                            <option value="">
                              سامانه
                            </option>
                            <option> سامانه1</option>
                            <option> سامانه2</option>
                        </Field>
                        <ErrorMessage name="softwareName" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" 
                        style={{right:'34%',borderRadius:'5px'}}>{msg}</p>}/>

                        <Field name='organName' as='select' 
                        className={`form-control info-form-input vazir fs-5 ${touched.organName && !errors.organName ? 'valid-input' : ''} `}>
                            <option value="">
                              سازمان
                            </option>
                            <option> سازمان1</option>
                            <option> سازمان2</option>
                        </Field>
                        <ErrorMessage name="organName" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1"
                        style={{right:'62%',borderRadius:'5px'}}>{msg}</p>}/>
                        

                        <Field type="text" name="systemAddress" placeHolder="آدرس سامانه عامل"
                            className={`form-control info-form-input vazir fs-5 
                        ${touched.systemAddress && !errors.systemAddress ? 'valid-input' : ''} `}
                        />
                        <ErrorMessage name="systemAddress" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" 
                        style={{top:'18%',borderRadius:'5px'}}>{msg}</p>}/>

                        <Field type="text" name="systemPort" placeHolder="پورت سامانه عامل"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemPort && !errors.systemPort ? 'valid-input' : ''} `} />
                        <ErrorMessage name="systemPort" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1"
                        style={{right:'34%',top:'18%',borderRadius:'5px'}}>{msg}</p>}/>

                        <Field type="text" name="systemMainAddress" placeHolder="آدرس سامانه اصلی"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemMainAddress && !errors.systemMainAddress ? 'valid-input' : ''} `} />
                        <ErrorMessage name="systemMainAddress" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1"
                        style={{right:'62%',top:'18%',borderRadius:'5px'}}>{msg}</p>}/>

                        <Field type="text" name="systemMainPort" placeHolder="پورت سامانه اصلی"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemMainPort && !errors.systemMainPort ? 'valid-input' : ''} `} />
                        <ErrorMessage name="systemMainPort" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1"
                        style={{top:'26%',borderRadius:'5px'}}>{msg}</p>}/>

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
                            style={{height:'40px',borderBottom:'1px solid #aaa'}}>
                            <span className='col-2 yekan fs-5 fw-bold text-center head3'>نام سازمان</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head3'>نام سامانه</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head3'>آدرس عامل</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head3'>پورت عامل</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head3'>آدرس سامانه اصلی</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head3'>پورت سامانه اصلی</span>
                            <span className='col-2 yekan fs-5 fw-bold text-center head3'>وضعیت</span>
                        </Box>

                        <Box className="row w-100 m-auto searchs" 
                            style={{height:'40px',borderBottom:'1px solid #aaa'}}>
                            <Box className="col-auto yekan position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto yekan position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto yekan position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>


                            <Box className="col-auto yekan position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto yekan position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto yekan position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto yekan position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                        </Box>


                        <Box className="row w-100 m-auto">
                            {
                                acceptionData.map(acpt =>(
                                    <AcceptionItems key={acpt.organizationName} acpt={acpt}/>
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

export default Acception;