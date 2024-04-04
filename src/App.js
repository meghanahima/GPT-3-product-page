import React from 'react'
import {Cta,Brand,Navbar} from './components'
import {Blog,Features,Footer,Header,Gpt3,Possibilty} from './container'
import './App.css'
export default function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Brand/>
    <Gpt3/>
    <Features/>
    <Possibilty/>
    <Cta/>
    <Blog />
    <Footer/>
    </>
  )
}
