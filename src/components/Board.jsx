import React, {useEffect} from 'react'
import '../css/board.css'
import image13 from'../images/image13.jpg'
import image12 from'../images/image12.jpg'
import image15 from'../images/image15.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const Board = () => {

  useEffect(()=>{
    AOS.init({duration:2000});
  })
  return (
    <div className='overall text-light p-3'>
      <div>
      <h2 className='text-center m-3'>Board Of Directors</h2>
      </div>


      <div className='m-2'></div>
        <div className='d-flex justify-content-around'>
          <div data-aos="fade-right">
          <div class="card">
              <img src={image13} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                 </div>
            </div>
          </div>

        <div className='m-2'></div>
          <div data-aos="fade-up">
          <div class="card">
              <img src={image15} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                 </div>
            </div>
          </div>
          <div className='m-2'></div>
          <div data-aos="fade-left">
          <div class="card">
              <img src={image13} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                 </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Board
