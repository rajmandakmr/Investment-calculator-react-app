import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result";
import { useState } from "react";

let initialInput = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  
  const [userInput,setUserInput] = useState(initialInput);

  const inputIsValid = userInput.duration >= 1; 

  function handleChange(inputIdentifier, newValue){
      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue
          }
      })
  }
  return (<>
    <Header  />
    <UserInput userInput={userInput} onChange={handleChange} />
    {inputIsValid ? <Result input={userInput}/> : <p>Please enter duration greater than zero</p> }
    </>
  )
}

export default App
