import React from 'react'

const footer = () => {
  return (
    <>
      <div className="flex bg-[#f1aa5c] p-2 flex-col mt-2">
        <div className="my-[10px]">
        <button className='mr-2 font-bold hover:underline bg-black text-white px-2 py-2 rounded-lg ' type="submit">Previous</button>
        <button className='font-bold hover:underline bg-black text-white   px-2 py-2 rounded-lg' type="submit">Next</button>
        </div>
        <p className=' font-semibold sticky text-[20px] '>Powered By <a className=' underline ' href="#">w3.css</a> </p>
      </div>
    </>
  )
}

export default footer