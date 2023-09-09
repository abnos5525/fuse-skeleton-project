import { useContext } from 'react';
import Button from '@mui/material/Button';
import { Paper, TextField, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import qs from 'qs';
import axios from 'axios';
import AppContext from 'app/AppContext';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import FormValidation from './FormValidation';

const InsertForm = ()=>{

    const {systemNumbers} = useContext(AppContext)

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

    const { errors } = formState;

    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      
    
      const onSubmit = async (formData) => {
        try {

          if(systemNumbers.includes(formData.systemNumber.toString())){
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
              'http://localhost:8085/server/addSystemInfo',
              data,
              config
            );
            if (status === 201) {
              toast.success('!با موفقیت ذخیره شد', {
                position: 'bottom-left',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            } else {
              toast.error('!مشکلی پیش آمده', {
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
            reset(defaultValues);
          }

        } catch (err) {
          console.log(err);
          toast.error('!مشکلی پیش آمده', {
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

    return(
        <>
            <form method="post" name="systemForm" noValidate onSubmit={handleSubmit(onSubmit)}>
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
                ذخیره
              </Button>
            </form>
        </>
    )
}

export default InsertForm