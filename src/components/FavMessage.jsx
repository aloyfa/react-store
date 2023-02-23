import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { favModalActions } from '../app/slices/favModalSlice';

const FavMessage = () => {
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.favModal.isShown);
  const itemTitle = useSelector((state) => state.favModal.title);

  const handleFavModal = () => {
    dispatch(favModalActions.handleFavModal());
  };

  return (
    <>
      <Modal
        size="sm"
        show={isShown}
        onHide={handleFavModal}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton={handleFavModal}>
          <Modal.Title id="example-modal-sizes-title-sm">
            {itemTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>has been added to the wishlist</Modal.Body>
      </Modal>
    </>
  );
};

export default FavMessage;
