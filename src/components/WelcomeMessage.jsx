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
    <Modal show onHide={hideMessage}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to CodeStore</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      Welcome to this demo Page, this is a personal project I developed to put in practice some of the most used libraries aplied to React. Hope you Enjoy!
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
