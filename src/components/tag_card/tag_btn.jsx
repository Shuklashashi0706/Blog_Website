import React from 'react'

const tag_btn = (props) => {
  return (
    <div>
        <button className='hover:bg-[#f0f1f0] hover:text-black'>{props.title}</button>
    </div>
  )
}

export default tag_btn