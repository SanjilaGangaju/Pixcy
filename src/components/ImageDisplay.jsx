
import { useContext } from 'react'

import React from 'react'
import PixcyContent from '../context/PixcyContext'

const ImageDisplay = () => {
  const { imageData } = useContext(PixcyContent)
  return (
    <div>
      
      <div>

        
        {imageData.map(image=><div key={image.id}>
          <div>
            <img src={image.largeImageURL}></img>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default ImageDisplay