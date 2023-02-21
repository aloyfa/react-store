// import { useState } from 'react';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { favActions } from '../store';


const Heart = ({e}) => {
  // const [fav,setFav] = useState(false)
  const dispatch = useDispatch();
  const isFav = useSelector((state) => state.favorite.isFav);

  const markFavHandler = () => {
    // alert('ADDED TO FAVORITES')
    // setFav(!fav)
    // console.log(id);
    dispatch(favActions.markFav());
    console.log(isFav);
  };
  return (<>
    {isFav ? (
      <AiFillHeart
        size={30}
        onClick={() => {
          markFavHandler(e.id);
        }}
      />
    ) : (
      <AiOutlineHeart
        size={30}
        onClick={() => {
          markFavHandler(e.id);
        }}
      />
    )}
    </>)
}

export default Heart