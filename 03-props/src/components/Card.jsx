import React from 'react'

const Card = () => {
  return (
    <>
    <div className='card'>
        <img src='https://images.unsplash.com/photo-1603189617530-6d32306f57c5?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <h1>Pratik Sanap</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>View Profile</button>
      </div>
      <div className='card'>
        <img src='https://plus.unsplash.com/premium_photo-1790699306317-0561adbe30f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D'></img>
        <h1>Sanchit Davhale</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, culpa.</p>
        <button>View Profile</button>
      </div>
      </>
  )
}
export default Card;