import { useState } from "react";
import products from '../data.json';

function SearchBar({}){
    
    return (
        <div> 
    <label for="search">Search</label>
    <input type="search" id="search"  name="search"  maxlength="100"></input>
    <label> <input type="checkbox" id="checkbox" name="checkbox" ></input>Only show products in stock
</label>
    </div>
    )
}

export default SearchBar;