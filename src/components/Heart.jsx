import { AiFillHeart } from 'react-icons/ai';
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
      <AiFillHeart
        size={30}
        color={'red'}
        onClick={() => {
          markFavHandler(e);
        }}
      />
    </>
  );
};

export default Heart;