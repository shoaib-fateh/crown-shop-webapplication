/** @format */

import React from 'react';
import './header.styles.css';

import { ReactComponent as Logo } from '../assest/crown.svg';

import { Link, Routes } from 'react-router-dom';

const Header = () => (
	<div className='header'>
		<Link
			to='/'
			className='logo-container'>
			<Logo className='logo' />
		</Link>

		<div className='options'>
			<Link
				to='/shop'
				className='option'>
				SHOP
			</Link>
			<Link
				to='/contact'
				className='option'>
				CONTACT
			</Link>
			<Link
				to='/signIn'
				className='option'>
				SIGN IN
			</Link>
		</div>
	</div>
);

export default Header;
