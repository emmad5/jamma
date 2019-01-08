import React from 'react';
import {Link} from 'react-router-dom';
import './splash.css';
// import logo from './lamalogo_large_vector_trace.png';
// import logo from './lamalogo_large_vector_trace_2_no_outline.png';
import logo from './lamalogo_large_pupils_no_outline.png';
// import logo from './lamalogo_large_vector.png';


class Splash extends React.Component {
    render() {
        return(

          <div className='splash-div'>

            


          
            <div className="logo-lama-splash">
              <Link to={'/'}><img className="logo-img" src={logo} alt="" width="290px" height="390px" /></Link>
            </div>

            <div className="flex-text">

            <div className="splash-header-pos">
                <h1 className="splash-header">JAMMA</h1>
            </div>

            <div className="fav-cities-splash">
                <h2>explore your favorite cities'</h2> 
                
                <h3>favorite happy hours</h3>
            </div>

            <div>
             
              <Link to='/signup'><button className="join-splash-btn">Join Millions of Happy Users Today</button></Link>

            </div>
            </div>

           
          </div>

        )
    }
}

export default Splash