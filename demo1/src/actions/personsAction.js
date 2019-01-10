import {CHANGE_PERSONS,CHANGE_SHOW} from './types'

export const changeName = (e, index) => dispatch => {
	console.log("changeName" + e.target.value);
	dispatch({
		type: CHANGE_PERSONS,
		payload: {name:e.target.value, index: index}
	})
}

export const showContent = (e) => dispatch => {
	dispatch({
		type: CHANGE_SHOW
	})
}