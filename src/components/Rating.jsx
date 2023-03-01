import { AiFillStar } from 'react-icons/ai';

const Rating = ({ detail }) => {
  return (<>
    <AiFillStar size={25}/>
      {detail.rate} ({detail.count})
  </>);
};

export default Rating;
