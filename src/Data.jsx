
import {useState} from 'react';

function Container({img,name,price,author,setstate,state,settop}){
    const [show,setshow] =useState(true)
    const addbtn=()=>{setshow(!show);setstate(state + 1); settop(()=>{
      window.scrollTo(0,0)
    })
    }
    const removebtn=()=>{setshow(!show);setstate(state - 1);}
    return(
      <div className="card">
        <div className="img">
        <img src= {img}  alt="" />
        <span class="badge badge-dark" id="badge">Sale</span>
        </div>
        <h3>{name}</h3>
        <p>{author}</p>
        <p className='price'>price : ₹{price}</p>
        <div className="btn">
          {show==true?
          (<button className="abtn" onClick={addbtn}>Add To Cart</button>):
          (<button className='rbtn' onClick={removebtn}>Remove From Cart</button>)}
        </div>
      </div>
    
    )
    }
    export default Container;