import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCards } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPages = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { q = '' } = queryString.parse(location.search);
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const onSearchSubmit = (event) => {
    event.preventDefault();
    //   if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>search</h1>

      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <form onSubmit={onSearchSubmit} aria-label="form_label">
            <input
              type="text"
              placeholder=" Search a Hero"
              name="searchText"
              autoComplete="off"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          {/* {q === '' ? (
            <div className="alert alert-primary">Shearh a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                not exist hero whith <b>{q}</b>
              </div>
            )
          )} */}

          <div
            className="alert alert-primary  animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Shearh a hero
          </div>
          <div
            aria-label="alert-danger"
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            not exist hero whith <b>{q}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCards key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
