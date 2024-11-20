import './App.css';
import { useEffect, useState} from 'react';
import Task3 from "./Task3"
import Task4 from "./Task4"
import { Task5a, Task5b, Task5c } from './Task5';
import Task6 from './Task6.jsx';
import Task7 from './Task7.jsx';

function App() {
  const key = process.env.REACT_APP_API_KEY; /*To access .env files, we have installed the Node package "dotenv" */

  const [persons, setPersons] = useState([]);  //state is here empty array, as default
  const [activeTab, setActiveTab] = useState(3); // state to track the active tab
  const [personIndex, setPersonIndex] = useState(0);
  const [personActive, setPersonActive] = useState(null);

  useEffect (() => 
  {
    fetch("https://api.themoviedb.org/3/search/person?query=SpielBerg&api_key=" + key)
    .then(res => res.json())
    .then(data => setPersons(data.results))
  }
  ,[]);

  return (
    <div className="App">

    <h1>Assignment 6</h1>
      
      {/* Tabs for navigation between the different task solutions*/}
      <>
        <button onClick={() => setActiveTab(3)} style={{backgroundColor: activeTab ===3 ? "pink" : ""}}>Task 3</button>
        <button onClick={() => setActiveTab(4)} style={{backgroundColor: activeTab ===4 ? "pink" : ""}}>Task 4</button>
        <button onClick={() => setActiveTab("5a")} style={{backgroundColor: activeTab ==="5a" ? "pink" : ""}}>Task 5a</button>
        <button onClick={() => setActiveTab("5b")} style={{backgroundColor: activeTab ==="5b" ? "pink" : ""}}>Task 5b</button>
        <button onClick={() => setActiveTab("5c")} style={{backgroundColor: activeTab ==="5c" ? "pink" : ""}}>Task 5c</button>
        <button onClick={() => setActiveTab(6)} style={{backgroundColor: activeTab ===6 ? "pink" : ""}}>Task 6</button>
        <button onClick={() => setActiveTab(7)} style={{backgroundColor: activeTab ===7 ? "pink" : ""}}>Task 7</button>
      </> 
      {/* Shows component according to the state we are at */}  
      <>
        {activeTab === 3 && <Task3 persons={persons} />}
        {activeTab === 4 && <Task4 persons={persons} />}
        {activeTab === "5a" && <Task5a persons={persons} personActive={personActive} setPersonActive={setPersonActive} />}
        {activeTab === "5b" && <Task5b persons={persons} personIndex={personIndex} setPersonIndex={setPersonIndex} />}
        {activeTab === "5c" && <Task5c persons={persons} personIndex={personIndex} setPersonIndex={setPersonIndex} />}
        {activeTab === 6 && <Task6 persons={persons} personIndex={personIndex} setPersonIndex={setPersonIndex} />}
        {activeTab === 7 && <Task7 persons={persons} personIndex={personIndex} setPersonIndex={setPersonIndex}/>}
      </>
    </div>
  );
}

export default App;
