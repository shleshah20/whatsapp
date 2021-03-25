export default function Header()
{
    return(
        <div>
            <nav class="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>  
                <div class="navbar-header">
                    <h1 className="title" style={{marginLeft:50,fontSize:20,fontWeight:"bolder"}}> SIYA SOFT </h1>
                </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li style={{marginRight:50}}>
                        <button class="btn btn-sm btn-primary" type="button"><a href="login.html" style={{color:"#fff"}}>
                            <i class="fa fa-sign-out"></i> Log out
                        </a>
                        </button>                        
                    </li>
                </ul>                
            </nav>
        </div>
    );
}