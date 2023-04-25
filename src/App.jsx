import { FORM_ACTIONS } from './actions/actions.form';
import { useForm } from './hooks/useForm';

const App = () => {
	const { values, dispatch } = useForm();

	return (
		<>
			<form className='form'>
				<input
					type='text'
					placeholder='name'
					name='name'
					value={values.name}
					onChange={e =>
						dispatch({ type: FORM_ACTIONS.NAME, payload: e.target.value })
					}
				/>

				<input
					type='text'
					placeholder='email'
					name='email'
					value={values.email}
					onChange={e =>
						dispatch({ type: FORM_ACTIONS.EMAIL, payload: e.target.value })
					}
				/>
				<div>
					<label htmlFor='state'>Online</label>
					<input
						type='checkbox'
						name='state'
						value={values.online}
						onClick={e =>
							dispatch({
								type: FORM_ACTIONS.ONLINE,
								payload: !e.target.checked
							})
						}
					/>
				</div>
			</form>
			<h4 className='text'>nombre:{values.email}</h4>
			<h4 className='text'>email:{values.email}</h4>
			<h4 className='text'>Online: {values.online.toString()}</h4>
		</>
	);
};

export default App;
