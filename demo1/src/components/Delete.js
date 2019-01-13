import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {deletePerson} from '../actions/personsAction'

class Delete extends Component {
	render() {
		return (
			<div>
				<input type="button" onClick={(event) => this.props.deletePerson(event, this.props.index)} defaultValue="delete"/>
			</div>
		);	
	}
}

const mapStateToProps = state => ({
	
})

export default connect(mapStateToProps, {deletePerson})(Delete) 

