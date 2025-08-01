import React from 'react'
import { useContext } from 'react'
import PixcyContent from '../context/PixcyContext'
const Navbar = () => {
    const {fetchDataByCategory, setQuery, query} = useContext(PixcyContent)
  return (
    <div className='flex flex-col gap-8'>
        <h1 className='font-bold font-serif  text-2xl text-indigo-800 text-center my-6'>Pixcy</h1>
        <div className='flex gap-3 items-center flex-wrap justify-center'>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("nature")}}>Nature</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("backgrounds")}}>Background</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("computer")}}>Computer</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("health")}}>Health</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("feelings")}}>Feelings</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("animals")}}>Animals</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("travel")}}>Travel</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("buildings")}}>Buildings</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("music")}}>Music</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("fashion")}}>Fashion</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("food")}}>Food</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("transportaion")}}>Transportation</button>
            <button className='bg-pink-200 py-1 px-2 rounded' onClick={()=>{fetchDataByCategory("science")}}>Science</button>
        </div>
        <div className='flex items-center justify-center my-2'>
            <input className='border-4 rounded border-red-100 px-2' type="text" placeholder='search any topic'  value={query} onChange={(e)=>setQuery(e.target.value)}></input>
        </div>
      </div>
  )
}

export default Navbar