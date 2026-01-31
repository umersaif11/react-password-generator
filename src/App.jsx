import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charAllowed) string += "!@#$%^&*()_-+=[]{}~`"
    if(numAllowed) string += "0123456789"

    for(let i = 0; i <= length; i++) {
      let char = Math.floor(
        Math.random(string.length) + 1
      )
      pass += string.charAt(char)
    }
    setPassword(pass)

  }, [
    length, numAllowed, charAllowed, setPassword
  ])
  return (
    <>
      <div className="w-full max-w-full mx-auto 
      bg-gray-700 shadow-md
      px-4 py-3 rounded-lg">
        <h2 className="text-white text-center">
          Password Generator
        </h2>
        <div className="flex shadow rounded-lg
        overflow-hidden mb-4 mt-5 bg-white">
          <input 
          type="text"
          value={password}
          placeholder="Password"
          className="outline-none px-3 py-1 text-gray-700"
          />
        </div>
      </div>
    </>
  )
}

export default App
