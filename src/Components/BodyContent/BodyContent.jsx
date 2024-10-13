import React from 'react'

function BodyContent(props) {
  return (
    <>
    <div className="content">
        <h3>Main Caontent</h3>
        {props.children}
    </div>
    </>
  )
}

export default BodyContent