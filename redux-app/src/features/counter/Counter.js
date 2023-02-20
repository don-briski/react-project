import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount} from './CounterSlice'

const Counter = () => {
    const count = useSelector ((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)
    const addVAlue = Number(incrementAmount) || 0

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }
    const handleChange = (e) => {setIncrementAmount(e.target.value)}
    const handleincrement = () => {dispatch(increment())}
    const handledecrement = () => {dispatch(decrement())}
    const handleAdd = () => {dispatch(incrementByAmount(addVAlue))}
  return (
    <section>
    <p>{count}</p>
    <div>
        <button onClick={handleincrement}>+</button>
        <button onClick={handledecrement}>-</button>
    </div>
    <input type="text" value={incrementAmount} onChange={handleChange} />

    <div>
        <button onClick={handleAdd}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
    </div>
    </section>
  )
}

export default Counter