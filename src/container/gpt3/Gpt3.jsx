import React from 'react'
import '../../App.css'
import './gpt3.css'
import Feature from '../../components/feature/Feature'
export default function Gpt3() {
  return (
    <div className='section-margin'>
      <div className='gpt-section'>
        <div className='content-1'>
          <Feature title="What is GPT-3" desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
        </div>
        <div className='content-2'>
          <div className='gpt-section-gradient-text gradient-text'>
          The possibilities are beyond your imagination
          </div>
          <p>Explore The Library</p>
        </div>
        <div className='content-3'>
          <div><Feature title="Chatbots" desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/></div>
          <div><Feature title="Knowledgebase" desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/></div>
          <div><Feature title="Education" desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/></div>
        </div>
        </div>
    </div>
  )
}
