import React from 'react'
import {Article} from '../../components'
import './blog.css';
import {blog1,blog2,blog3,blog4,blog5} from './imports'
const blogsData=[
  {
    blogimg:blog1,
    title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date:'Sep 26 ,2021',
  },
  {
    blogimg:blog2,
    title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date:'Mar 26 ,2024',
  },
  {
    blogimg:blog3,
    title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date:'Jun 2  ,2011',
  },
  {
    blogimg:blog4,
    title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date:'Jun 2  ,2011',
  },
  {
    blogimg:blog5,
    title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date:'feb 17  ,2021',
  },
]
export default function Blog() {
  return (
    <div className="bg section-padding">
      {
      blogsData.map((item,index)=>{
        return <Article blogimg={item.blogimg} date={item.date} title={item.title} key={index}/>
      })
      }
    </div>
  )
}