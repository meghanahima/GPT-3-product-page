import React from 'react'

export default function Article({blogimg,date,title}) {
  return (
    <>
    <div className="aricle-section">
      <img src={blogimg} alt="Blog image" />
      <div className="blue-content">
      <p>{date}</p>
      <h1>{title}</h1>
      <button className='read-more'>Read full article</button>
      </div>
    </div>
    </>
  )
}
