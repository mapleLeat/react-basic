//reducer的作用:返回新的状态
import {CHANGE_PERSONS} from '../actions/types'

const initialState = {
	items: [] 
}
export default function (state = initialState, action){
	console.log("reducer");
	switch(action.type){
		case CHANGE_PERSONS:
			return {
				...state
			}	
		default:
			return state;
	}

}