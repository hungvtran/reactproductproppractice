import React from "react";
import ProductProp from "./ProductProp.js"
import vschoolProducts from "./vschoolProducts.js"

function App() {
  const products = vschoolProducts.map(product => <ProductProp 
    name={product.name} price={product.price} 
    description= {product.description} />
  )//end map
    return (
    <div className="App">
      {products}
    </div>
  );//end return
}//end App function 

export default App