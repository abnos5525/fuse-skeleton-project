import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LogItems = ({log}) =>{

    return(
        <Box className="sm:w-auto p-0 min-h-auto sm:min-h-auto rounded-0 
        sm:rounded-2xl sm:shadow items2" style={{borderBottom:'1px solid #aaa'}}>

            <div style={{marginRight:'15px'}} className="col-2">{log.describe}</div>

            <div style={{marginRight:'30px'}} className="col-2">{log.organizationName}</div>

            <div style={{marginRight:'30px'}} className="col-2">{log.softwareName}</div>

             <div style={{marginRight:'35px'}} className="col-2">{log.type}</div>

             <div style={{marginRight:'35px'}} className="col-2">{log.event}</div>


             <div style={{marginRight:'35px'}} className="col-2">{log.sensitive}</div>


            <div className="col-3">
                        <Button
                        variant="contained"
                        color="secondary"
                        className="float-start"
                        type="submit"
                        size='small'
                        style={{borderRadius:'5px',minWidth:'15px'}}
                        >
                            <i className="fa fa-pen" />
                        </Button>

                        <Button
                        variant="contained"
                        color="error"
                        className="float-start"
                        type="submit"
                        size='small'
                        style={{borderRadius:'5px',minWidth:'15px'}}
                        >
                            <i className="fa fa-trash-can"/>
                        </Button>
            </div>
        </Box>
    )
}

export default LogItems;