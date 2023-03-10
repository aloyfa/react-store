import { Button } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '../app/slices/cartSlice';
import { cartModalActions } from '../app/slices/cartModalSlice';

const ActionButtons = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (e) => {
    dispatch(cartActions.addToCart(e));
    dispatch(cartModalActions.handleCartModal(e.title));
  };
  return (
    <>
      <Button
        className={props.margin}
        variant="warning"
        onClick={() => addToCartHandler(props.e)}
      >
        Add to Cart <AiOutlineShoppingCart size={20} />
      </Button>
      <Button className={props.margin}>
        Buy Now <FaMoneyBillWave size={20} />
      </Button>
    </>
  );
};

export default ActionButtons;
