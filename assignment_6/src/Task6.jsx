import Title from "./Title";
import { PersonKnownFor } from "./Person";

function Task6({ persons, personIndex, setPersonIndex}) {
  if(true){

    return (
      <>
    <h2>Task 6 Solution</h2>
    <p>Click the buttons to navigate:</p>
    {personIndex > 0 && <button onClick = {() => setPersonIndex(0) }> 1 </button>} {/*Shows first element in list*/}
   
   {personIndex > 2 && <button onClick={() => setPersonIndex(p => p-2)}> {personIndex-1}</button> }
   {personIndex > 1 &&  <button onClick={() => setPersonIndex(p => p-1)}> {personIndex}</button> } 

   <button style={{backgroundColor:"pink"}}>{personIndex + 1}</button>
  
   {personIndex < persons.length-1 && <button onClick={() => setPersonIndex(p => p+1)}> {personIndex+2}</button> } 
   {personIndex < persons.length-2 && <button onClick={() => setPersonIndex(p => p+2)}> {personIndex+3}</button> } 

   {personIndex < persons.length - 3 && <button onClick = {() => setPersonIndex(persons.length-1) }> {persons.length} </button> }{/*Shows last element in list*/}
  
   {persons.length > 0 ? <p>Currently at element number: {personIndex+1} out of {persons.length}
     <PersonKnownFor person={persons[personIndex]} />
     </p>: 
       <p>Loading...</p>
       }
         {/* Ternary condition, shows "loading" if person.length is not bigger than 0. Could be improved, as this also shows up if no result was found...*/}
   
   <br></br>
        {persons[personIndex]?.name}
        {persons[personIndex]?.known_for.map((t) => 
          <Title known_for={t}/>
        )} </>
      );
  }
  }
export default Task6;