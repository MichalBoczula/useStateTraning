import { Item } from "./itemComponent.js";

export const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <Item key={person.id} {...person} removePerson={removePerson}></Item>
        );
      })}
    </>
  );
};
