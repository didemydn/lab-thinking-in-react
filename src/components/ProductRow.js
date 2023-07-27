import products from '../data.json';

import { useState } from "react";

function ProductRow() {
    const [productList, setProductList] = useState(products);
    
    
    return (
        <div>
            <table>
                <thead> 
                    <tr> 
                <th>Name</th>
                <th>Price</th>
                    </tr>
                </thead>
            
    
    <tbody>
        {productList.map((product) => (
            <tr key={product.name}>
            <td style={{color: product.inStock ? "black" : "red"}}>{product.name}</td>
            <td>{product.price}</td>
        </tr>

        ))} 
    </tbody>
      </table>
      </div>)
}

export default ProductRow;