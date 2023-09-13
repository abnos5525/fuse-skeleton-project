import { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Paper, TextField, Typography,Select } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import qs from 'qs';
import axios from 'axios';
import AppContext from 'app/AppContext';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import FormValidation from './FormValidation';
import getConnection from '../serverUrl';

const InsertForm = ()=>{

    const {acceptFormSwitch,forceRenderAccept,setForceRenderAccept,systemInfoAccept,setSystemInfoAccept,
      organInfoAccept,setOrganInfoAccept} = useContext(AppContext)

    const defaultValues = {
      organName: '',
      systemName: '',
      systemAddress: '',
      systemPort: '',
      systemMainAddress: '',
      systemMainPort: '',
      status: ''
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
            const data = qs.stringify(formData);
            console.log(formData)
            const { status } = await axios.post(
              getConnection('addAcceptInfo'),
              data,
              config
            );
            if(status === 201) {
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
              reset(defaultValues);
              setForceRenderAccept(!forceRenderAccept)
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


      useEffect(() => {
        const fetch = async () => {
          try {
            const { data:systemData } = await axios.get(getConnection('systemInfo'));
            const { data: organData } = await axios.get(getConnection('organInfo'));
            setSystemInfoAccept(systemData);
            setOrganInfoAccept(organData);

          } catch (error) {
            console.error(error);
          }
        };
        fetch();
      }, []);

    return(
        <>
            <form 
                name="acceptionForm"
                noValidate
                onSubmit={handleSubmit(onSubmit)}>

            <Controller
                    name="organName"
                    control={control}
                    render={({ field }) => (
                    <FormControl variant="outlined" className="info-form-input">
                        <InputLabel className="h-100" htmlFor="organName" style={{lineHeight:'5px'}}>نام سازمان</InputLabel>
                        <Select
                        label="نام سازمان"
                        error={!!errors.organName}
                        {...field}
                        >
                        {organInfoAccept.length > 0 ? organInfoAccept.map(org => (
                          <MenuItem value={org.id}>{org.organName}</MenuItem>
                        ))
                        :
                        <MenuItem value="">موردی یافت نشد</MenuItem>
                        }
                        </Select>
                    </FormControl>
                    )}
                />
                {errors?.organName && (
                    <Typography
                    className="position-absolute bg-white"
                    color="error"
                    variant="body2"
                    style={{ zIndex: '2', top: '10%', right: '49%' }}
                    >
                    {errors.organName.message}
                    </Typography>
                )}

                <Controller
                    name="systemName"
                    control={control}
                    render={({ field }) => (
                    <FormControl variant="outlined" className="info-form-input">
                        <InputLabel className="h-100" htmlFor="systemName" style={{lineHeight:'5px'}}>نام سامانه</InputLabel>
                        <Select
                        label="نام سامانه"
                        error={!!errors.systemName}
                        {...field}
                        >
                        
                        {systemInfoAccept.length > 0 ? systemInfoAccept.map(sys => (
                          <MenuItem value={sys.systemNumber}>{sys.systemName}</MenuItem>
                        ))
                        :
                        <MenuItem value="">موردی یافت نشد</MenuItem>
                        }

                        </Select>
                        
                    </FormControl>
                    )}
                />
                {errors?.systemName && (
                    <Typography
                    className="position-absolute bg-white"
                    color="error"
                    variant="body2"
                    style={{ zIndex: '2', top: '10%', right: '49%' }}
                    >
                    {errors.systemName.message}
                    </Typography>
                )}


                        <Controller
                        name="systemAddress" 
                        className="position-relative"
                        control={control}
                        render={({ field }) => (
                            <div>
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',top:'18%',right:'26%'}}>
                                {errors?.systemAddress?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="آدرس سامانه عامل"
                                type="text"
                                error={!!errors.systemAddress}
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
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',top:'18%',right:'26%'}}>
                                {errors?.systemPort?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="پورت سامانه عامل"
                                type="text"
                                error={!!errors.systemPort}
                                className="info-form-input"
                                variant="outlined"
                                required
                            />
                            </div>
                        )}
                        />

                      <Controller
                        name="systemMainAddress" 
                        className="position-relative"
                        control={control}
                        render={({ field }) => (
                            <div>
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',top:'18%',right:'26%'}}>
                                {errors?.systemMainAddress?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="آدرس سامانه اصلی"
                                type="text"
                                error={!!errors.systemMainAddress}
                                className="info-form-input"
                                variant="outlined"
                                required
                            />
                            </div>
                        )}
                        />

                      <Controller
                        name="systemMainPort" 
                        className="position-relative"
                        control={control}
                        render={({ field }) => (
                            <div>
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',top:'18%',right:'80%'}}>
                                {errors?.systemMainPort?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="پورت سامانه عامل"
                                type="text"
                                error={!!errors.systemMainPort}
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
        </>
    )
}

export default InsertForm