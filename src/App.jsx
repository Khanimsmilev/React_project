import { use } from "react"
import {useState, useEffect} from "react"

const App = () =>{
  const [count, setCount] = useState(0)
  const [decrementClicked, setDecrementClicked] = useState(false)
  const [incrementClicked, setIncrementClicked] = useState(false)

  useEffect(()=> {
    setCount(prevState=>prevState-10)
  }, [decrementClicked])

  useEffect(()=> {
    setCount(prevState=>prevState+10)
  }, [incrementClicked])

  return(
    <div className="p-5 flex gap-4">
      <button className="bg-red-700 text white px-4" onClick={() => {
        setDecrementClicked(prevState=>!prevState)
      }}>decrement by 10</button>

      <button onClick={() =>{
        setCount(prevState => prevState-1)
      }}>-</button>
      <h3 className="text-3xl">{count}</h3>
      <button onClick={() =>{
        setCount(prevState=>prevState+1)
      }}>+</button>

      <button className="bg-blue-700 text white px-4" onClick={() => {
        setIncrementClicked(prevState=>!prevState)
      }}>increment by 10</button>
    </div>
  )
}

export default App