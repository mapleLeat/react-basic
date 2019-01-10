import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {showContent} from '../actions/personsAction'

class Button extends Component {
	render(){
	    let butStyle = {
	      color: "green",
	      backgroundColor: "red"
	    }
		return (
			<div>
				<input type="button" onClick={this.props.showContent} style={this.props.isShow ? butStyle : null} value="切换"/>
			</div>
		);	
	}

}

Button.proptypes = {
	showContent: PropTypes.func.isRequired,
	isShow: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
	isShow: state.person.isShow
})

export default connect(mapStateToProps, {showContent})(Button) 