import { Paper } from "@mui/material";

const LogItems = ({log}) =>{

    return(
        <Paper className="sm:w-auto p-0 min-h-auto sm:min-h-auto rounded-0 sm:rounded-2xl sm:shadow">

            <div style={{marginRight:'15px'}} className="col-2">{log.describe}</div>

            <div style={{marginRight:'30px'}} className="col-2">{log.organizationName}</div>

            <div style={{marginRight:'30px'}} className="col-2">{log.softwareName}</div>

             <div style={{marginRight:'30px'}} className="col-2">{log.type}</div>

             <div style={{marginRight:'30px'}} className="col-2">{log.event}</div>


             <div style={{marginRight:'30px'}} className="col-2">{log.sensitive}</div>


            <div className="col-3">
                <div className="btn btn-primary" style={{ borderRadius: '5px' }}>
                    <i className="fa fa-pen" />
                </div>

                <div className="btn btn-danger" style={{borderRadius:'5px'}}>
                    <i className="fa fa-trash-can"/>
                </div>
            </div>
        </Paper>
    )
}

export default LogItems;