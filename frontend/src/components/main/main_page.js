import React from 'react';
import  Map from './map'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1>JAMAL</h1>
        <div>
          <Map/>
        </div>
        <footer>
          Copyright &copy; 2019 JAMMA
        </footer>
      </div>
    )
  }
}

export default MainPage;