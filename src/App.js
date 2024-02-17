import { useState } from 'react'
import download from '/projects/my-app2/src/download.png'
import './App.css';
import Header from './components/Header/Header';



function App() {

  // initialize all the menu item into true

  const [tileopen, setTileopen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [dateOpen, setDateOpen] = useState(true);
  const [authorOpen, setAuthorOpen] = useState(true);
  const [statusOpen, setStatusOpen] = useState(true);
  const [actionOpen, setActionOpen] = useState(true);


  // for hamburger menu
  const [menuopen, setMenuOpen] = useState(true);

  

  //crate an object using table information
const  tableData=[
  {
    tile:{
      title:'AWAW EC',
      topic: 1,
      lesson: 1,
    },
    price:1000,
    category:'...',
    date:{
      date: "February 4,2024",
      time:"11:26 AM"
    },
    author:"Admin",
    status:'Published',
    action:'Edit',

  },
  {
    tile:{
      title:'teasetr',
    },
    price:1000,
    category:'...',
    date:{
      date: "January 31,2024",
      time:"10:28 AM"
    },
    author:"Admin",
    status:'Draft',
    action:'Edit',
  }
]

//console.log(tableData);
  
  return (
   
    <>
    
      {/* header file */}
     
      <div className='navbar'>
            <h2>Table Tittle</h2>
            

        </div>

      <div>
      { 
      menuopen ?
     
      <img src={download} alt="" srcset="" className='hamImg' onClick={()=>setMenuOpen(!menuopen)}  />
      :
      <div className='hamMenu'>  
      <h4>add or remove columns</h4>
       <p onClick={()=>setMenuOpen(!menuopen)} >X</p> 
        <div className='menuItem'>
          <input onClick={()=>{setTileopen(!tileopen)}} type="checkbox" name="" id=""/>
          <p>Title</p>
        </div>
        <div className='menuItem'>
          <input onClick={()=>{setPriceOpen(!priceOpen)}} type="checkbox" name="" id=""/>
          <p>Price</p>
        </div>
        <div className='menuItem'>
          <input onClick={()=>{setCategoryOpen(!categoryOpen)}} type="checkbox" name="" id=""/>
          <p>Category</p>
        </div>
        <div className='menuItem'>
          <input onClick={()=>{setDateOpen(!dateOpen)}} type="checkbox" name="" id=""/>
          <p>Date</p>
        </div>
        <div className='menuItem'>
          <input onClick={()=>{setAuthorOpen(!authorOpen)}} type="checkbox" name="" id=""/>
          <p>Author</p>
        </div>
        <div className='menuItem'>
          <input onClick={()=>{setStatusOpen(!statusOpen)}} type="checkbox" name="" id=""/>
          <p>Status</p>
        </div>
        <div className='menuItem'>
          <input onClick={()=>{setActionOpen(!actionOpen)}} type="checkbox" name="" id=""/>
          <p>Action</p>
        </div>
      </div>
    }
    </div>



   
      

      {/* Table header part */}

      <div>
        <div className='tableItems'>
              
              {/* check tittle states are available or not */}

          { tileopen &&
            <div className='tableCard'>
              <h4>Title</h4>
            </div>   
          }
            {priceOpen &&
            <div  className='tableCard'>
              <h4>Price</h4>
            </div>   
          }
            { categoryOpen &&
            <div  className='tableCard'>
              <h4>Category</h4>
            </div>   
          }
            {dateOpen &&
            <div  className='tableCard'>
              <h4>Date</h4>
            </div>   
          }
            { authorOpen&&
            <div  className='tableCard'>
              <h4>Author</h4>
            </div>   
          }
            { statusOpen&&
            <div  className='tableCard'>
              <h4>Status</h4>
            </div>   
          }
            {actionOpen &&
            <div  className='tableCard'>
              <h4>Action</h4>
            </div>   
          }

        </div>

          
          {/* mapping each values in the array */}
         {
          tableData?.map((item,index)=>   <div key={index} className='tableItems'>

        
          { tileopen &&
            <div  className='tableCard'>

              {/* check the items and print*/}
              <h4>{item?.tile?.title} <span>Ic</span> </h4> 
              { item?.tile?.topic &&
                <p>Topic: {item?.tile?.topic}</p>
              }
              { item?.tile?.lesson  &&
                <p>Lesson: {item?.tile?.lesson}</p>
              }
            </div>   
          }
            {priceOpen&&
            <div  className='tableCard'>
              <h4>{item?.price}</h4>
            </div>   
          }
            { categoryOpen &&
            <div  className='tableCard'>
              <h4>{item?.category}</h4>
            </div>   
          }
            {dateOpen &&
            <div  className='tableCard'>
              <h4>{item?.date?.date}</h4>
              <h4>{item?.date?.time}</h4>
            </div>   
          }
            { authorOpen&&
            <div  className='tableCard'>
              <h4>{item?.author}</h4>
            </div>   
          }
            { statusOpen&&
            <div  className='tableCard'>
              <h4>{item?.status}</h4>
            </div>   
          }
            {actionOpen &&
            <div  className='tableCard'>
              <h4>{item?.action}</h4>
            </div>   
          }

        </div>
        )} 
        
      </div>
      
    </>
    

    
      
  
  

    
  );
}

export default App;
