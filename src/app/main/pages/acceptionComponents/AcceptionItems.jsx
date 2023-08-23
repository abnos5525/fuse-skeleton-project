
const AcceptionItems = ({acpt}) =>{

    return(
        <div style={{height:'50px',borderBottom:'1px solid #c9c9c9'}}>
            <div style={{marginRight:'15px'}} className="col-2">{acpt.name}</div>

            <div style={{marginRight:'15px'}} className="col-2">{acpt.software}</div>

            <div style={{marginRight:'15px'}} className="col-2">{acpt.address}</div>

             <div style={{marginRight:'15px'}} className="col-2">{acpt.portware}</div>

             <div style={{marginRight:'15px'}} className="col-2">{acpt.mainAddress}</div>

             <div style={{marginRight:'15px'}} className="col-2">{acpt.mainport}</div>

             <div style={{marginRight:'15px'}} className="col-2">{acpt.status}</div>


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

export default AcceptionItems;