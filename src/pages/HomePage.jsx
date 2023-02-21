import { useSelector } from 'react-redux';
import Message from '../components/Message';

const HomePage = () => {
  const show = useSelector((state) => state.show.showModal);
  return (
    <>
      {show && <Message />}
      <h1>HomePage</h1>
    </>
  );
};

export default HomePage;
