import React from "react"
import Form from "./components/Form"
import Confirm from "./components/Confirm"

export default function App() {
  const[submit, setSubmit] = React.useState(false)
  const [email, setEmail] = React.useState('')

  function submitSetter(){
    setSubmit(prevValue => !prevValue)
  }

  function emailSetter(e){
    setEmail(e.target.value)
  }

  function emailResetter(){
    setEmail('')
  }

  return (
    <div className="App">
      {submit ? 
      <Confirm 
       email={email}
       submitSetter={submitSetter}
       emailResetter={emailResetter}
      /> :
      <Form 
       submitSetter={submitSetter}
       email={email}
       emailSetter={emailSetter}
      />
      }
      
    </div>
  );
}


