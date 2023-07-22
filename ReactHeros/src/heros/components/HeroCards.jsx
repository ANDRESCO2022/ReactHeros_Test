import { Link } from 'react-router-dom';

export const HeroCards = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `../../assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__pulse">
      <div className="card">
        <div className="row no-gutters">
          <div className="row p-3 align-content-center rounded-2">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {alter_ego !== characters && <p>{characters}</p>}
          <p className=" card-text">{first_appearance}</p>
          <Link to={`/hero/${id}`}>INFO</Link>
        </div>
      </div>
    </div>
  );
};
