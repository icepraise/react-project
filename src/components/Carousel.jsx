import React from 'react'
import image5 from '../images/image5.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image5} class="d-block w-100" alt="..." style={{height: "91vh"}}/>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="..." style={{height: "91vh"}}/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..."style={{height: "91vh"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
