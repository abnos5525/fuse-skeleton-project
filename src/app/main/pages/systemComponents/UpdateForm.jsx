import { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Hidden, Paper, TextField, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import qs from 'qs';
import axios from 'axios';
import AppContext from 'app/AppContext';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import FormValidation from './FormValidation';
import getConnection from '../serverUrl';

const UpdateForm = ()=>{

    const {setForceRender, forceRender,setSystemFormSwitch,
      setSystemFormValues,systemFormValues, systemNumbers} = useContext(AppContext)

      const defaultValues = {
        systemName: systemFormValues.systemName,
          systemLatinName: systemFormValues.systemLatinName,
          systemNumber: systemFormValues.systemNumber,

          oldSystemNumber: systemFormValues.systemNumber,
          systemPort: systemFormValues.systemPort,
      };

      useEffect(()=>{
        reset(defaultValues);
      },[systemFormValues])
      

      const { control, formState, handleSubmit, reset } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(FormValidation),
      });

    const { errors } = formState;

    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
    
      const onSubmit = async (formData) => {

        const filteredSystem = systemNumbers.filter((item)=>{
          return item !== formData.oldSystemNumber;
        });

        console.log(filteredSystem)
        console.log(formData.systemNumber.toString())

        console.log(filteredSystem.includes(formData.systemNumber.toString()))

        try {
          
          if(filteredSystem.includes(formData.systemNumber)){
            toast.error('!شماره سامانه تکراری است', {
              position: 'bottom-left',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });

          }else{
            const data = qs.stringify(formData);
    
            const { status } = await axios.post(
              getConnection('updateSystemInfo'),
              data,
              config
            );
  
            if (status === 201) {
              toast.success('با موفقیت بروزرسانی شد!', {
                position: 'bottom-left',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            setSystemFormSwitch(true)
            } else {
              toast.error('مشکلی پیش آمده!', {
                position: 'bottom-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            }
            setForceRender(!forceRender);
            reset(defaultValues);
          }

          
        } catch (err) {
          console.log(err);
          toast.error('مشکلی پیش آمده!', {
            position: 'bottom-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      };

      const cancelUpdate = (e) => {
        e.preventDefault()
        setSystemFormSwitch(true);
        setSystemFormValues({});
      };

    return(
        <>

            <form method="post" name="systemUpdateForm" noValidate onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="systemName"
                className="position-relative"
                control={control}
                render={({ field }) => (
                  <div>
                    <Typography
                      className="position-absolute bg-white"
                      color="error"
                      variant="body2"
                      style={{ zIndex: '2', right: '22%', top: '10%' }}
                    >
                      {errors?.systemName?.message}
                    </Typography>
                    <TextField
                      size="small"
                      {...field}
                      label="نام سامانه"
                      type="text"
                      error={!!errors.systemName}
                      className="info-form-input"
                      variant="outlined"
                      required
                    />
                  </div>
                )}
              />

              <Controller
                name="systemLatinName"
                className="position-relative"
                control={control}
                render={({ field }) => (
                  <div>
                    <Typography
                      className="position-absolute bg-white"
                      color="error"
                      variant="body2"
                      style={{ zIndex: '2', top: '10%', right: '49%' }}
                    >
                      {errors?.systemLatinName?.message}
                    </Typography>
                    <TextField
                      size="small"
                      {...field}
                      label="نام لاتین سامانه"
                      type="text"
                      error={!!errors.systemLatinName}
                      className="info-form-input"
                      variant="outlined"
                      required
                    />
                  </div>
                )}
              />

              <Controller
                name="systemNumber"
                className="position-relative"
                control={control}
                render={({ field }) => (
                  <div>
                    <Typography
                      className="position-absolute bg-white"
                      color="error"
                      variant="body2"
                      style={{ zIndex: '2', top: '10%', right: '81%' }}
                    >
                      {errors?.systemNumber?.message}
                    </Typography>
                    <TextField
                      size="small"
                      {...field}
                      label="شماره سامانه"
                      type="text"
                      error={!!errors.systemNumber}
                      className="info-form-input"
                      variant="outlined"
                      required
                    />
                  </div>
                )}
              />

              <Controller 
                name="oldSystemNumber"
                className="position-relative"
                control={control}
                render={({ field }) => (
                    <Hidden
                      {...field}
                      type="hidden"
                      required
                    />
                )}
              />
              

              <Controller
                name="systemPort"
                className="position-relative"
                control={control}
                render={({ field }) => (
                  <div>
                    <Typography
                      className="position-absolute bg-white"
                      color="error"
                      variant="body2"
                      style={{ zIndex: '2', top: '18%', right: '26%' }}
                    >
                      {errors?.systemPort?.message}
                    </Typography>
                    <TextField
                      size="small"
                      {...field}
                      label="پورت سامانه"
                      type="text"
                      error={!!errors.systemPort}
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
                style={{ marginTop: '6vw', width: '120px' }}
              >
                بروزرسانی
              </Button>

              <Button
                variant="contained"
                color="warning"
                className="float-start"
                type="cancel"
                onClick={cancelUpdate}
                size="small"
                style={{ marginTop: '6vw', width: '120px' }}
              >
                انصراف
              </Button>

            </form>
        </>
    )
}

export default UpdateForm