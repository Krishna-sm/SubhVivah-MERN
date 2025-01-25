import React from 'react'
import { CiShop } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <>
            <section  className='min-h-[60vh] bg-center  bg-[url(https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/1/delhi_bg.jpeg)]  flex flex-col items-center justify-center '>
                <h1 className="text-center text-white text-4xl font-[ArialBold] ">Plan a Delhi NCR Wedding</h1>
                        <div className="flex items-center justify-center w-1/2 my-6 bg-primary">
                            <button type="button" className='text-4xl px-2 py-2 text-white '>
                    <CiShop className=''/>

                            </button>
                           <div className="w-full flex justify-center bg-white">
                           <input type="text" className="w-full bg-white py-4 px-4 placeholder:text-primary placeholder:font-bold outline-none"  placeholder='Find Vendors in Delhi NCR '/>
                           <button className='bg-white  px-2 py-2 text-4xl text-primary' > 
                           <MdKeyboardArrowDown />

</button>
                           </div>
      
                </div>
            </section>

    </>
  )
}

export default Hero