import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../app/slices/cartSlice';

const UpDownButtons = ({ item }) => {
  const dispatch = useDispatch()
  const increaseHandler = (id) => {
    dispatch(cartActions.increase(id))
  }
  const decreaseHandler = (id) =>{
    dispatch(cartActions.decrease(id))
  }
  return (
    <div style={{display:"flex",}}>
      <Button onClick={() => increaseHandler(item.id)} variant='success'> + </Button>
      <h4>{item.quantity}</h4>
      <Button onClick={() => decreaseHandler(item.id)} variant='danger'> - </Button>
    </div>
  );
};

export default UpDownButtons;
