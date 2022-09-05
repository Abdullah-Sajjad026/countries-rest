import {useContext, useEffect} from "react";
import {AllContexts} from "../App";
import CountryCard from "./CountryCard";

const Countries = () => {
  const {displayedData} = useContext(AllContexts);
  if (displayedData === "loading") {
    return "Loading ...";
  }
  return (
    <div className="countries-container grid sm:grid-cols-2 gap-6 md:grid-cols-3 md:gap-x-6 md:gap-y-10 lg:gap-10">
      {Array.isArray(displayedData) &&
        displayedData?.map((c) => (
          <CountryCard
            key={c.name.common}
            name={c.name.common}
            region={c.region}
            capital={c.capital}
            population={c.population}
            flag={c.flags.svg}
          />
        ))}
    </div>
  );
};
// };

export default Countries;
