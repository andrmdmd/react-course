import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    isEmpty: true,
    addItem: (item) => {},
    removeItem: (item) => {}
});

export default CartContext;