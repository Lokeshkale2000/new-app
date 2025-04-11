 
const Card = ({ image, name, restaurant, typesOfFood, distance }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2>{name}</h2>
      <h3>{restaurant}</h3>
      <p>{typesOfFood.join(", ")}</p>
      <p>{distance}</p>
    </div>
  );
};
export default Card;