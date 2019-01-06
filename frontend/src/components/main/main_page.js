import React from 'react';
import  MapContainer from './map_container';


class MainPage extends React.Component {
  render() {
    return (
      <div>
      
        <div>
          <MapContainer/>
        </div>
        <footer>
          Copyright &copy; 2019 JAMMA
        </footer>
      </div>
    )
  }
}

export default MainPage;