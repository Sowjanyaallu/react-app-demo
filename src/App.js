import './App.css';
import { useState,useEffect } from 'react';
import axios  from 'axios';

function App() {
  const [posts , setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState('')
  const [showAll, setShowAll] = useState(false); 
 const [numToShow, setNumToShow] = useState(5);

  useEffect(()=>{
     axios('https://jsonplaceholder.typicode.com/todos').then(resp =>{
      setPosts(resp.data)
     })
  },[])

  const handleInputChane = (e) =>{
    const { name, value} = e.target;
    if(name === 'title'){
      setTitle(value)
    } else if(name === 'completed')
       setCompleted(value)
  }

  const addPost = ()=> {
    const newPost = {
      userId: 1,
      Id : posts.length+1,
      title:title,
      completed :completed === 'true' ? true : false, 
    }
    setPosts([newPost,...posts])
    setTitle('')
    setCompleted('') 
  }

  const handleClickButton = () => {
       setShowAll(!showAll)
  }

 
  return (
    <div className="App">
      <header className='app-header'>
        <div className='input-feild'>
            <input type='text' className='input-box' name='title' placeholder='title' value={title} onChange={handleInputChane} />
            <input type='text' className='input-box' name='completed' placeholder='completed true/false' value={completed}  onChange={handleInputChane} />
        <button className='todo-button' onClick={addPost}>Add TODO</button>

        </div>
        <div className='todo-main'>
        {posts.slice(0,showAll ? posts.length:numToShow).map((post)=> 
         <div className= 'todo-app'key={post.id}>
             <div className="checkbox-container">
              <input type="checkbox" checked={post.completed} readOnly />
            </div>
            <div className="label-container">
              <p>{post.title}</p>
            </div>
       </div>
        )}
        <button className='all-btn' onClick={handleClickButton}>ALL</button>
        </div>

        </header>
    </div>
  );
}

export default App;
