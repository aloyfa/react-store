import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { favActions } from '../app/slices/favSlice';
import { favModalActions } from '../app/slices/favModalSlice';

const Heart = ({ e }) => {
  const dispatch = useDispatch();
  const favItemsList = useSelector((state) => state.fav.favList);
  const markFavHandler = (e) => {
    if (favItemsList.includes(e)) {
      return;
    }
    dispatch(favActions.addFav(e));
    dispatch(favModalActions.handleFavModal(e.title));
  };

  return (
    <>
      {e.isLove ? (
        <AiFillHeart
          size={30}
          color={'red'}
          onClick={() => {
            markFavHandler(e);
          }}
        />
      ) : (
        <AiOutlineHeart
          size={30}
          onClick={() => {
            markFavHandler(e);
          }}
        />
      )}
    </>
  );
};

export default Heart;

// const query = favList.find(e => e.id === '1')
// favList.find(e => e.id === favList.id)

// setFav(!fav);
// !fav ? alert('ADDED TO FAVORITES') : alert('DELETED FROM FAVORITES');
// console.log(title);
// console.log(isFav)
