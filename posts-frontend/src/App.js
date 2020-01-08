import React from 'react';
import UsersContainer from './containers/UsersContainer'
import Navbar from './components/Navbar'

class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Navbar/>
        <UsersContainer/>
      </div>
    );
  }
}

export default App;
