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
      bg-gray-700 text-orange-500 shadow-md
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
          className="outline-none w-full px-3 py-1 text-gray-700"
          readOnly
          />
          <button className="bg-blue-700! text-white
          shrink-0 px-3! py-0.5!">
            copy
          </button>
        </div>
        <div className="flex text-sm justify-around">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer accent-blue-700"
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numAllowed}
            className="cursor-pointer accent-blue-700"
            onChange={() => {setNumAllowed(prev => !prev)}}
            />
            <label>Numbers</label>
          </div>
           <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            className="cursor-pointer accent-blue-700"
            onChange={() => {setcharAllowed(prev => !prev)}}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
