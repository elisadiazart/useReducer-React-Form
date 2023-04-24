import { useState } from "react"

export const useForm = () => {
	const [values, setValues]= useState({
		name: '',
		email:'',
		online: false
	})

	const name = (value) => {
		setValues({...values, name: value})
	}

	const email = (value) => {
		setValues({...values, email: value})
	}

	const online = (value) => {
		setValues({...values, online: !values.online})
	}

	return {values, name, email, online}
}