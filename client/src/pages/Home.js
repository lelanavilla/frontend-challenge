import React from 'react'
import { Link } from 'react-router-dom';
import '../views/home.css';

function Home(props){
    return(
        <div className="landing-page-wrapper">
<div className="main-body">
            <header>
                <nav>
                    <button className="nav-button fa fa-bars"> </button>
                    <div>
                        <ul>
                            
     
                                {/* <li> <Link to="/" id="home" className="active">welcome</Link></li> */}
                                <li> <Link to="/expenseUpload" id="upload">Upload A Receipt</Link> </li>
                                {/* <Link to="" id=""><li> contact</li></Link>  */}
                        
                        </ul>
                    </div>
                </nav>
                <div className="center">
                    <h1 className="alex-brush"> Pleo</h1>
                    <h2>Expense Reports </h2>
                    <span id="asterisk"> * </span>
                    <p>Simplified</p>
                </div>
            </header>
            </div></div>
 
    )
}
export default Home;