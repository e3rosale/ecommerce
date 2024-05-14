import { useState } from 'react'
import classes from './index.module.scss'

const CartItem = ({ product, title, metaImage, qty, addItemToCart }) => {
  const [quantity, setQuantity] = useState(qty)

  return (
    <li className={classes.item} key={title}>
      <h6>Title</h6>
    </li>
  )
}

export default CartItem
