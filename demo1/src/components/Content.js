import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from './Title'
import Input from './Input'
import Button from './Button'
import Delete from './Delete'

class Content extends Component {
  constructor(){
    super()
    this.state = {
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
    let persons = this.props.persons
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
    if(this.props.isShow){
      persons = (
        <div>
        {
          this.props.persons.map((person, index) => {
            return <div key={index}>
                <Title name={person.name}></Title>
                <Input key={index}></Input>
                <Delete deletePerson={(event) => this.deletePerson(event, index)} ></Delete>
              </div>
          })
        }
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
