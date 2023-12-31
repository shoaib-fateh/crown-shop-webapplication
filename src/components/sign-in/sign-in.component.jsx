/** @format */

import { eventWrapper } from '@testing-library/user-event/dist/utils/misc/eventWrapper';
import React from 'react';

import './sign-in.styles.css';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I have already an account</h2>
				<span>Sign In with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>

					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>

					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton
							onClick={signInWithGoogle}
							isGoogleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
