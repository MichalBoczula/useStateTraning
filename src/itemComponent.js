export const Item = ({ id, name, age, image, removePerson }) => {
  console.log(removePerson);
  return (
    <div className="itemContainer">
      <img className="itemImg" src={image} alt={name} />
      <h4 className="item">
        {name} {age} years
      </h4>
      <button className="removeBtn" onClick={() => removePerson(id)}>
        Remove
      </button>
    </div>
  );
};
