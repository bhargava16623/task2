import './App.css';
import { useState } from 'react';

function App() {


  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getUsers() {

    const data = await fetch('https://reqres.in/api/users?page=1');
    const json = await data.json();
    setUsers(json.data);
    console.log(json.data);

    setLoading(false);
  }

  return (
    <div id='frame' >
        <h1>Apple Users</h1>

        <button onClick={()=>{ setLoading(true); setTimeout(()=>{  getUsers();
        
      },2000);}}>Get Users</button>

      
         
        {loading ? 
        <div id='box'>
          <div id='shimmer'>
             <h1>loading..</h1> 
          </div>
          <div id='shimmer'>
             <h1>loading..</h1> 
          </div>
          <div id='shimmer'>
             <h1>loading..</h1> 
          </div>
        </div>
       : 
        
        <div id='box'>{
        users?.map((user)=>{

          return(
          
            <div id="container">
              <img src={user.avatar}/>
              <h2>First Name: {user.first_name}</h2>
              <h2>Last Name: {user.last_name}</h2>
              <h2>Email: {user.email}</h2>
            </div>
          
          )
        })

      }</div>

      }
         
         

    </div>
  );
}

export default App;
