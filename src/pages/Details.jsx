import { useLoaderData } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styles from './Details.module.css';
import ActionButtons from '../components/ActionButtons';

const Details = () => {
  const detail = useLoaderData();

  return (
    <Card className='flex-row'>
      <Card.Img className={styles.detailCardImg} src={detail.image} />
      <Card.Body>
        <Card.Title className="h1">{detail.title}</Card.Title>
        <Card.Text>{detail.description}</Card.Text>
        <div className="d-flex justify-content-start">
          <ActionButtons />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Details;

export const loader = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
};
