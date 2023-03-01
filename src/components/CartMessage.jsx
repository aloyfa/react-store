import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cartModalActions } from '../app/slices/cartModalSlice';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const CartMessage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.cartModal.isShown);
  const itemTitle = useSelector((state) => state.cartModal.title);

  const hideCartModal = () => {
    dispatch(cartModalActions.hideModal());
  };
  const hideModalHandler = () => {
    dispatch(cartModalActions.hideModal());
    navigate('/cart');
  };

  return (
    <>
      <Modal
        size="sm"
        show={isShown}
        onHide={hideCartModal}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton={hideCartModal}>
          <Modal.Title id="example-modal-sizes-title-sm">
            {itemTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>has been added to the Cart</Modal.Body>
        <Button onClick={hideModalHandler}>
          View Cart <AiOutlineShoppingCart />
        </Button>
      </Modal>
    </>
  );
};

export default CartMessage;
