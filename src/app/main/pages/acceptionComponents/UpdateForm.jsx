import { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FormControl, Hidden, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import qs from 'qs';
import axios from 'axios';
import AppContext from 'app/AppContext';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import FormValidation from './FormValidation';
import getConnection from '../serverUrl';

const UpdateForm = ()=>{

    const {setForceRenderAccept, forceRenderAccept,setAcceptFormSwitch,
      setAcceptFormValues,acceptFormValues,organInfoAccept,systemInfoAccept} = useContext(AppContext)

      const defaultValues = {
            organName: acceptFormValues.organNumber,
            systemName: acceptFormValues.systemNumber,

            systemAddress: acceptFormValues.systemAddress,
            systemPort: acceptFormValues.systemPort,
            systemMainAddress: acceptFormValues.systemMainAddress,
            systemMainPort: acceptFormValues.systemMainPort,

            acceptId: acceptFormValues.id
      };

      useEffect(()=>{
        reset(defaultValues);
      },[acceptFormValues])
      

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
              getConnection('updateAcceptInfo'),
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
            setAcceptFormSwitch(true)
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
            setForceRenderAccept(!forceRenderAccept);
            reset(defaultValues);
          
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
        setAcceptFormSwitch(true);
        setAcceptFormValues({});
      };

    return(
        <>

              <form 
                name="acceptForm"
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
                        onChange={(e) => {
                          const selectedOrganNumber = e.target.value;
                          field.onChange(selectedOrganNumber);
                        }}
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
                    style={{ zIndex: '2', top: '10%', right: '19%' }}
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
                        onChange={(e) => {
                          const selectedSystemNumber = e.target.value;
                          field.onChange(selectedSystemNumber);
                        }}
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

              <Controller 
                name="AcceptId"
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