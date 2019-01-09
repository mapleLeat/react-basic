//reducer的作用:返回新的状态
import {CHANGE_PERSONS} from '../actions/types'

const initialState = {
      persons: [
        {name: "黄晓彬", age: 25},
        {name: "黄小明", age: 21},
        {name: "黄绯红", age: 45},
        {name: "黄种", age: 35}
      ],
      isShow: false
}
export default function (state = initialState, action){
	console.log("reducer");
	switch(action.type){
		case CHANGE_PERSONS:
			return {
				...state,
				items: action.payload
			}	
		default:
			return state;
	}

}