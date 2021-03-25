import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Layout()
{
    return(
        <div>
        <div className="wrapper wrapper-content">
        <div className="row border-bottom" style={{marginLeft:15,marginRight:15,marginBottom:20}}>
        <nav className="navbar navbar-static-top white-bg" role="navigation" >
          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-lg-3">
                <div className="ibox">
                    <div className="ibox-content">
                      <span className="label label-success float-left">box1</span>
                    <h5>contain</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="ibox">
                    <div className="ibox-content">
                      <span className="label label-success float-left">box2</span>
                    <h5>contain</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="ibox">
                    <div className="ibox-content">
                      <span className="label label-success float-left">box3</span>
                    <h5>contain</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="ibox">
                    <div className="ibox-content">
                      <span className="label label-success float-left">box4</span>
                    <h5>contain</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        </div>
        <div className="col-lg-12">
        <div className="ibox ">
        <div className="ibox-title">
            <h5>Instances</h5>
        </div>
        <div className="ibox-content">
            <div className="row">
            <span style={{maxWidth:200,marginLeft:50}} className="input-group mb-3">
                <span className="input-group-append">
                    <button className="btn btn-sm btn-primary" type="button">1</button>
                </span>
                <input type="text" className="form-control form-control-sm" placeholder="Name Of Instance"/>
                <span className="input-group-append">
                    <button className="btn btn-sm btn-primary" type="button">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </span>
            </span>
            <span style={{maxWidth:200,marginLeft:150}} className="input-group mb-3">
                <span className="input-group-append">
                    <button className="btn btn-sm btn-primary" type="button">2</button>
                </span>
                <input type="text" className="form-control form-control-sm" placeholder="Name Of Instance"/>
                <span className="input-group-append">
                    <button className="btn btn-sm btn-primary" type="button">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </span>
            </span>
            <span style={{maxWidth:200,marginLeft:150}} className="input-group mb-3">
                <span className="input-group-append">
                    <button className="btn btn-sm btn-primary" type="button">3</button>
                </span>
                <input type="text" className="form-control form-control-sm" placeholder="Name Of Instance"/>
                <span className="input-group-append">
                    <button className="btn btn-sm btn-primary" type="button">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </span>
            </span>
            </div>
        </div>
        <div className="ibox-title">
            <button style={{maxWidth:250,marginLeft:50,marginBottom:0}} className="btn btn-sm btn-primary" type="button">Total Credit</button>
            <button style={{maxWidth:250,marginLeft:250,marginBottom:0}} className="btn btn-sm btn-primary" type="button">Credit Used</button>
            <button style={{maxWidth:250,marginLeft:250,marginBottom:0}} className="btn btn-sm btn-primary" type="button">Quota Remaining</button>
        </div>
        </div>
      </div>
      
      <div className="col-lg-12">
        <div className="ibox ">
        <div className="ibox-title">
            <h5>List Purchase</h5>
            <div className="ibox-tools">
                <a className="collapse-link">
                    <i className="fa fa-chevron-up"></i>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="fa fa-wrench"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                    <li><a href="#" className="dropdown-item">Config option 1</a>
                    </li>
                    <li><a href="#" className="dropdown-item">Config option 2</a>
                    </li>
                </ul>
                <a className="close-link">
                    <i className="fa fa-times"></i>
                </a>
            </div>
        </div>
        <div className="ibox-content">
            <div className="row">
                <div className="col-sm-3">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control form-control-sm" placeholder="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-sm btn-primary" type="button">Go!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Order ID </th>
                        <th>Date </th>
                        <th>Client </th>
                        <th>Instance </th>
                        <th>Type </th>
                        <th>Quota</th>
                        <th>Read</th>
                        <th>Exp Day</th>
                        <th>Auto Racharge</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Project <small>This is example of project</small></td>
                        <td>Patrick Smith</td>
                        <td>0800 051213</td>
                        <td>Inceptos Hymenaeos Ltd</td>
                        <td><span className="pie">0.52/1.561</span></td>
                        <td>20%</td>
                        <td>Jul 14, 2013</td>
                        <td>Jul 14, 2013</td>
                        <td>Jul 14, 2013</td>
                        <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>         
                    </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ibox ">
        <div className="ibox-title">
            <h5>List Message</h5>
            <small> outbox</small>
            <div className="ibox-tools">
                <a className="collapse-link">
                    <i className="fa fa-chevron-up"></i>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="fa fa-wrench"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                    <li><a href="#" className="dropdown-item">Config option 1</a>
                    </li>
                    <li><a href="#" className="dropdown-item">Config option 2</a>
                    </li>
                </ul>
                <a className="close-link">
                    <i className="fa fa-times"></i>
                </a>
            </div>
        </div>
        <div className="ibox-content">
            <div className="row">
                <div className="col-sm-3">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control form-control-sm" placeholder="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-sm btn-primary" type="button">Go!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Msg ID </th>
                        <th>To </th>
                        <th>Text </th>
                        <th>Link </th>
                        <th>Type </th>
                        <th>Status</th>
                        <th>WA Msg ID</th>
                        <th>Created At</th>
                        <th>Send At</th>
                        <th>Delivered At</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Project <small>This is example of project</small></td>
                        <td>Patrick Smith</td>
                        <td>0800 051213</td>
                        <td>Inceptos Hymenaeos Ltd</td>
                        <td><span className="pie">0.52/1.561</span></td>
                        <td>20%</td>
                        <td>Jul 14, 2013</td>
                        <td>Jul 14, 2013</td>
                        <td>Jul 14, 2013</td>
                        <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>         
                    </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="ibox ">
        <div className="ibox-title">
            <h5>Statistic Report</h5>
            <div className="ibox-tools">
                <a className="collapse-link">
                    <i className="fa fa-chevron-up"></i>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="fa fa-wrench"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                    <li><a href="#" className="dropdown-item">Config option 1</a>
                    </li>
                    <li><a href="#" className="dropdown-item">Config option 2</a>
                    </li>
                </ul>
                <a className="close-link">
                    <i className="fa fa-times"></i>
                </a>
            </div>
        </div>
        <div className="ibox-content">
            <div className="row">
                <div className="col-sm-3">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control form-control-sm" placeholder="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-sm btn-primary" type="button">Go!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Date </th>
                        <th>Quota usage </th>
                        <th>send </th>
                        <th>In Queue </th>
                        <th>Failed </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Project <small>This is example of project</small></td>
                        <td>Patrick Smith</td>
                        <td>0800 051213</td>
                        <td>Inceptos Hymenaeos Ltd</td>
                        <td><span className="pie">0.52/1.561</span></td>    
                    </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>      
    </div>
    </div>
    );
    
}