import Text from "./components/Text"
import Button from "./components/Button"
import React, { useState } from "react"


function App() {

  const [name, setName] = useState(null)
  //props
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const clickFunc = () => {
    alert("Click")
    setName("react değişti")
  }


  const clickFunc2 = () => {
    setData(prev => ([...prev, name]))
  }

  const decrement = () => {
    if (count <= 0) return
    setCount(prev => prev - 1);
  }

  console.log(data,"data");


  return (
    <>
      <div onClick={clickFunc}>
        {name} <br></br>
      </div>
      <div>
        react eğitimi 1
        <Text number="2" name={"REACT"}></Text>
        react eğitimi 3
        <Text number="4" name={"REACTTT"}></Text>
        <Text number="5" name={"REACTTTT"}></Text>
        <Button name={"Azalt"} onClick={decrement}></Button>
        {/* <button onClick={decrement} >Azalt</button> */}
        <button onClick={() => setCount(count + 1)}>Arttır</button>
        <div>{count}</div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <div>{name}</div>
        <button onClick={clickFunc2}>Tıkla</button>
        <div>
          {data.map((data, i) => {

            <div key={i}>{data}</div>
        })}
        </div>
        <div>{data}</div>
      </div>
    </>
  )
}

export default App
