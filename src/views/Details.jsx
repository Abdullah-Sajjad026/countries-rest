import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {AllContexts} from "../App";

const Details = () => {
  const {country_name} = useParams();

  const {countries} = useContext(AllContexts);

  if (countries === "loading") {
    return "Loading";
  }

  const c = countries.find((c) => c.name.common === country_name);

  return (
    <div className="grid md:grid-cols-2 gap-x-8 ">
      <div className="flag-box h-60 sm:h-88 w-auto relative">
        <img
          src={c.flags.svg || c.flags.png}
          alt="country-flag"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="info-box mt-8 ">
        <h2 className="country-name font-semibold text-2xl md:text-3xl mb-6">
          {c.name.common}
        </h2>
        <div className="flex justify-between flex-col sm:flex-row">
          <ul className="list-none">
            <li className="mb-2">
              <span className="font-semibold  text-lg mr-2">Population:</span>
              <span className="text-base ">{c.population}</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold text-lg mr-2 ">Region:</span>
              <span className="text-base ">{c.region}</span>
            </li>
            <li>
              <span className="font-semibold text-lg mr-2 ">Capital:</span>
              <span className="text-base ">{c.capital}</span>
            </li>
          </ul>{" "}
          <ul className="list-none">
            <li className="mb-2">
              <span className="font-semibold  text-lg mr-2">Population:</span>
              <span className="text-base ">{c.population}</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold text-lg mr-2 ">Region:</span>
              <span className="text-base ">{c.region}</span>
            </li>
            <li>
              <span className="font-semibold text-lg mr-2 ">Capital:</span>
              <span className="text-base ">{c.capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
