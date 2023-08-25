import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const SystemItems = ({sys}) =>{

    return(
        <Box className="sm:w-auto p-0 min-h-auto sm:min-h-auto rounded-0 
        sm:rounded-2xl sm:shadow items" style={{borderBottom:'1px solid #aaa'}}>

            <div style={{marginRight:'15px'}} className="col-2">{sys.name}</div>

            <div style={{marginRight:'30px'}} className="col-2">{sys.latinName}</div>

            <div style={{marginRight:'35px'}} className="col-2">{sys.number}</div>

             <div style={{marginRight:'40px'}} className="col-2">{sys.port}</div>

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

export default SystemItems;