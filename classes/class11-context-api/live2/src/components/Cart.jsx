import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
 const { count, setCount} = useContext(CartContext)

  return (
    <div>Cart

        <button onClick={() => setCount(count + 1)} > Add to Cart </button>
    </div>
  )
}

export default Cart