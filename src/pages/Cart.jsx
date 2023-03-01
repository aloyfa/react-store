import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { useDispatch } from 'react-redux';
import { cartActions } from '../app/slices/cartSlice';

const Cart = () => {
  const {cartList,totalCount,totalAmount} = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cartActions.getCartTotal())
  }, [cartList])

  return (
    <>
      <div className="d-flex flex-row">
        <div className="col-8" >
          {!totalCount ? (
            <h1>Your cart is currently empty</h1>
          ) : (
            cartList.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>
        <Card className="col-4">
          <Card.Title>
            Your Cart has {totalCount} items. your Total would be €{totalAmount}
          </Card.Title>
        </Card>
      </div>
    </>
  );
};

export default Cart;
