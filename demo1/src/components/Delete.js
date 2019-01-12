import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {deletePerson} from '../actions/personsAction'

export default class Delete extends Component {
	render() {
		return (
			<div>
				<input type="button" onClick={this.props.deletePerson} defaultValue="delete"/>
			</div>
		);	
	}
}

const mapStateToProps = state => ({
	
})

export default connect(mapStateToProps, {deletePerson})(Delete) 

