import React, { useEffect, useState } from "react";
import SearchForm from "../Components/Form/SearchForm";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import { Link } from "react-router-dom";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    fetch("/expdata.json")
      .then((res) => res.json())
      .then((data) => setAllExp(data));
  }, []);
  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20">
      <div className="mt-6">
        <SearchForm />
      </div>
      <div className="flex-1 mt-10">
        <div>
          <div>
            <div className="flex justify-between px-6">
              <p className="text-xl font-semibold">Homes</p>
              <Link to="/coming-soon">
                <p>See All</p>
              </Link>
            </div>
            <div className="container pb-8 pt-2 mx-auto">
              <div className="flex flex-wrap">
                {[...Array(3)].map((exp, inx) => (
                  <HomeCard key={inx} exp={exp}></HomeCard>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between px-6">
            <p className="text-xl font-semibold">Experience</p>
            <Link to="/coming-soon">
              <p>See All</p>
            </Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex flex-wrap">
              {allExp.slice(0, 4).map((exp, inx) => (
                <ExpCard key={inx} exp={exp}></ExpCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
