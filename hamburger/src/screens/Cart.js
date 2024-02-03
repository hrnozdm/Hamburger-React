import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeCart,clearCart } from '../redux/CartSlice';

const Cart = () => {
  const dispatch=useDispatch();
  const {cartItems}=useSelector((state)=>state.cart);

  const handleRemoveFromCart = item => {
    dispatch(removeCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div>
      <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
    </div>
  )
}

export default Cart
