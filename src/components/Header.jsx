import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-white shadow-lg px-2 py-4 ">
      <div className="container sm:mx-auto  ">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/">
            <h3 className="font-bold text-2xl text-violet-800">
              Where in the world?
            </h3>
          </Link>
          {/* <button className="btn">Dark Mode</button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
