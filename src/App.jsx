import { useForm } from "./hooks/useForm";


const App = () => {
	const{values, name, email, online} = useForm()

	return <form className="form">
		<input type="text" placeholder="name" name="name" value={values.name} onChange={(e)=> name(e.target.value)}/>
		<input type="text" placeholder="email" name="email" value={values.email} onChange={(e)=> email(e.target.value)}/>
		<div>
			<label htmlFor="state">Online</label>
			<input type="checkbox" name="state" value={values.online} onClick={() => online(!values.online)}/>
		</div>
	</form>
};



export default App;
