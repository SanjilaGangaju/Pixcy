
import { useContext } from 'react'

import React from 'react'
import PixcyContent from '../context/PixcyContext'

const ImageDisplay = () => {
  const { imageData } = useContext(PixcyContent)
  return (
    <div className='m-auto p-8'>
      
      <div className='grid grid-cols-4 gap-2'>


        {imageData.map(image=><div key={image.id} className='rounded-md'>
          <div className='rounded-md overflow-hidden'>
            <img className='w-full  rounded' src={image.largeImageURL}></img>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default ImageDisplay