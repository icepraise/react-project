import React from 'react'
import image4 from '../images/image4.jpg'
import image1 from '../images/image1.jpg'
import image7 from '../images/image4.jpg'

const Card = () => {
  return (
    <div>
      <div className="container">
        <div className="row" >
        <div className='col-sm-4'>
        <div className="card" style={{}}>
  <img src={image4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
        {/* </div> */}

      
          <div className='col-sm-4'>
        <div className="card" style={{}}>
  <img src={image1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
        
  

      
        <div className='col-sm-4'>
        <div className="card" style={{}}>
  <img src={image4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
        
      </div>
      </div>
    </div>
  )
}

export default Card
