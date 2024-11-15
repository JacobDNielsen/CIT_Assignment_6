import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import Person from './Person.js';


function App() {
  const key = process.env.REACT_APP_API_KEY; /*To access .env files, we have installed the Node package "dotenv" */
  console.log(key);

  const [persons, setPersons] = useState([]);  //state is here empty array, as default

  useEffect (() => 
  {
    fetch("https://api.themoviedb.org/3/search/person?query=SpielBerg&api_key=" + key)
    .then(res => res.json())
    .then(data => setPersons(data.results))
  }
  ,[]);

  return (
    <div className="App">
        {/* <h1>Task 3:</h1>
        {persons?.map((p) => <p> {p.name}</p> )} */}
        
        <h1> Task 4:</h1>
        {persons?.map((p) => <Person name ={p.name} known_for_department ={p.known_for_department} /> )}

    </div>
  );
}

export default App;
