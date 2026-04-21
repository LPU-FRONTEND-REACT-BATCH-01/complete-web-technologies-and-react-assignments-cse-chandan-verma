import React, { useState } from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'

const ImageSlider = () => {

    const images=[img1, img2, img3, img4]

    const[currentImg, setCurrentImg] = useState(0)

    let nextImage = () =>{
        if(currentImg === images.length -1){
            setCurrentImg(0)
        }else {
            setCurrentImg(prev => prev + 1)
        }
    }

    let prevImage = () =>{
        if(currentImg === 0){
            setCurrentImg(images.length - 1)
        }else {
            setCurrentImg(prev => prev - 1)
        }
    }

  return (
    <div className='imageSlider'>
        <h1 style={{fontStyle:'italic'}}>Image Slider</h1>
        <img src={images[currentImg]}></img><br />
        <button onClick={prevImage}>{"<"}</button>
        <button onClick={nextImage}>{">"}</button>
    </div>
  )
}

export default ImageSlider