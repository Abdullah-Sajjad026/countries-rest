import {useContext, useRef} from "react";
import {IoSearchOutline} from "react-icons/io5";
import {toast} from "react-toastify";
import {AllContexts} from "../App";

const SearchBoxes = () => {
  const inputRef = useRef();

  const {countries, setDisplayedData} = useContext(AllContexts);

  const handleSearch = () => {
    const countryName = inputRef.current?.value?.toLowerCase();
    if (!countryName) {
      toast.error("Enter a name.");
      setDisplayedData(countries);
    } else {
      setDisplayedData("loading");
      const foundCountry = countries.filter(
        (c) =>
          c.name.common.toLowerCase() === countryName ||
          c.name.official === countryName ||
          c.name.nativeName?.ara?.common === countryName ||
          c.name.nativeName?.ara?.official === countryName
      );

      if (foundCountry.length > 0) {
        toast.success("Found country");
        setDisplayedData(foundCountry);
      } else {
        setDisplayedData("");
        toast.error("No country found");
      }
    }
  };

  const handleRegionChange = (e) => {
    if (e.target.value === "all") {
      setDisplayedData(countries);
    } else {
      setDisplayedData(countries.filter((c) => c.region === e.target.value));
    }
  };

  return (
    <div className="mb-5 mt-4">
      <div className="flex justify-between">
        <span className="flex p-2 bg-white items-center input-box border rounded">
          <input
            type="text"
            className="focus:outline-none mr-2 border-0"
            placeholder="Search by name"
            ref={inputRef}
          />
          <button onClick={handleSearch} className="cursor-pointer">
            <IoSearchOutline className="icon search-icon " />
          </button>
        </span>
        <span>
          <select
            name="Regions"
            id="regions"
            className="pl-3 pr-6 py-3 rouded shadow-lg outline-none text-base"
            defaultValue="all"
            onChange={handleRegionChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default SearchBoxes;
