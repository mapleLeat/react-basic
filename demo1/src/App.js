import React, {
  Component
} from 'react';
import {Provider} from 'react-redux';
import store from './store'

import logo from './logo.svg';
import './App.css';
import Content from './components/Content'

class App extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render() {
    return (
		<Provider store={store}>	
			<div className="App">
				<Content></Content>
			</div>	
	     </Provider>
    );
  }
}

export default App;