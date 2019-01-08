import React from 'react';
import MapContainer from '../main/map_container';
import './module.css'; 

class Profile extends React.Component {
    render() {
        return (
            <div>
              <div>
                <MapContainer />
              </div>
                <footer className="footer">
                    Copyright &copy; 2019 JAMMA
                </footer>
            </div>
        )
    }
}

export default Profile;