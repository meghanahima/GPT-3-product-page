import React from 'react'
import '../../App.css'
import {google,shopify,slack,atlassian,dropbox} from './imports'
import './brand.css'
export default function Brand() {
  return (
    <div className='brand-content section-padding'>
      <div className='google'><img src={google}></img></div>
      <div className='slack'><img src={slack}></img></div>
      <div className='atlassian'><img src={atlassian}></img></div>
      <div className='dropbox'><img src={dropbox}></img></div>
      <div className='shopify'><img src={shopify}></img></div>
    </div>
  )
}
