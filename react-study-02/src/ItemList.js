import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const ItemList = props => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">{props.items.map((item, index) => <Item index={index} item={item}> </Item>)}
      </ol>
    </div>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;