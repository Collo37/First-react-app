// using useState hook with functional components

import React, { useState } from "react";
import Person from "./Person";

function PersonFC() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Collins", age: 21 },
      { name: "Stephanie", age: 19 },
      { name: "Manu", age: 25 },
    ],
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Collosso", age: 21 },
        { name: "Stephanie", age: 18 },
        { name: "Maximillian Schwartsmuller", age: 28 },
      ],
    });
    console.log("I was clicked");
  };
  return (
    <div>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
      <button onClick={switchNameHandler}>Click me</button>
    </div>
  );
}

export default PersonFC;
