import React, {
	Component
} from 'react';

const Input = (props) => {
	return (
		<div>
			<input type="text" onChange={props.changeName} defaultValue={props.name} />
		</div>
	);	
}
export default Input 