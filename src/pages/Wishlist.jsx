import React from 'react';
import { useSelector } from 'react-redux';
import WishItem from '../components/WishItem';

const Wishlist = () => {
  const favItems = useSelector((state) => state.fav.favList);
  return (
    <>
      {favItems.length === 0 ? (
        <h1>Curretly your wishlist is empty</h1>
      ) : (
        favItems.map((item) => <WishItem key={item.id} item={item} />)
      )}
    </>
  );
};

export default Wishlist;
