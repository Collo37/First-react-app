import React from "react";
import Person from "../Persons/Person/Person";

const Persons = (props) => {
  return props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        changed={(event) => {
          props.changed(event, person.id);
        }}
      />
    );
  });
};
export default Persons;
