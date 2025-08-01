import React, { useEffect, useState } from 'react'
import PixcyContent from './PixcyContext'
const PixcyState = (props) => {
    const api_key="51576965-806d0475a350eb43347c13d91";
    const [imageData, setimageData] = useState([]);
    const [query, setQuery] = useState("nepal")
    useEffect(() => {
      const fetchData=async()=>{
        const response= await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`)
        const data = await response.json();
        setimageData(data.hits);
      }
    
      fetchData()
    }, [query])

        const fetchDataByCategory=async(category)=>{
        const response= await fetch(`https://pixabay.com/api/?key=${api_key}&category=${category}&image_type=photo&pretty=true&per_page=100`)
        const data = await response.json();
        setimageData(data.hits);
      }
    
  return (
    <PixcyContent.Provider value={{ imageData , fetchDataByCategory, setQuery, query}}>{props.children}</PixcyContent.Provider>
  )
}

export default PixcyState