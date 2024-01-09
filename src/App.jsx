import Text from "./components/Text"
import Button from "./components/Button"


function App() {

 //props
  return (
    <div>
      react eğitimi 1
      <Text number="2" name={"REACT"}></Text>
      react eğitimi 3
      <Text number="4" name={"REACTTT"}></Text>
      <Text number="5" name={"REACTTTT"}></Text>
      <Button name={"Sil"}/>
      <Button name={"Gönder"}/>
    </div>
  )
}

export default App
