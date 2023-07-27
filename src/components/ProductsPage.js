import { useState } from 'react';
import products from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
    const [productList, setProductList] = useState(products);

  return (
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable/>
      </div>    
  )
}

export default ProductsPage;
