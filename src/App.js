import './App.css';
import Header from './components/Header/Header';

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
  }
]

console.log(tableData);


function App() {
  return (
   
    <div>
      <Header>

      </Header>

    
      
    </div>
  

    
  );
}

export default App;
