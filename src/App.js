import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';


function App() {

  // initialize all the menu item into true

  const [tileopen, setTileopen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [dateOpen, setDateOpen] = useState(true);
  const [authorOpen, setAuthorOpen] = useState(true);
  const [stausOpen, setStausOpen] = useState(true);
  const [actionOpen, setActionOpen] = useState(true);

  

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
    staus:'Published',
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
    staus:'Draft',
    action:'Edit',
  }
]

//console.log(tableData);
  
  return (
   
    <>
    
      {/* header file */}
      <Header></Header>
   
      

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
            { stausOpen&&
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
            { stausOpen&&
            <div  className='tableCard'>
              <h4>{item?.staus}</h4>
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
