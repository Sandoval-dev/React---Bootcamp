import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

// const Counter = React.memo(({increment}) => {
//   console.log("render");
//   return(
//     <>
//     <button onClick={increment}>ARTTIR</button>
//     </>
    
//   )
// })

function App() {


  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail:id" element={<Detail/>}/>
    </Routes>
  </Router>
  // const inputRef = useRef();
  //  const [count,setCount]=useState(0);
  //  const [text,setText]=useState("");
  //  const increment = useCallback(() =>{
  //   setCount(count+1);
  //  }, [text])
  // const [textChange,setTextChange]=useState(0);


  // const largeDataFunc = useMemo(() => {
  //   [...new Array[10000]].forEach((item) => {})

  //   return count *3;
  // },[]);


  // const focusFunc = () => {

  //   inputRef.current.focus();

  // }

  return (

    <>
    {/* <div>{count}</div>
    
    <Counter increment={increment}/>
    <input type="text" onChange={e => setText(e.target.value)}></input> */}
    {/* <button onClick={() => setCount(count+1)}>
      Arttır
    </button>
      <input type="text" ref={inputRef}></input>
      <button onClick={focusFunc}>
        Focus me
      </button> */}
      {/* {largeDataFunc} */}
      {/* <input type="text" onChange={e => setTextChange(e.target.value)}></input> */}
    </>

  )
}

export default App
