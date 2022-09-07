import SearchBoxes from "../components/SearchBoxes";
import Countries from "../components/Countries";
import {useContext, useEffect} from "react";
import {AllContexts} from "../App";
const Home = () => {
  const {countries, displayedData, setDisplayedData} = useContext(AllContexts);

  useEffect(() => {
    if (countries) setDisplayedData(countries);
  }, [countries]);

  if (countries === "loading") {
    return "Loading ...";
  }

  return (
    <div>
      <SearchBoxes />
      <Countries />
    </div>
  );
};

export default Home;
