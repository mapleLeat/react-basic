import React, {
  Component
} from 'react';
import {Provider} from 'react-redux';
import store from './store'

import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Input from './components/Input'
import Button from './components/Button'
import Delete from './components/Delete'

class App extends Component {
  constructor(){
    super()
    this.state = {
      persons: [
        {name: "黄晓彬", age: 25},
        {name: "黄小明", age: 21},
        {name: "黄绯红", age: 45},
        {name: "黄种", age: 35}
      ],
      isShow: false
    }
  }
  showContent = (e) => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  changeName = (e, index) => {
    console.log(index);
    let persons = this.state.persons
    let persion = {
      ...persons[index]
    }
    persion.name = e.target.value;
    persons[index] = persion
    this.setState({
      persons: persons
    })
  }
  deletePerson = (e, index) => {
    let persons = this.state.persons
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }
  render() {
    let butStyle = {
      color: "green",
      backgroundColor: "red"
    }
    let persons = null
    if(this.state.isShow){
      persons = (
        <div>
        {
          this.state.persons.map((person, index) => {
            return <div  key={index}>
                <Title name={person.name}></Title>
                <Input name={person.name} changeName={(event) => this.changeName(event, index)} ></Input>
                <Delete deletePerson={(event) => this.deletePerson(event, index)} ></Delete>
              </div>
          })
        }
        </div>
      )
    }
    return (
		<Provider store={store}>	
			<div className="App">
				<Button style={this.state.isShow ? butStyle:null} showContent={this.showContent.bind(this)}></Button>
				<br/>
				{persons}
			</div>	
	     </Provider>
    );
  }
}

export default App;