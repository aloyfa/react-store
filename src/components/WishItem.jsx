import { Card } from "react-bootstrap"
import styles from './WishItem.module.css'
import ActionButtons from "./ActionButtons"

const WishItem = ({item}) => {
  return (
    <Card className="flex-row">
    <Card.Img className={styles.cardImg} src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <ActionButtons/>
      </Card.Body>
    </Card>
  )
}

export default WishItem