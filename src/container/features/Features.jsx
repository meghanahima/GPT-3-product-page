import React from 'react'
import Nature from '../../components/feature/Feature'
import './Features.css'
const FeaturesData=[
  {
    title:"Improving end distrusts instantly ",
    desc:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title:"Become the tended active",
    desc:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    title:"Message or am nothing",
    desc:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
  {
    title:"Really boy law county",
    desc:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
  }
]
export default function Features() {
  return (
    <div className='section-padding Features'>
      <div className='Features-1'>
        <p className='Features-gradient-text gradient-text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</p>
        <p className='Features-p'>Request Early Access to Get Started</p>
      </div>
      <div className='Features-2'>
        {
          FeaturesData.map((item,index)=>(
            <Nature title={item.title} desc={item.desc} key={index}/>
          ))
        }
      </div>
    </div>
  )
}