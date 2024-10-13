import React from 'react'
import './MenuLink.css'

function MenuLink(props) {
  return (
    <>
    <a href={props.url} className='link'>{props.linkNme}</a>
    </>
  )
}

export default MenuLink