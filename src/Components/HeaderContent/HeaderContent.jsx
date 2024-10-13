import React from 'react'
import './HeaderContent.css'
import logo from '../../assets/react.svg'
import MenuLink from '../MenuLink/MenuLink'


function HeaderContent() {
  return (
    <div id = "navcontent">
        <a href="http://www.react.dev" target='_blank'>
        <img src={logo} alt="react" /></a>
        <div>
            <MenuLink linkNme='Home' url='#home'/>
            <MenuLink linkNme='About' url='#about'/>
            <MenuLink linkNme='Contact' url='#contact'/>
            <MenuLink linkNme='Login' url='#login'/>
        </div>
    </div>
  )
}

export default HeaderContent