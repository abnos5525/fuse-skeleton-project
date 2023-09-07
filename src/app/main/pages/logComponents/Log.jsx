import { Paper, TextField, Select, MenuItem, InputLabel,FormControl,Typography } from "@mui/material";

import { yupResolver } from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import formValidation from './FormValidation'
import { getallLogData } from "./data"; 
import LogItems from "./LogItems";

const Log = () =>{
    const logData = getallLogData();

    const defaultValues = {
        organName: '',
        systemName: '',
        group: '',
        event: '',
        sensitive: ''
      };
      const { control, formState, handleSubmit, reset } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(formValidation),
      });

      const { isValid, dirtyFields, errors } = formState;

    function onSubmit() {
        reset(defaultValues);
    }

    return(
        <>
            <Paper className=" container min-h-auto sm:min-h-auto rounded-0 py-5 px-5 sm:p-5 sm:rounded-2xl sm:shadow mt-5" style={{width:'95%'}}>

                <form 
                name="organForm"
                noValidate
                onSubmit={handleSubmit(onSubmit)}>

            <Controller
                    name="organName"
                    control={control}
                    render={({ field }) => (
                    <FormControl variant="outlined" className="info-form-input">
                        <InputLabel className="h-100" htmlFor="organName" style={{lineHeight:'5px'}}>نام سازمان</InputLabel>
                        <Select
                        label="نام سامانه"
                        error={!!errors.systemName}
                        {...field}
                        >
                        <MenuItem value="Option 1">گزینه 1</MenuItem>
                        <MenuItem value="Option 2">گزینه 2</MenuItem>
                        <MenuItem value="Option 3">گزینه 3</MenuItem>
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
                        <MenuItem value="Option 1">گزینه 1</MenuItem>
                        <MenuItem value="Option 2">گزینه 2</MenuItem>
                        <MenuItem value="Option 3">گزینه 3</MenuItem>
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
                        <MenuItem value="Option 1">گزینه 1</MenuItem>
                        <MenuItem value="Option 2">گزینه 2</MenuItem>
                        <MenuItem value="Option 3">گزینه 3</MenuItem>
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
                                helperText=""
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
                        <MenuItem value="Option 1">کم</MenuItem>
                        <MenuItem value="Option 2">نرمال</MenuItem>
                        <MenuItem value="Option 3">بحرانی</MenuItem>
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
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',top:'18%',right:'26%'}}>
                                {errors?.describtion?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="توضیحات"
                                type="text"
                                error={!!errors.describtion}
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
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>توضیحات</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>نام سازمان</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>نام سامانه</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>دسته بندی</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>نوع رویداد</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>حساسیت رویداد</span>
                        </Box>

                        <Box className="row w-100 m-auto searchs" 
                            style={{height:'40px',borderBottom:'1px solid #aaa'}}>
                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>


                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>


                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                        </Box>

                        <Box className="row w-100 m-auto" 
                            style={{height:'auto'}}>
                            {
                                logData.length>0 ? logData.map(log =>(
                                    <LogItems key={log.organizationName} log={log}/>
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

export default Log;