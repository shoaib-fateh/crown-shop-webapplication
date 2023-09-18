/** @format */

import React from 'react';

import SHOP_DATA from './shopData';

import ColletctionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
	constructor() {
		super();
		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;

		return (
			<div className='shop-page'>
				{collections.map(({ id, ...otherPreviewProps }) => (
					<ColletctionPreview
						key={id}
						{...otherPreviewProps}
					/>
				))}
			</div>
		);
	}
}

export default ShopPage;
