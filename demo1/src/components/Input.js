import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {changeName} from '../actions/personsAction'

class Input extends Component{
	componentDidMount(){
		// this.props.changePersons();
	}
	render(){
		return (
			<div>
				<input type="text" onChange={(event) => this.props.changeName(event, this.props.index)} defaultValue={this.props.name} />
			</div>
		);	
	}
}

Input.proptypes = {
	changeName: PropTypes.func.isRequired,
	persons: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
	persons: state.person.persons
})

export default connect(mapStateToProps, {changeName})(Input) 