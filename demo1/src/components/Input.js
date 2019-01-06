import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {changePersons} from '../actions/personsAction'

class Input extends Component{
	componentDidMount(){
		// this.props.changePersons();
	}
	render(){
		return (
			<div>
				<input type="text" onChange={this.props.changeName} defaultValue={this.props.name} />
			</div>
		);	
	}
}
export default connect(null, {changePersons})(Input) 