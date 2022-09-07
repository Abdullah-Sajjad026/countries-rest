import React, {useContext} from "react";
import {IoArrowBack} from "react-icons/io5";
import {Link, useParams} from "react-router-dom";
import {AllContexts} from "../App";

const Details = () => {
  const {country_name} = useParams();

  const {countries} = useContext(AllContexts);

  if (countries === "loading") {
    return "Loading";
  }

  const c = countries.find((c) => c.name.common === country_name);
  console.log(c);
  let cLanguages = "",
    cNativeNames = "";
  console.log(cLanguages);

  for (let lang of Object.values(c.languages)) {
    cLanguages = cLanguages + ` ${lang},`;
  }
  for (let nativeName of Object.values(c.name.nativeName)) {
    cNativeNames = cNativeNames + ` ${nativeName.common},`;
  }

  return (
    <>
      <div className="mb-4">
        <Link
          to="/"
          className="btn bg-white py-2 px-12 inline-flex shadow-sm items-center gap-2 hover:scale-105 hover:shadow-md ease-in duration-100"
        >
          <IoArrowBack /> Back
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-x-8 ">
        <div className="flag-box h-60 sm:h-92 md:h-full w-auto relative">
          <img
            src={c.flags.svg || c.flags.png}
            alt="country-flag"
            className="h-full w-full object-cover md:object-contain"
          />
        </div>
        <div className="info-box mt-8 ">
          <h2 className="country-name font-semibold text-2xl md:text-3xl mb-6">
            {c.name.common}
          </h2>
          <div className="flex justify-between flex-col sm:flex-row">
            <ul className="list-none">
              <li className="mb-2">
                <span className="font-semibold  text-lg mr-2">
                  Native Names:
                </span>
                <span className="text-base ">{cNativeNames}</span>
              </li>
              <li className="mb-2">
                <span className="font-semibold  text-lg mr-2">Population:</span>
                <span className="text-base ">{c.population}</span>
              </li>
              <li className="mb-2">
                <span className="font-semibold text-lg mr-2 ">Region:</span>
                <span className="text-base ">{c.region}</span>
              </li>
              <li className="mb-2">
                <span className="font-semibold text-lg mr-2 ">Sub Region:</span>
                <span className="text-base ">{c.subregion}</span>
              </li>
              <li className="mb-2">
                <span className="font-semibold  text-lg mr-2">Capital:</span>
                <span className="text-base ">{c.capital}</span>
              </li>
            </ul>
            <ul className="list-none">
              <li className="mb-2">
                <span className="font-semibold text-lg mr-2 ">
                  Top Level Domain:
                </span>
                <span className="text-base ">{c.region}</span>
              </li>
              <li className="mb-2">
                <span className="font-semibold text-lg mr-2 ">Currencies:</span>
                <span className="text-base ">
                  {Object.values(c.currencies)[0].name}
                </span>
              </li>
              <li>
                <span className="font-semibold text-lg mr-2 ">Languages:</span>
                <span className="text-base ">{cLanguages}</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex md:flex-col lg:flex-row content-between">
            <span className="font-semibold text-lg mr-6 whitespace-nowrap">
              Border Countries:
            </span>
            <div className="flex flex-wrap gap-4">
              {c.borders.map((b) => (
                <span className="bg-white shadow sm px-8 py-2 border-2 text-center ">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
