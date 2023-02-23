import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { showActions } from '../app/slices/showSlice';
const Message = () => {
  const dispatch = useDispatch();

  const hideMessage = () => {
    dispatch(showActions.hideMessage());
  };
  return (
    <Modal show>
      <Modal.Header closeButton={hideMessage}>
        <Modal.Title>Checking Redux</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        This modal is to check if REDUX is working properly
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideMessage} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Message;
