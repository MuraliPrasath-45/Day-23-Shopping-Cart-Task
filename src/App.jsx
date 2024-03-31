
import React from 'react';
import './App.css';
import {useState} from 'react';
import Container from './Data.jsx';
import list from './list.jsx';



function App() {
  document.title="Shopping Cart"
 
  const [state,setstate] =useState(0)
  const [top,settop] = useState()
  
  return (
    <div className="content">
      <div className="nav">
        <div className="link">
        <a href="">Home</a>
        <a href="">About</a>
        <select name="Shop" id="shop">Shop
        <option value="shop">Shop</option>
    <option value="All Product">All Product</option>
    <option value="Popular item">Popular item</option>
    <option value="New Arrivals">New Arrivals</option></select>
        </div>
        <div className="cart">
          <p>🛒Cart <span>{state}</span></p>
        </div>
      </div>
      <div className="header">
        <h1>Shop In Style</h1>  
        <p>Your best source for knowledge</p>
      </div>
      <div className='cards'>
        {list?.map((val)=>(<Container key={val.id}
        img={val.img}
        author={val.author}
        name={val.title}
        price={val.price}
        setstate={setstate}
        state={state}
        top={top}
        settop={settop}/>))}
      </div>
    </div>)

} 
export default App
