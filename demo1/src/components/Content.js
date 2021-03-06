import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from './Title'
import Input from './Input'
import Button from './Button'
import Delete from './Delete'
import {defaultPersons} from '../actions/personsAction'

class Content extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  /*showContent = (e) => {
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
    let persons = this.props.persons
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }*/

  componentDidMount(){
    console.log("componentDidMount");
    console.log(this.props.person);
  }
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps");

  }
  render() {
    let butStyle = {
      color: "green",
      backgroundColor: "red"
    }
    let persons = null
    if(this.props.isShow){
      persons = (
        <div>
        {
          this.props.persons.map((person) => {
            return <div key={person.index}>
              <Title name={person.name}></Title>
              <Input index={person.index}></Input>
              <Delete index={person.index} ></Delete>
            </div> 
          })
        }
          <button onClick={this.defaultPersons}>default</button> 
        </div>
        )
    }
    return (
      <div className="App">
    {/*<Button style={this.props.isShow ? butStyle:null} showContent={this.showContent.bind(this)}></Button>*/}
    <Button></Button>
    <br/>
    {persons}
    </div>	
    );
  }
}

const mapStateToProps = state => ({
  persons: state.person.persons,
	isShow: state.person.isShow
})

export default connect(mapStateToProps)(Content)
