import React from 'react';
import MapContainer from '../main/map_container';

class Profile extends React.Component {
    render() {
        return (
            <div>
                {/* <h1>PROFILE PAGE</h1> */}
                <div>
              <MapContainer />
                </div>
                <footer>
                    Copyright &copy; 2019 JAMMA
                </footer>
            </div>
        )
    }
}

export default Profile;