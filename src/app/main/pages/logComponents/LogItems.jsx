import { useContext } from 'react';
import axios from 'axios';
import qs from 'qs';
import { toast } from 'react-toastify';
import { confirmAlert } from "react-confirm-alert";

import AppContext from 'app/AppContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LogItems = ({log}) =>{

    const showDescribe=(text)=>{
        alert(text)
    }

    const {setForceRenderLog, forceRenderLog,setLogFormValues,setLogFormSwitch} = useContext(AppContext)

    const setFormUpdate = ()=>{

        setLogFormValues({
            organName: log.organName,
            organNumber: log.organNumber,
            systemNumber: log.systemNumber,
            systemName: log.systemName,
            logGroup: log.logGroup,
            event: log.event,
            sensitive: log.sensitive,
            describtion: log.describtion,
            id: log.id
        })
        setLogFormSwitch(false)
    }


    const confirmDelete = ()=>{
        confirmAlert({
          customUI : ({ onClose }) =>{
            return(
              <Box className="sm:w-auto p-5 min-h-auto sm:min-h-auto rounded-3
              sm:rounded-2xl sm:shadow bg-warning" style={{zIndex:'999',borderRadius:'35px'}} >
                <h1>حذف رویداد</h1>
                <p className="fs-3"> از حذف این رویداد مطمعن هستید؟ </p>
                  
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
                            deleteLog()
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


    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

    const deleteLog = async () =>{
        try {
            const data = qs.stringify({id: log.id});
      
            const { status } = await axios.post(
              'http://localhost:8085/server/deleteLogInfo',
              data,
              config
            );
  
            if (status === 201) {
              toast.success('!با موفقیت حذف شد', {
                position: 'bottom-left',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            setLogFormSwitch(true)
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
            setForceRenderLog(!forceRenderLog);
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
    }

    return(
        <Box className="sm:w-auto p-0 rounded-0 
        sm:rounded-2xl sm:shadow items2" style={{borderBottom:'1px solid #ccc'}}>

            <div onClick={() => showDescribe(log.describtion)} style={{marginRight:'15px'}}
        className="col-2 cursor-pointer"
      >
        {log.describtion}
      </div>
            <div style={{marginRight:'30px'}} className="col-2">{log.organName}</div>

            <div style={{marginRight:'30px'}} className="col-2">{log.systemName}</div>

             <div style={{marginRight:'35px'}} className="col-2">{log.logGroup}</div>

             <div style={{marginRight:'35px'}} className="col-2">{log.event}</div>


             <div style={{marginRight:'35px'}} className="col-2">{log.sensitive}</div>


            <div className="col-3">
                        <Button
                        variant="contained"
                        color="error"
                        className="float-start"
                        type="submit"
                        size='small'
                        onClick={()=>confirmDelete()}
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

export default LogItems;