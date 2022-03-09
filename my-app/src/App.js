import React, {useState} from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import {useRef} from 'react';
import {useEffect} from 'react';

function App() {

    var ws=null;
    useEffect(()=>{
        ws = new WebSocket("ws://127.0.0.1:8000/ws");
        ws.onOpen=()=>ws.send("Connected to React");
        ws.ommessage=(e)=>{console.log( e.data)}

    });

    const [posts, setPosts] = useState([

    ])
    const [body, setBody] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            body
        }
        setPosts([...posts, newPost])
        setBody('')

    }

  return (
    <div className="App">
        <form>
            <MyInput
            value = {body}
            onChange={e => setBody(e.target.value)}
            type="text" />
            <MyButton onClick = {addNewPost}>Send</MyButton>
        </form>
        <PostList posts = {posts}/>
   </div>
  );
}

export default App;
