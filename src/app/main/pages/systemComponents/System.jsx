import { Formik,Form,Field, ErrorMessage } from "formik";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Paper } from "@mui/material";

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getallSystemData } from "./data"; 
import SystemItems from "./SystemItems";
import FormValidation from './FormValidation'

const System = () =>{
    const systemData = getallSystemData();
    return(
        <>
            <Paper className=" container min-h-auto sm:min-h-auto rounded-0 py-5 px-5 sm:p-5 sm:rounded-2xl sm:shadow mt-5" style={{width:'95%'}}>
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
                        
                        <Field name="systemName" placeholder="نام سامانه"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemName && !errors.systemName ? 'valid-input' : ''}`} type="text" />
                       
                        <ErrorMessage name="systemName" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" style={{borderRadius:'5px'}}>{msg}</p>}/>

                        <Field name="systemLatinName" placeholder="نام لاتین سامانه"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemLatinName && !errors.systemLatinName ? 'valid-input' : ''}`} type="text" />
                        <ErrorMessage name="systemLatinName" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" 
                        style={{right:'35%',borderRadius:'5px'}}>{msg}</p>}/>

                        <Field name="systemNumber" placeholder="شماره سامانه"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemNumber && !errors.systemNumber ? 'valid-input' : ''}`}  type="text"  />
                        <ErrorMessage name="systemNumber" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" 
                        style={{right:'62%',borderRadius:'5px'}}>{msg}</p>}/>

                        <Field  name="systemPort" placeholder="شماره پورت"
                        className={`form-control info-form-input vazir fs-5 
                        ${touched.systemPort && !errors.systemPort ? 'valid-input' : ''}`}  type="text"  />
                        <ErrorMessage name="systemPort" 
                        render={msg => <p className="text-danger position-absolute border-1 border-danger bg-white p-1" 
                        style={{top:'18%',borderRadius:'5px'}}>{msg}</p>}/>

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
                        <span className="col-2 yekan fs-4 fw-bold text-center mx-4 head">نام سامانه</span>

                        <span className="col-2 yekan fs-4 fw-bold text-center mx-4 head">نام لاتین سامانه</span>
     
                        <span className="col-2 yekan fs-4 fw-bold text-center mx-4 head">شناسه سامانه</span>

                        <span className="col-2 yekan fs-4 fw-bold text-center mx-4 head">شماره پورت</span>
                </Box>

                <Box className="row w-100 m-auto searchs" 
                style={{height:'40px',borderBottom:'1px solid #aaa'}}>

                  <Box className="col-auto yekan mx-4 position-relative searchdiv">
                  <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch" placeholder="جستجو"/>
                  </Box>

                  <Box className="col-auto yekan mx-4 position-relative searchdiv">
                  <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch" placeholder="جستجو"/>
                  </Box>

                  <Box className="col-auto yekan mx-4 position-relative searchdiv">
                  <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch" placeholder="جستجو"/>
                  </Box>

                  <Box className="col-auto yekan mx-4 position-relative searchdiv">
                  <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch" placeholder="جستجو"/>
                  </Box>

                </Box>

                <Box className="row w-100 m-auto" 
                style={{height:'auto',borderBottom:'1px solid #aaa'}}>
                    {
                        systemData.map(sys =>(
                            <SystemItems key={sys.systmeName} sys={sys}/>
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

export default System;