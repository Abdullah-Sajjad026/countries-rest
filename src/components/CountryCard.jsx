import {Link} from "react-router-dom";

const CountryCard = ({name, region, population, flag, capital}) => {
  return (
    <article className="my-card shadow-lg rounded-md overflow-hidden ">
      <Link to={`/${name}`}>
        <div className="flag-box h-40 sm:h-44 w-auto relative">
          <img
            src={flag}
            alt="country-flag"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="my-card-info p-2 sm:m-4">
          <h2 className="country-name font-semibold text-2xl md:text-3xl mb-6">
            {name}
          </h2>
          <ul className="list-none">
            <li className="mb-2">
              <span className="font-semibold  text-lg mr-2">Population:</span>
              <span className="text-base ">{population}</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold text-lg mr-2 ">Region:</span>
              <span className="text-base ">{region}</span>
            </li>
            <li>
              <span className="font-semibold text-lg mr-2 ">Capital:</span>
              <span className="text-base ">{capital}</span>
            </li>
          </ul>
        </div>
      </Link>
    </article>
  );
};

export default CountryCard;
