import { Paper } from "@mui/material";

const SystemItems = ({sys}) =>{

    return(
        <Paper className="sm:w-auto p-0 min-h-auto sm:min-h-auto rounded-0 sm:rounded-2xl sm:shadow">
        <div style={{height:'50px',borderBottom:'1px solid #c9c9c9',}}>
            <div style={{marginRight:'15px'}} className="col-2">{sys.name}</div>

            <div style={{marginRight:'30px'}} className="col-2">{sys.latinName}</div>

            <div style={{marginRight:'35px'}} className="col-2">{sys.number}</div>

             <div style={{marginRight:'40px'}} className="col-2">{sys.port}</div>

            <div className="col-3">
                <div className="btn btn-primary" style={{ borderRadius: '5px' }}>
                    <i className="fa fa-pen" />
                </div>

                <div className="btn btn-danger" style={{borderRadius:'5px'}}>
                    <i className="fa fa-trash-can"/>
                </div>
            </div>
        </div>
        </Paper>
    )
}

export default SystemItems;