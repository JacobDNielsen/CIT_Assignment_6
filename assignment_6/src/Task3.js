function Task3({ persons }) {
    return (
      <>
        <h2>Task 3 Solution</h2>
        <p>List of people called SpielBerg:</p>
        {persons.length > 0 ? persons.map(person => 
          (<li key={person.id}>{person.name}</li>)
          ) : 
          <p>Loading...</p>
          }
            {/* Ternary condition, shows "loading" if person.length is not bigger than 0. Could be improved, as this also shows up if no result was found...*/}
      </>
    );
  }
export default Task3;