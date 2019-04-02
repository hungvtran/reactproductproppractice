import React from 'react';

function ProductProp(props) {
  return (
  <div>
    <h1>{props.name}</h1>
    <p>price: ${props.price} </p>
    <p>description: {props.description}</p>
  </div>
  )//end return
}//end function

export default ProductProp