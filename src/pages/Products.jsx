import ProductItem from '../components/ProductItem';
import styles from './Products.module.css';
import { useLoaderData } from 'react-router-dom';
import FavMessage from '../components/FavMessage';
import { useSelector } from 'react-redux';

const Products = () => {
  const favList = useSelector(state => state.fav.favList)
  const products = useLoaderData();
  return (
    <>
      <FavMessage/>
      <div className={styles.products}>
        {products.map((item) => (
          <ProductItem key={item.id} item={item}/>
        ))}
      </div>
    </>
  );
};

export default Products;

export const loader = async() => {
  const res = await fetch('https://fakestoreapi.com/products/')
  const data = await res.json()
  return data
};
