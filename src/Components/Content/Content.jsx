import React from 'react'
import "./Content.scss"

const Content = () => {
  return (
    <>
    <div className="content">
      <div className="content___hero">
        <div className="content___hero--txt">
          <p className="content___hero--txt--p1">Shop in style</p>
          <p className="content___hero--txt--p2">With this shop hompeage template</p>
        </div>
      </div>
      <div className="content___vitrine">
        <div className="content___vitrine___wrapper">
          <div className="content___vitrine___wrapper___item">
            <div className="content___vitrine___wrapper___item--top">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="content___vitrine___wrapper___item--bottom">
                <div className="content___vitrine___wrapper___item--bottom--info">
                    <p className='item--title'>Fancy Product</p>
                    <p className='item--price'>$40.00 - $80.00</p>
                </div>
                <button className='addBtn'>Add to card</button>
            </div>
          </div>
          <div className="content___vitrine___wrapper___item">
            <div className="content___vitrine___wrapper___item--top">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="content___vitrine___wrapper___item--bottom">
                <div className="content___vitrine___wrapper___item--bottom--info">
                    <p className='item--title'>Fancy Product</p>
                    <p className='item--price'>$40.00 - $80.00</p>
                </div>
                <button className='addBtn'>Add to card</button>
            </div>
          </div>
          <div className="content___vitrine___wrapper___item">
            <div className="content___vitrine___wrapper___item--top">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <div className="content___vitrine___wrapper___item--bottom">
                <div className="content___vitrine___wrapper___item--bottom--info">
                    <p className='item--title'>Fancy Product</p>
                    <p className='item--price'>$40.00 - $80.00</p>
                </div>
                <button className='addBtn'>Add to card</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Content
