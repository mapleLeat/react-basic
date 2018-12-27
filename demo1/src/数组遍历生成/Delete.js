import React, {
	Component
} from 'react';

export default class Delete extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
				<input type="button" onClick={this.props.deletePerson} defaultValue="delete"/>
			</div>
		);	
	}
}