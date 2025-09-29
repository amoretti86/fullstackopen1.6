import { use, useState } from 'react'

import './App.css'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
)

  return (
    <>
      <div>
        <h1>give feedback</h1>
          <Button onClick={() => setGood(good + 1)} text="Good"/>
          <Button onClick={() => setNeutral(neutral + 1)} text = "Neutral"/>
          <Button onClick={() => setBad(bad + 1)} text="Bad"/>
      </div>
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>

    </>
  )
}

export default App
