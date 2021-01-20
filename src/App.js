import React, { useEffect, useState } from 'react';
import { Posts } from './components/Posts';
import { Input } from './components/Input';
import './App.css';

const App = () => {
  const [store, setStore] = useState({pattern: '', users: [], posts: []});
  useEffect( async () => {
    const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts ');
    const posts = await responsePosts.json();
    const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await responseUsers.json();
    setStore({
      ...store,
      users: users,
      posts: posts,
    });
  }, []);

  return (
    <div>
      <Input store={store} setStore={setStore}/>
      <Posts store={store}/>
    </div>
    
  
  )
}
export default App;
