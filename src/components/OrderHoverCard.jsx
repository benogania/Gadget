import React from 'react'

const OrderHoverCard = ({Name,Image,Price}) => {
  return (
    <div className='w-full flex justify-between place-items-center gap-3 bg-white'>
      <div className="w-[20%] h-[50px]">
        <img src={Image} className='w-full h-full object-contain'/>  
      </div>
      <div className='w-[80%] line-clamp-1'>
        {Name}
      </div>
      <div className='text-red-500'>
        ₱{Price}
      </div>
    </div>
  )
}

export default OrderHoverCard