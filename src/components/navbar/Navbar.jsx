import React, { useState } from 'react'
import { RiCloseLine,RiMenu3Line } from "react-icons/ri";
import logo from '../../assets/images/logo.png'
import './navbar.css'
const Links=()=>(
  <>
    <p className='nav-links-text'><a href="#home">Home</a></p>
    <p className='nav-links-text'><a href="#gpt3">What is GPT?</a></p>
    <p className='nav-links-text'><a href="#">Open AI</a></p>
    <p className='nav-links-text'><a href="#">Case Studies</a></p>
    <p className='nav-links-text'><a href="#">Library</a></p>
  </>
)
const Sign=()=>(
  <>
  <p className='nav-links-text'>Sign in</p>
  <button>Sign out</button>
  </>
)
export default function Navbar(){
  const [toggleMenu,settoggleMenu]=useState(false);
  return(
    <div className='nav'>

      <div className='nav-links'>
        <div className='nav-links-logo'>
          <img src={logo}/>
        </div>
        <div className='nav-links-items'>
          <Links/>
        </div>
      </div>

      <div className='nav-buttons'>
        <div className='nav-sign'>
          <Sign/>
        </div>

        <div className='nav-toggle'>
          {toggleMenu
            ?<RiCloseLine size={27} onClick={()=>{settoggleMenu(false)}}/>
            :<RiMenu3Line size={27} onClick={()=>{settoggleMenu(true)}}/>
          }
          {toggleMenu &&(
            <div className='nav-toggle-container'>
              <div className='nav-toggle-container-links'>
                <Links/>
              </div>
              <div className='nav-toggle-container-sign'>
                <Sign/>
              </div>
            </div>
      
          )}
        </div>
      </div>
    </div>
  )
}