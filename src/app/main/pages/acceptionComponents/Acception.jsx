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

import { getallAcceptionData } from "./data"; 
import AcceptionItems from "./AcceptionItems";

const Acception = () =>{
    const acceptionData = getallAcceptionData();

    const defaultValues = {
        acceptName: '',
        systemName: '',
        organName: '',
        systemAddress: '',
        systemPort: '',
        systemMainAddress: '',
        systemMainPort: '',
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
                        label="نام سازمان"
                        error={!!errors.organName}
                        {...field}
                        >
                        <MenuItem value="Option 1">سازمان1</MenuItem>
                        <MenuItem value="Option 2">سازمان2</MenuItem>
                        <MenuItem value="Option 3">سازمان3</MenuItem>
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
                        <MenuItem value="Option 1">سامانه1</MenuItem>
                        <MenuItem value="Option 2">سامانه2</MenuItem>
                        <MenuItem value="Option 3">سامانه3</MenuItem>
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
                                style={{zIndex:'2',top:'18%',right:'20%'}}>
                                {errors?.systemAddress?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="آدرس سامانه عامل"
                                type="text"
                                error={!!errors.systemAddress}
                                helperText=""
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
                                style={{zIndex:'2',top:'18%',right:'54%'}}>
                                {errors?.systemPort?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="پورت سامانه عامل"
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

                    <Controller
                        name="systemMainAddress" 
                        className="position-relative"
                        control={control}
                        render={({ field }) => (
                            <div>
                            <Typography className='position-absolute bg-white'
                             color="error" variant="body2"
                                style={{zIndex:'2',top:'18%',right:'73%'}}>
                                {errors?.systemMainAddress?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="آدرس سامانه اصلی"
                                type="text"
                                error={!!errors.systemMainAddress}
                                helperText=""
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
                                style={{zIndex:'2',top:'26%',right:'26%'}}>
                                {errors?.systemMainPort?.message}
                            </Typography>
                            <TextField
                                size="small"
                                {...field}
                                label="پورت سامانه اصلی"
                                type="text"
                                error={!!errors.systemMainPort}
                                helperText=""
                                className="info-form-input"
                                variant="outlined"
                                required
                            />
                            </div>
                        )}
                        />

                <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                    <FormControl variant="outlined" className="info-form-input">
                        <InputLabel className="h-100" htmlFor="status" style={{lineHeight:'5px'}}>وضعیت</InputLabel>
                        <Select
                        label="وضعیت"
                        error={!!errors.status}
                        {...field}
                        >
                        <MenuItem value="Option 1">ثبت اولیه</MenuItem>
                        <MenuItem value="Option 2">در حال بررسی</MenuItem>
                        </Select>
                    </FormControl>
                    )}
                />
                {errors?.status && (
                    <Typography
                    className="position-absolute bg-white"
                    color="error"
                    variant="body2"
                    style={{ zIndex: '2', top: '10%', right: '49%' }}
                    >
                    {errors.status.message}
                    </Typography>
                )}

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
                            style={{height:'40px',borderBottom:'1px solid #aaa'}}>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head3'>نام سازمان</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head3'>نام سامانه</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head3'>آدرس عامل</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head3'>پورت عامل</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head3'>آدرس سامانه اصلی</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head3'>پورت سامانه اصلی</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head3'>وضعیت</span>
                        </Box>

                        <Box className="row w-100 m-auto searchs" 
                            style={{height:'40px',borderBottom:'1px solid #aaa'}}>
                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>


                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"/>
                            </Box>

                        </Box>


                        <Box className="row w-100 m-auto" style={{height:'auto'}}>
                            {
                                acceptionData.length > 0 ? acceptionData.map(acpt =>(
                                    <AcceptionItems key={acpt.organizationName} acpt={acpt}/>
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

export default Acception;