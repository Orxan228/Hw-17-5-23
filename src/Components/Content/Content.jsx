import  {React, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../Store/cardSlice'
import axios from 'axios'
import "./Content.scss"

const Content = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setData(res.data)
    })
  },[data])
 
  const handleAdd = (item) => {
    dispatch(add(item))};
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
          {data.map((item,index)=>{
            return(
              <div key={index} className="content___vitrine___wrapper___item">
              <div className="content___vitrine___wrapper___item--top">
                <img src={item.image} alt="" />
              </div>
              <div className="content___vitrine___wrapper___item--bottom">
                  <div className="content___vitrine___wrapper___item--bottom--info">
                      <p className='item--title'>{item.title}</p>
                      <p className='item--price'>{item.price} $</p>
                  </div>
                  <button onClick={()=>handleAdd((item))} className='addBtn'>Add to card</button>
              </div>
            </div> 
            )
          })}         
        </div>
      </div>
    </div>
    </>
  )
}

export default Content
