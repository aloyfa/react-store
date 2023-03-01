import { Link, useLoaderData } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styles from './Details.module.css';
import ActionButtons from '../components/ActionButtons';
import Rating from '../components/Rating';

const Details = () => {
  const detail = useLoaderData();
  
  return (
    <>
      <Link to='/products'>‹ Back to list</Link>
      <Card className="flex-row">
        <Card.Img className={styles.detailCardImg} src={detail.image} />
        <Card.Body>
          <Card.Title>{detail.title}</Card.Title>
          <Card.Text>{detail.category}</Card.Text>
          <Card.Text>{detail.description}</Card.Text>
          <h1>€{detail.price.toFixed(2)}</h1>
          <Rating detail={detail.rating} />
          <div className="d-flex justify-content-start">
            <ActionButtons margin="m-1" />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Details;

export const loader = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
};
