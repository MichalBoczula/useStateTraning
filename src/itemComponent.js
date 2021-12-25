export const Item = ({ name, age, image }) => {
  return (
    <div className="itemContainer">
      <img className="itemImg" src={image} alt={name} />
      <h4 className="item">
        {name} {age} years
      </h4>
    </div>
  );
};
