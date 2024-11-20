import { PersonSimple } from "./Person";

function Task7({ persons, personIndex, setPersonIndex}) {
  if(persons){

    return (
      <>
    <h2>Task 7 Solution</h2>
    <p>Click the buttons to navigate:</p>
    {personIndex > 0 && <button onClick = {() => setPersonIndex(0) }> 1 </button>} {/*Shows first element in list*/}
   
   {personIndex > 2 && <button onClick={() => setPersonIndex(p => p-2)}> {personIndex-1}</button> }
   {personIndex > 1 &&  <button onClick={() => setPersonIndex(p => p-1)}> {personIndex}</button> } 

   <button style={{backgroundColor:"pink"}}>{personIndex + 1}</button>
  
   {personIndex < persons.length-1 && <button onClick={() => setPersonIndex(p => p+1)}> {personIndex+2}</button> } 
   {personIndex < persons.length-2 && <button onClick={() => setPersonIndex(p => p+2)}> {personIndex+3}</button> } 

   {personIndex < persons.length - 3 && <button onClick = {() => setPersonIndex(persons.length-1) }> {persons.length} </button> }{/*Shows last element in list*/}
  
   {persons.length > 0 ? <div><p>Currently at element number: {personIndex+1} out of {persons.length}</p>
     <PersonSimple person={persons[personIndex]} />
     </div>: 
       <p>Loading...</p>
       }
         {/* Ternary condition, shows "loading" if person.length is not bigger than 0. Could be improved, as this also shows up if no result was found...*/} 
        </>
      );
  }
  }
export default Task7;