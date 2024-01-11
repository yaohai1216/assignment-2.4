import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import PriceInput from './PriceInput'

function Counter () {
  const [count, setCount] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [name, setName] = useState('Banana')
  const [price, setPrice] = useState('2.99')

  const handlePlus = () => {
    setCount(prevCount => {
      let count = prevCount + 1

      if (count > 5) {
        setDiscount(20)
      }
      return count
    })
  }

  const handleMinus = () => {
    setCount(prevCount => {
      if (count > 1) {
        let count = prevCount - 1
        if (count < 5) {
          setDiscount(0)
        }
        return count
      } else {
        return 0
      }
    })
  }

  const handleChange = (value) => {
    setName(value)
  }

  const handlePriceChange = (value) => {
    setPrice(value)
  }

  return (
    <>
      <h2>{name}</h2>
      <Button onClick={handleMinus} label="-"></Button>
      <span>{count}</span>
      <Button onClick={handlePlus} label="+"></Button>
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      <Input label="Product name" value={name} onChange={handleChange} />
      <PriceInput label="Price Input" value={price} onChange={handlePriceChange} />
    </>
  )
}

export default Counter
