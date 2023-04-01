import { useState } from "react"
import "./App.css"

function CounterButton() {
  const [count, setCount] = useState(0);

  function counter() {
    setCount(count + 1);
  }

  return (
    <div className="clickButton">
      <button onClick={counter} >
        Click
      </button>
      <p>{count}</p>
    </div>
  )
}

function TemperatureButton() {
  const [number, setNumber] = useState(0);

  function PlusOne() {
    setNumber(number + 1);
  }

  function MinusOne() {
    setNumber(number - 1);
  }

  return (
    <div className="clickButton">
      <button className="tempButton">
        {number}C<sup>o</sup>
      </button>
      <div>
        <button onClick={MinusOne}>-</button>
        <button onClick={PlusOne}>+</button>
      </div>
    </div>
  )
}

export default function MyApp() {
  return (
    <>
      <h1 className="hello">Hello World!!!</h1>
      <h2>Counter</h2>
      <CounterButton />
      <h2>Temperature Control</h2>
      <TemperatureButton />
    </>
  )
}