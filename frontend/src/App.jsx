import { useEffect, useState } from 'react';
import './App.css'
import axios from "axios";

function App() {
 const [jokes, setJokes] = useState([]);

 useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((error)=>{
    console.log(error)
  }
  )
 })
  return (
    <>
      <h1>Chai and FullStack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        // eslint-disable-next-line no-unused-vars
        jokes.map((joke, index) => (
          <div key={joke.id}>
           <h3>{joke.title}</h3>
           <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App;
