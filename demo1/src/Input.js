import React, {
	Component
} from 'react';

export default class Input extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
				<input type="text" onChange={this.props.changeName} defaultValue={this.props.name} />
			</div>
		);	
	}
}