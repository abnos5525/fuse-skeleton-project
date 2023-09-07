import { forwardRef, useEffect, useState } from 'react';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form'

import qs from 'qs';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Paper, TextField,Typography } from "@mui/material";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { getallSystemData } from "./data"; 
import SystemItems from "./SystemItems";
import FormValidation from './FormValidation'

const System = () =>{
    const systemData = getallSystemData();

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const defaultValues = {
        systemName: '',
        systemLatinName: '',
        systemNumber: '',
        systemPort: '',
      };

    const { control, formState, handleSubmit, reset } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(FormValidation),
      });

    const { isValid, dirtyFields, errors } = formState;

      //------------------------------------------------------
      //------------------------------------------------------
      //------------------------------------------------------

      const [open, setOpen] = useState(false);

      const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

    const onSubmit = async (formData) =>{
        try{
            console.log(formData)
            const data = qs.stringify(formData);

            const {status} = await axios.post('http://localhost:8085/server/addSystemInfo', data, config)

            if(status === 201){
                console.log('Done')
            }else{
                console.log('Error')
            }

        }catch(err){
            console.log(err)
        }
        reset(defaultValues);
    }

      //------------------------------------------------------
      //------------------------------------------------------
      //------------------------------------------------------

    const [system, setSystem] = useState([])

    useEffect(()=>{
        const fetch= async ()=>{
            try {
            const {data} = await axios.get('http://localhost:8085/server/systemInfo')
            setSystem(data)

        }catch (error) {
            console.error(error);
          }
        } 
        fetch()
    },[])
    

    return(
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        ثبت شد
                    </Alert>
                </Stack>
            </Snackbar>

            <Paper className="container min-h-auto sm:min-h-auto rounded-0 
                py-5 px-5 sm:p-5 sm:rounded-2xl sm:shadow mt-5" style={{width:'95%'}}>

                <form method='post'
                name="systemForm"
                noValidate
                onSubmit={handleSubmit(onSubmit)}>

                    <Controller
                        name="systemName"
                        className="position-relative"
                        control={control}
                        render={({ field }) => (
                            <div>
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',right:'22%',top:'10%'}}>
                                {errors?.systemName?.message}
                            </Typography>
                            <TextField size="small"
                            {...field}
                            label="نام سامانه"
                            type="text"
                            error={!!errors.systemName}
                            className="info-form-input"
                            variant="outlined"
                            required
                            />
                            </div>
                        )}/>

                        <Controller
                        name="systemLatinName"
                        className="position-relative"
                        control={control}
                        render={({ field }) => (
                            <div>
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',top:'10%',right:'49%'}}>
                                {errors?.systemLatinName?.message}
                            </Typography>
                            <TextField size="small"
                            {...field}
                            label="نام لاتین سامانه"
                            type="text"
                            error={!!errors.systemLatinName}
                            className="info-form-input"
                            variant="outlined"
                            required
                            />
                            </div>
                        )}/>

                        <Controller
                        name="systemNumber"
                        className="position-relative"
                        control={control}
                        render={({ field }) => (
                            <div>
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',top:'10%',right:'81%'}}>
                                {errors?.systemNumber?.message}
                            </Typography>
                            <TextField size="small"
                            {...field}
                            label="شماره سامانه"
                            type="text"
                            error={!!errors.systemNumber}
                            className="info-form-input"
                            variant="outlined"
                            required
                            />
                            </div>
                        )}/>

                        <Controller
                        name="systemPort" 
                        className="position-relative"
                        control={control}
                        render={({ field }) => (
                            <div>
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',top:'18%',right:'26%'}}>
                                {errors?.systemPort?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="پورت سامانه"
                                type="text"
                                error={!!errors.systemPort}
                                helperText=""
                                className="info-form-input"
                                variant="outlined"
                                required
                            />
                            </div>
                        )}
                        />

                        <Button
                        variant="contained"
                        color="secondary"
                        className="float-start"
                        aria-label="Register"
                        disabled={!formState.isValid}
                        type="submit"
                        size="small"
                        style={{marginTop:'6vw',width: '120px'}}>
                            ذخیره
                        </Button>

                </form>
            

            </Paper>

                <Paper className="container min-h-auto sm:min-h-auto rounded-0 px-1 sm:p-16 sm:rounded-2xl sm:shadow mt-4" style={{width:'95%'}}>

                <Box className="row w-100 m-auto" 
                style={{height:'30px',borderBottom:'1px solid #aaa'}}>
                        <span className="col-2 iranSans fs-4 fw-bold text-center mx-4 head">نام سامانه</span>

                        <span className="col-2 iranSans fs-4 fw-bold text-center mx-4 head">نام لاتین سامانه</span>
     
                        <span className="col-2 iranSans fs-4 fw-bold text-center mx-4 head">شناسه سامانه</span>

                        <span className="col-2 iranSans fs-4 fw-bold text-center mx-4 head">شماره پورت</span>
                </Box>

                <Box className="row w-100 m-auto searchs" 
                style={{height:'40px',borderBottom:'1px solid #aaa'}}>

                  <Box className="col-auto iranSans mx-4 position-relative searchdiv">
                  <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch" placeholder="جستجو"/>
                  </Box>

                  <Box className="col-auto iranSans mx-4 position-relative searchdiv">
                  <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch" placeholder="جستجو"/>
                  </Box>

                  <Box className="col-auto iranSans mx-4 position-relative searchdiv">
                  <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch" placeholder="جستجو"/>
                  </Box>

                  <Box className="col-auto iranSans mx-4 position-relative searchdiv">
                  <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch" placeholder="جستجو"/>
                  </Box>

                </Box>

                <Box className="row w-100 m-auto" 
                style={{height:'auto'}}>
                    {
                        system.length > 0 ? system.map((sys, index) =>(
                            <SystemItems key={index} sys={sys}/>
                        )) :
                            <p className='text-danger fs-3 text-center iranSans py-3'>موردی یافت نشد</p>
                    }
                </Box>

                    <Stack spacing={2} className="pagination" style={{width:'450px'}}>
                        <Pagination  color="secondary"
                            count={10}
                            renderItem={(item) => (
                            <PaginationItem
                            components={{ next: KeyboardDoubleArrowLeftIcon, previous: KeyboardDoubleArrowRightIcon }}
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