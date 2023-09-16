import { useContext } from 'react';
import { toast } from 'react-toastify';
import qs from 'qs';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { confirmAlert } from "react-confirm-alert";

import AppContext from 'app/AppContext';
import getConnection from '../serverUrl';

const SystemItems = ({sys}) =>{

    const {setForceRender, forceRender,setSystemFormValues,setSystemFormSwitch} = useContext(AppContext)

    const setFormUpdate = ()=>{

        setSystemFormValues({
        systemName: sys.systemName,
        systemLatinName: sys.systemLatinName,
        systemNumber: sys.systemNumber,
        systemPort: sys.systemPort,
        })
        setSystemFormSwitch(false)
    }


    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      const confirmDelete = (name)=>{
        confirmAlert({
          customUI : ({ onClose }) =>{
            return(
              <Box className="sm:w-auto p-5 min-h-auto sm:min-h-auto rounded-3
              sm:rounded-2xl sm:shadow bg-warning" style={{zIndex:'999',borderRadius:'35px'}} >
                <h1>حذف سامانه</h1>
                <p className="fs-3"> از حذف {name} مطمعن هستید؟ </p>
                  
                    <Button
                        variant="contained"
                        color="secondary"
                        className="float-start"
                        size='medium'
                        onClick={onClose}
                        style={{borderRadius:'5px',minWidth:'35px',height:'30px'}}
                        >
                            انصراف
                        </Button>

                        <Button
                        variant="contained"
                        color="error"
                        className="float-start"
                        size='medium'
                        onClick={()=>{
                          deleteSystem()
                          onClose()
                        }}
                        style={{borderRadius:'5px',minWidth:'35px',height:'30px',marginLeft:'30px'}}
                        >
                            حذف
                        </Button>
             
              </Box>
            )
          }
        })
      }

    const deleteSystem = async () =>{
        try {
            const data = qs.stringify({systemNumber: sys.systemNumber});
      
            const { status } = await axios.post(
              getConnection('deleteSystemInfo'),
              data,
              config
            );
  
            if (status === 201) {
              toast.success('با موفقیت حذف شد!', {
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
    }

    return(
        <Box className="sm:w-auto p-0 min-h-auto sm:min-h-auto rounded-0 
        sm:rounded-2xl sm:shadow items" style={{borderBottom:'1px solid #ccc'}}>

            <div style={{marginRight:'15px'}} className="col-2">{sys.systemName}</div>

            <div style={{marginRight:'30px'}} className="col-2">{sys.systemLatinName}</div>

            <div style={{marginRight:'35px'}} className="col-2">{sys.systemNumber}</div>

             <div style={{marginRight:'40px'}} className="col-2">{sys.systemPort}</div>

            <div className="col-3">

                        <Button
                        variant="contained"
                        color="error"
                        className="float-start"
                        type="submit"
                        size='small'
                        onClick={()=>confirmDelete(sys.systemName)}
                        style={{borderRadius:'5px',minWidth:'15px',height:'30px'}}
                        >
                            <i className="fa fa-light fa-trash fa-sm" />
                        </Button>

                        <Button
                        variant="contained"
                        color="secondary"
                        className="float-start"
                        type="submit"
                        size='small'
                        onClick={setFormUpdate}
                        style={{borderRadius:'5px',minWidth:'15px',height:'30px'}}
                        >
                            <i className="fa fa-pen fa-sm" />
                        </Button>

            </div>
        </Box>
    )
}

export default SystemItems;