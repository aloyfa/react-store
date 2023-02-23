import { Button } from "react-bootstrap";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaMoneyBillWave} from 'react-icons/fa'

const ActionButtons = () => {
  return (
    <>
      <Button className='m-1' variant='warning' >
        Add to Cart <AiOutlineShoppingCart size={20} />
      </Button>
      <Button className='m-1' >
        Buy Now <FaMoneyBillWave size={20} />
      </Button>
    </>
  );
};

export default ActionButtons;
