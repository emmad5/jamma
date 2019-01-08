import React from 'react';
import {Link} from 'react-router-dom';
import './splash.css';


class Splash extends React.Component {
    render() {
        return(
            <div className='splash-div'>
                <h1>JAMMA</h1>
                <h2>Explore your favorite cities happy favorite happy hours</h2>
                <Link to='/signup'>Join Millions of Happy Users Today</Link>
            </div>
        )
    }
}

export default Splash