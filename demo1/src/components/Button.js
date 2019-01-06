import React from 'react';

const Title = (props) => {
	return (
		<div>
			<input type="button" onClick={props.showContent} style={props.style} value="切换"/>
		</div>
	);	
}
export default Title