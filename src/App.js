import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    let col = []
    let response = await fetch('https://fakestoreapi.com/products?limit=5&sort=desc')
    .then((response) => response.json())
    Object.values(response).forEach(
      x => col.push(x)
    )
    setPosts(col)
  } 

  useEffect(() => {
    fetchPosts()
    console.log(posts)
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <ul>
        {posts.map((item) => (
        <div>
        <br></br>
        <li>
          <div>ID: {item.id}</div>
          <div>Title: {item.title}</div>
          
          <div>Image: 
            <img src={item.image}></img>
          </div>
          <div>Description: {item.description}</div>
          <div>Price: {item.price}</div>
        </li>
        </div>
        ))}
        </ul>
        
      </header>
    </div>
  );
}

export default App;
