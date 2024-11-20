import { PersonKnownFor } from "./Person";

function Task4({ persons }) {
    return (
      <>
        <h2>Task 4 Solution</h2>
        <p>Implementation of person component</p>
        
        {persons.length > 0 ? persons.map(person => 
          (<PersonKnownFor key={person.id} person={person}/>)
        ) : 
          <p>Loading...</p>
        }
                {/* Ternary condition, shows "loading" if person.length is not bigger than 0. Could be improved, as this also shows up if no result was found...*/}
      </>
    );
  }
export default Task4;