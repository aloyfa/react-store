import { Card } from 'react-bootstrap';
import styles from './Cart.module.css';
import UpDownButtons from './UpDownButtons';
// import ActionButtons from './ActionButtons';

const CartItem = ({ item }) => {
  return (
    <Card className="flex-row">
      <Card.Img className={styles.cardImgCart} src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Body style={{display:'flex',justifyContent:'space-between'}}>
          <h4>€{item.price.toFixed(2)}</h4>
          <UpDownButtons item={item}></UpDownButtons>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
