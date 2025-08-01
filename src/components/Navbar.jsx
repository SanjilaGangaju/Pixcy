import React from 'react'
import { useContext } from 'react'
import PixcyContent from '../context/PixcyContext'
const Navbar = () => {
    const {fetchDataByCategory, setQuery, query} = useContext(PixcyContent)
  return (
    <div>
        <h1>Pixcy</h1>
        <div>
            <button onClick={()=>{fetchDataByCategory("nature")}}>Nature</button>
            <button onClick={()=>{fetchDataByCategory("backgrounds")}}>Background</button>
            <button onClick={()=>{fetchDataByCategory("computer")}}>Computer</button>
            <button onClick={()=>{fetchDataByCategory("health")}}>Health</button>
            <button onClick={()=>{fetchDataByCategory("feelings")}}>Feelings</button>
            <button onClick={()=>{fetchDataByCategory("animals")}}>Animals</button>
            <button onClick={()=>{fetchDataByCategory("travel")}}>Travel</button>
            <button onClick={()=>{fetchDataByCategory("buildings")}}>Buildings</button>
            <button onClick={()=>{fetchDataByCategory("music")}}>Music</button>
            <button onClick={()=>{fetchDataByCategory("fashion")}}>Fashion</button>
            <button onClick={()=>{fetchDataByCategory("food")}}>Food</button>
            <button onClick={()=>{fetchDataByCategory("transportaion")}}>Transportation</button>
            <button onClick={()=>{fetchDataByCategory("science")}}>Science</button>
        </div>
        <div>
            <input type="text" placeholder='search any topic'  value={query} onChange={(e)=>setQuery(e.target.value)}></input>
        </div>
      </div>
  )
}

export default Navbar