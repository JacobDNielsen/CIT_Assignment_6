import { PersonKnownFor } from "./Person";

function Task5a({persons, personActive, setPersonActive}) {

    return (
      <div>
        <h2>Task 5 Solution</h2>
        <p>CLick on one of the buttons!</p>
{/*   
        <PersonKnownFor person={persons}></PersonKnownFor> */}

      {persons.length > 0 ? (
            persons.map((person) => (
              <button key={person.id} onClick={() => setPersonActive(person)}>
                {person.name}
              </button>
            ))
          ) : (
            <p>Loading...</p>
          )}

          {personActive !== null ? (
              <PersonKnownFor person={personActive} />
            ) : (
                <p>Please select a person to display their details.</p>
            )}
        </div>
    );
  }

  function Task5b({ persons, personIndex, setPersonIndex}) {
    return (
      <>
        <h2>Task 5b Solution</h2>
        <p>CLick the buttons to navigate:</p>
  
        {personIndex > 0 && <button onClick = {() => setPersonIndex( p => p-1) }> Previous </button>}
        {personIndex < persons.length-1 && <button onClick={() => setPersonIndex(p => p+1)}> Next</button> } {/* onClick needs to have empty (), otherwise onClick executes imideately*/}
  
        {persons.length > 0 ? <p>Currently at element number: {personIndex+1} out of {persons.length}
        <PersonKnownFor person={persons[personIndex]} />
        </p>: 
          <p>Loading...</p>
          }
            {/* Ternary condition, shows "loading" if person.length is not bigger than 0. Could be improved, as this also shows up if no result was found...*/}
      </>
    );
  }

  function Task5c({ persons, personIndex, setPersonIndex}) {

    return (
        <>
      <h2>Task 5c Solution</h2>
      <p>CLick the buttons to navigate:</p>

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
    </>
    );
  }

  export {Task5a, Task5b, Task5c};