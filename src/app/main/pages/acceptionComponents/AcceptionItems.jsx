import { useContext } from 'react';
import axios from 'axios';
import qs from 'qs';
import { toast } from 'react-toastify';
import { confirmAlert } from "react-confirm-alert";

import AppContext from 'app/AppContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AcceptionItems = ({accept}) =>{

    const {setForceRenderAccept, forceRenderAccept,setAcceptFormValues,setAcceptFormSwitch} = useContext(AppContext)

    const setFormUpdate = ()=>{

        setAcceptFormValues({
            organName: accept.organName,
            organNumber: accept.organNumber,
            systemNumber: accept.systemNumber,
            systemName: accept.systemName,
            systemAddress: accept.systemAddress,
            systemPort: accept.systemPort,
            systemMainAddress: accept.systemMainAddress,
            systemMainPort: accept.systemMainPort,
            status: accept.status,
            id: accept.id
        })
        setAcceptFormSwitch(false)
    }

    const confirmDelete = ()=>{
        confirmAlert({
          customUI : ({ onClose }) =>{
            return(
              <Box className="sm:w-auto p-5 min-h-auto sm:min-h-auto rounded-3
              sm:rounded-2xl sm:shadow bg-warning" style={{zIndex:'999',borderRadius:'35px'}} >
                <h1>حذف تایید عامل</h1>
                <p className="fs-3"> از حذف تایید عامل مطمعن هستید؟ </p>
                  
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
                            deleteAccept()
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

    const deleteAccept = async () =>{
        try {
            const data = qs.stringify({id: accept.id});
      
            const { status } = await axios.post(
              'http://localhost:8085/server/deleteAcceptInfo',
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
            setAcceptFormSwitch(true)
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
            setForceRenderAccept(!forceRenderAccept);
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
        <Box className="sm:w-auto p-0 min-h-auto sm:min-h-auto rounded-0 
        sm:rounded-2xl sm:shadow items3" style={{borderBottom:'1px solid #ccc'}}>

            <div style={{marginRight:'10px'}} className="col-2">{accept.organName}</div>

            <div style={{marginRight:'10px'}} className="col-2">{accept.systemName}</div>

            <div style={{marginRight:'10px'}} className="col-2">{accept.systemAddress}</div>

             <div style={{marginRight:'10px'}} className="col-2">{accept.systemPort}</div>

             <div style={{marginRight:'10px'}} className="col-2">{accept.systemMainAddress}</div>

             <div style={{marginRight:'10px'}} className="col-2">{accept.systemMainPort}</div>

             <div style={{marginRight:'10px'}} className="col-2">{accept.status}</div>


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

export default AcceptionItems;