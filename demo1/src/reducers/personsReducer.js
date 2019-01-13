//reducer的作用:返回新的状态
import {CHANGE_PERSONS,CHANGE_SHOW,DELETE_PERSON} from '../actions/types'

const initialState = {
      persons: [
        {name: "黄晓明", age: 25, index: 1},
        {name: "黄小明", age: 21, index: 2},
        {name: "黄绯红", age: 45, index: 3},
        {name: "黄种", age: 35, index: 4}
      ],
      isShow: false,
      person: {}
}
export default function (state = initialState, action){
	console.log("reducer");
	switch(action.type){
		case CHANGE_PERSONS:
			return {
				...state,
				person: action.payload
			}	
		case CHANGE_SHOW:
			return {
				...state,
				isShow: !state.isShow
			}
		case DELETE_PERSON:
			return {
				...state,
				persons:  state.persons.filter(({ index }) => index !== action.payload)

			}
		default:
			return state;
	}

}