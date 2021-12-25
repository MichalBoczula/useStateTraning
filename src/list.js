import { Item } from "./itemComponent.js";

export const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <Item key={person.id} {...person}></Item>;
      })}
    </>
  );
};
