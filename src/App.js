import React, { Component } from 'react';
import './App.css';

import Buttons from './Buttons';
import InfoForm from './InfoForm';

class App extends Component {

  render() {
    const isButtonPath = document.location.pathname.includes('buttons');

    return (
      isButtonPath ? <Buttons /> : <InfoForm />
    );
  }
}

export default App;
