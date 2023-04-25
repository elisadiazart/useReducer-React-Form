import { FORM_ACTIONS } from "../actions/actions.form";

export const INITIAL_STATE_FORM = {
        name: '',
		email:'',
		online: false
}

export const formReducer = (values, {type, payload}) => {
    switch (type) {
        case FORM_ACTIONS.NAME:
            return{
                ...values,
                name: payload
            };
        case FORM_ACTIONS.EMAIL:
            return{
                ...values,
                email: payload
            }
        case FORM_ACTIONS.ONLINE:
            return{
                ...values,
                online: !payload
            }
        default:
            throw new Error('Invalid action')
    }  
}