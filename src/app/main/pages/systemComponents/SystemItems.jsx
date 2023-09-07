import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const SystemItems = ({sys}) =>{

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

export default SystemItems;