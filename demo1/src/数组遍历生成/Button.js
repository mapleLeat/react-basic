import React, {
	Component
} from 'react';

export default class Title extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
				<input type="button" onClick={this.props.showContent} style={this.props.style} value="切换"/>
			</div>
		);	
	}
}