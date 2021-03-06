import React from 'react'

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className="collection-item">
        <div 
            className="image"
            style={{
                // backgroundImage: `url(${require(imageUrl)})`
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div classname='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;