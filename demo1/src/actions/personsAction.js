import {CHANGE_PERSONS,CHANGE_SHOW,DELETE_PERSON} from './types'

export const changeName = (e, index) => dispatch => {
	console.log("changeName:" + index);
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

export const deletePerson = (e, index) => dispatch => {
	dispatch({
		type: DELETE_PERSON,
		payload: index
	})
}