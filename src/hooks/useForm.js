import { useReducer } from "react"
import { INITIAL_STATE_FORM, formReducer } from "../reducers/formReducer"

export const useForm = () => {
	const [values, dispatch]= useReducer(formReducer, INITIAL_STATE_FORM)

	

	return {values, dispatch}
}