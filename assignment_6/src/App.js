import './App.css';
import { useEffect, useState} from 'react';
import {Person, PersonSimple} from './Person.js';
import Title from './Title';

function App() {
  const key = process.env.REACT_APP_API_KEY; /*To access .env files, we have installed the Node package "dotenv" */

  const [persons, setPersons] = useState([]);  //state is here empty array, as default
  const [personIndex, setPersonsIndex] = useState(0);

  useEffect (() => 
  {
    fetch("https://api.themoviedb.org/3/search/person?query=SpielBerg&api_key=" + key)
    .then(res => res.json())
    .then(data => setPersons(data.results))
  }
  ,[]);
  
  function ChangePersonIndex(number){
    if(personIndex < persons.length && personIndex >= 0){
      setPersonsIndex(personIndex + number)
    }
  }
  
  return (
    <div className="App">
        {/* <h1>Task 3:</h1>
        {persons?.map((p) => <p> {p.name}</p> )}  */}
        
        {/* <h1>Task 4:</h1> */}

        {/* <h1>Task 5 a:</h1>
        {persons?.map((p, index) => <Person name ={p.name} known_for_department ={p.known_for_department} doShow={ personIndex===index ? true : false} /> )}
         */}

        {/* <h1>Task 5 b:</h1>
        {personIndex > 0 && <button onClick={e => ChangePersonIndex(-1)}>previous</button>}
        {personIndex < persons.length -1 && <button onClick={e => ChangePersonIndex(1)}>next</button>}
        <br></br>
        {persons[personIndex]?.name} */}

        {/* <h1>Task 5 c:</h1>
        {personIndex > 1 && <button onClick={e => ChangePersonIndex(-2)}>previous - 2</button>}
        {personIndex > 0 && <button onClick={e => ChangePersonIndex(-1)}>previous</button>}
        {personIndex < persons.length -1 && <button onClick={e => ChangePersonIndex(1)}>next</button>}
        {personIndex < persons.length -2 && <button onClick={e => ChangePersonIndex(2)}>next + 2</button>}
        <br></br>
        {persons[personIndex]?.name} */}

        {/* <h1>Task 6:</h1>
        {personIndex > 1 && <button onClick={e => ChangePersonIndex(-2)}>previous - 2</button>}
        {personIndex > 0 && <button onClick={e => ChangePersonIndex(-1)}>previous</button>}
        {personIndex < persons.length -1 && <button onClick={e => ChangePersonIndex(1)}>next</button>}
        {personIndex < persons.length -2 && <button onClick={e => ChangePersonIndex(2)}>next + 2</button>}
        <br></br>
        {persons[personIndex]?.name}
        {persons[personIndex]?.known_for.map((t) => 
          <Title known_for={t}/>
        )} */}
        

        <h1>Task 7:</h1>
        {personIndex > 1 && <button onClick={e => ChangePersonIndex(-2)}>previous - 2</button>}
        {personIndex > 0 && <button onClick={e => ChangePersonIndex(-1)}>previous</button>}
        {personIndex < persons.length -1 && <button onClick={e => ChangePersonIndex(1)}>next</button>}
        {personIndex < persons.length -2 && <button onClick={e => ChangePersonIndex(2)}>next + 2</button>}
        <br></br>
        <PersonSimple person={persons[personIndex]} />

    </div>
  );
}

export default App;
