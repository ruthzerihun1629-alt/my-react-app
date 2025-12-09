import { useState } from 'react'

function MiniCalculator() {
  const [input, setInput] = useState("")

  function addValue(value) {
    setInput(input + value)
  }

  function calculate() {
    try {
      const result = Function(`return (${input})`)()
      setInput(String(result))
    } catch (e) {
      setInput("Error")
    }
  }

  function reset() {
    setInput("")
  }

  return (
    <div>
      <h1>Mini Calculator</h1>
      <br/>

      <h2> {input}</h2>
<button onClick={reset} style={{ width: "200px" }}>c</button>
  <br />

      <button onClick={() => addValue("1")}>1</button>
      <button onClick={() => addValue("2")}>2</button>
      <button onClick={() => addValue("3")}>3</button>
      <button onClick={() => addValue("+")}>+</button>
      <br />

      <button onClick={() => addValue("4")}>4</button>
      <button onClick={() => addValue("5")}>5</button>
      <button onClick={() => addValue("6")}>6</button>
      <button onClick={() => addValue("-")}>-</button>
      <br />

      <button onClick={() => addValue("7")}>7</button>
      <button onClick={() => addValue("8")}>8</button>
      <button onClick={() => addValue("9")}>9</button>
      <button onClick={() => addValue("*")}>*</button>
      <br />

        <button onClick={() => addValue(".")}>.</button>
      <button onClick={() => addValue("0")}>0</button>
      <button onClick={() => calculate()}>=</button>
      <button onClick={() => addValue("/")}>/</button>
    </div>
  )
}

export default MiniCalculator;

