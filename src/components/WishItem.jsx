import { Button, Card } from "react-bootstrap"
import styles from './WishItem.module.css'
import ActionButtons from "./ActionButtons"
import {BsFillTrashFill} from "react-icons/bs"
import { useDispatch } from "react-redux"
import { favActions } from "../app/slices/favSlice"

const WishItem = ({item}) => {
  const dispatch = useDispatch()

  const deleteFavHandler = (e) => {
    console.log(e)
    dispatch(favActions.deleteFav(e.title))
  }
  return (
    <Card className="flex-row">
    <Card.Img className={styles.cardImg} src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <ActionButtons margin='m-1'/>
        <Button onClick={() => deleteFavHandler(item)} variant='danger' className="m-1">Delete <BsFillTrashFill/></Button>
      </Card.Body>
    </Card>
  )
}

export default WishItem