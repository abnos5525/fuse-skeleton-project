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

    const {logFormSwitch,forceRenderLog,setForceRenderLog,systemInfo,setSystemInfo,
      organInfo,setOrganInfo} = useContext(AppContext)

    const defaultValues = {
      organName: '',
      systemName: '',
      group: '',
      event: '',
      sensitive: '',
      describtion: '',
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
              getConnection('addLogInfo'),
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
              setForceRenderLog(!forceRenderLog)
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
            setSystemInfo(systemData);
            setOrganInfo(organData);

          } catch (error) {
            console.error(error);
          }
        };
        fetch();
      }, []);

    return(
        <>
            <form 
                name="logForm"
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
                        error={!!errors.systemName}
                        {...field}
                        >
                        {organInfo.length > 0 ? organInfo.map(org => (
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
                        
                        {systemInfo.length > 0 ? systemInfo.map(sys => (
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
                    name="group"
                    control={control}
                    render={({ field }) => (
                    <FormControl variant="outlined" className="info-form-input">
                        <InputLabel className="h-100" htmlFor="group" style={{lineHeight:'5px'}}>دسته بندی</InputLabel>
                        <Select
                        label="دسته بندی"
                        error={!!errors.group}
                        {...field}
                        >
                        <MenuItem value="دسته بندی اول">دسته بندی اول</MenuItem>
                        <MenuItem value="دسته بندی دوم">دسته بندی دوم</MenuItem>
                        <MenuItem value="دسته بندی سوم">دسته بندی سوم</MenuItem>
                        </Select>
                    </FormControl>
                    )}
                />
                {errors?.group && (
                    <Typography
                    className="position-absolute bg-white"
                    color="error"
                    variant="body2"
                    style={{ zIndex: '2', top: '10%', right: '49%' }}
                    >
                    {errors.group.message}
                    </Typography>
                )}

                        <Controller
                        name="event" 
                        className="position-relative"
                        control={control}
                        render={({ field }) => (
                            <div>
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',top:'18%',right:'26%'}}>
                                {errors?.event?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="نوع رویداد"
                                type="text"
                                error={!!errors.event}
                                className="info-form-input"
                                variant="outlined"
                                required
                            />
                            </div>
                        )}
                        />

                    <Controller
                    name="sensitive"
                    control={control}
                    render={({ field }) => (
                    <FormControl variant="outlined" className="info-form-input">
                        <InputLabel className="h-100" htmlFor="sensitive" style={{lineHeight:'5px'}}>حساسیت رویداد</InputLabel>
                        <Select
                        label="حساسیت رویداد"
                        error={!!errors.sensitive}
                        {...field}
                        >
                        <MenuItem value="کم">کم</MenuItem>
                        <MenuItem value="نرمال">نرمال</MenuItem>
                        <MenuItem value="بحرانی">بحرانی</MenuItem>
                        </Select>
                    </FormControl>
                    )}
                />
                {errors?.sensitive && (
                    <Typography
                    className="position-absolute bg-white"
                    color="error"
                    variant="body2"
                    style={{ zIndex: '2', top: '10%', right: '49%' }}
                    >
                    {errors.sensitive.message}
                    </Typography>
                )}
                
                <Controller
                        name="describtion" 
                        className="position-relative"
                        control={control}
                        render={({ field }) => (
                            <div>
                            <TextField
                                size="small"
                                {...field}
                                label="توضیحات"
                                type="text"
                                className="info-form-input"
                                variant="outlined"
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