import React from 'react'

const WeddingCategories = () => {
  return (
    <>
                    <div className="grid grid-cols-2 w-[80%] mx-auto py-10 gap-x-2 gap-y-3">
                        {
                            Array(10).fill(null).map((cur,i)=>{
                                return (
                                    <div key={i} className="w-full flex items-center bg-[#d8dffc] justify-between">
                                        <div className="data px-10">
                                            <h1 className='text-3xl'>Venues</h1>
                                            <p>Banquet Halls, Marriage Garden / Lawns, We</p>
                                        </div>
                                        <div className="img">
                                            <img className='rounded-l-full' src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg" alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
    </>
  )
}

export default WeddingCategories