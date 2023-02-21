import styles from './ProductItem.module.css';
import { FaMoneyBillWave } from 'react-icons/fa';
import {
  AiOutlineShoppingCart,
  AiFillStar
} from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Heart from './Heart';

const ProductItem = (props) => {
  const e = props.item;

  return (
    <>
      <Card className={styles.card}>
        <Card.Img className={styles['card-img-top']} src={e.image} />
        <Card.Body>
          <Card.Title className=" text-truncate ">{e.title}</Card.Title>
          <div className="btn-wrapper d-flex justify-content-between">
            <Card.Text>€{e.price.toFixed(2)} </Card.Text>
            <Card.Text>
              <AiFillStar />
              {e.rating.rate} ({e.rating.count})
            </Card.Text>
            <Heart e={e} />
          </div>
          <div className="btn-wrapper d-flex justify-content-between">
            <Button className={styles.btn} variant="warning">
              Add to Cart <AiOutlineShoppingCart size={20} />
            </Button>
            <Button className={styles.btn}>
              Buy Now <FaMoneyBillWave size={20} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductItem;
// <Card>
//   <div className={styles.product}>
//     <div className={styles.card__header}>
//       <h4>{e.title}</h4>
//     </div>

//     <div className={styles['image-container']}>
//       <img
//         className={styles.product__img}
//         src={e.image}
//         alt={e.name}
//       />
//     </div>
//     <div className={styles['review-container']}>
//         <p>{e.}</p>
//     </div>
//     <div className={styles.actions}>
//       <Button action={'Add to cart'} bgcolor={'#dba100'} />
//       <Button action={'Buy Now'} bgcolor={'green'} />
//       <AiOutlineHeart />
//     </div>
//   </div>
// </Card>
