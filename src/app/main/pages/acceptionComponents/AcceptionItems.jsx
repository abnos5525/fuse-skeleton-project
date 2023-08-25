import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AcceptionItems = ({acpt}) =>{

    return(
        <Box className="sm:w-auto p-0 min-h-auto sm:min-h-auto rounded-0 
        sm:rounded-2xl sm:shadow items3" style={{borderBottom:'1px solid #aaa'}}>

            <div style={{marginRight:'10px'}} className="col-2">{acpt.name}</div>

            <div style={{marginRight:'10px'}} className="col-2">{acpt.software}</div>

            <div style={{marginRight:'10px'}} className="col-2">{acpt.address}</div>

             <div style={{marginRight:'10px'}} className="col-2">{acpt.portware}</div>

             <div style={{marginRight:'10px'}} className="col-2">{acpt.mainAddress}</div>

             <div style={{marginRight:'10px'}} className="col-2">{acpt.mainport}</div>

             <div style={{marginRight:'10px'}} className="col-2">{acpt.status}</div>


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

export default AcceptionItems;