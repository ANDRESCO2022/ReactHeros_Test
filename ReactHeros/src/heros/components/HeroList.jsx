import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroCards } from './HeroCards';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCards key={hero.id} {...hero} />
      ))}
    </div>
  );
};
