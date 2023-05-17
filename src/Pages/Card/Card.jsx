import React from 'react'
import "./Card.scss"

const Card = () => {
  return (
    <>
    <div className="card">
        <div className="card___vitrine">
            <h3>Card Items:</h3>
        <div className="card___vitrine___wrapper___item">
            <div className="card___vitrine___wrapper___item--top">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="card___vitrine___wrapper___item--bottom">
                <div className="card___vitrine___wrapper___item--bottom--info">
                    <p className='item--title'>Fancy Product</p>
                    <p className='item--price'>$40.00 - $80.00</p>
                </div>
                <button className='DelBtn'>Delete Item</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Card
