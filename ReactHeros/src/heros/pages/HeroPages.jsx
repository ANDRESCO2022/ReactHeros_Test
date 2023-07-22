import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

export const HeroPages = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate('/');
  };
  const hero = useMemo(() => getHeroById(id), [id]);
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../../../assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__bounceInLeft"
        />
        <h1> {hero.superhero}</h1>
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group-item list-group-flush">
          <li className="list-group-item ">
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item ">
            <b>publisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item ">
            <b> Firts Appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3 ">
          Characters:
          <p>{hero.characters}</p>
        </h5>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          back
        </button>
      </div>
    </div>
  );
};
