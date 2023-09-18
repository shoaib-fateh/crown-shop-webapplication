/** @format */

import React, { Component } from 'react';
import Header from './components/header/header.component';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignIn from './components/sign-in/sign-in.component';

import { auth } from './firebase/firebase.utils';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	render() {
		return (
			<>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/shop'
						element={<ShopPage />}
					/>
					<Route
						path='/signIn'
						element={<SignIn />}
					/>
				</Routes>
			</>
		);
	}
}

export default App;
