import React from 'react';
import {connect} from 'react-redux'
import {fetchUsers} from './actions/fetchUsers'

class App extends React.Component {

  render() {
    return(
      <div className="App">
        App
      </div>
    );
  }
}

export default connect(null, { fetchUsers } )(App);
