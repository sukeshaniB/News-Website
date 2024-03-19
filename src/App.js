import React,{useState,useEffect} from 'react'
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'
import Footer from './components/Footer'

function App() {
  const[items,setItems0]=useState([])
  const[active,setActive]=useState(1)
  const[category,setCategory]=useState("general")
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2b996eb580f448fcb467d52517f9845c`)
    .then(res=>res.json())
    .then(data=>setItems0(data.articles))
  },[category])
  return (
    <div className="App">
      
    <Menu active={active} setActive={setActive} setCategory={setCategory}/>
    <h3 className='title'>Top News Headline</h3>
    <NewsGrid items={items}/>
    <Footer/>
    </div>
  );
}

export default App;
