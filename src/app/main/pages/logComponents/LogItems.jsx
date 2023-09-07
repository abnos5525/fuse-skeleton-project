import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LogItems = ({log}) =>{

    const showDescribe=(text)=>{
        alert(text)
    }

    return(
        <Box className="sm:w-auto p-0 rounded-0 
        sm:rounded-2xl sm:shadow items2" style={{borderBottom:'1px solid #ccc'}}>

            <div onClick={() => showDescribe(log.describe)} style={{marginRight:'15px'}}
        className="col-2 cursor-pointer"
      >
        {log.describe}
      </div>

            <div style={{marginRight:'30px'}} className="col-2">{log.organizationName}</div>

            <div style={{marginRight:'30px'}} className="col-2">{log.softwareName}</div>

             <div style={{marginRight:'35px'}} className="col-2">{log.type}</div>

             <div style={{marginRight:'35px'}} className="col-2">{log.event}</div>


             <div style={{marginRight:'35px'}} className="col-2">{log.sensitive}</div>


            <div className="col-3">
                        <Button
                        variant="contained"
                        color="error"
                        className="float-start"
                        type="submit"
                        size='small'
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
                        style={{borderRadius:'5px',minWidth:'15px',height:'30px'}}
                        >
                            <i className="fa fa-pen fa-sm" />
                        </Button>
            </div>
        </Box>
    )
}

export default LogItems;