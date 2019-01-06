import {CHANGE_PERSONS} from './types'

export function changePersons(){
	console.log("changePersons");
	return function (dispatch) {
		dispatch({
			type: CHANGE_PERSONS
		})
	}
}