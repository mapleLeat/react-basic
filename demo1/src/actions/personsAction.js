import {CHANGE_PERSONS} from './types'

export const changeName = (e) => dispatch => {
	console.log("changeName" + e.target.value);
	dispatch({
		type: CHANGE_PERSONS,
		payload: e.target.value
	})
}