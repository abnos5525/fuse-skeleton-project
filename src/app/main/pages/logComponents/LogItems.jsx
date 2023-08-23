
const LogItems = ({log}) =>{

    return(
        <div style={{height:'50px',borderBottom:'1px solid #c9c9c9'}}>
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
        </div>
    )
}

export default LogItems;