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

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<>
				<Header currentUser={currentUser} />
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
