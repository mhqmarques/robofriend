import React, { useEffect, useMemo, useState } from "react";
import CardList from "../../components/CardList";
import RobotCard from "../../components/RobotCard";
import Loading from "../../components/Loading";
import Scrolling from "../../components/Scrolling";

import "./index.css";

const Home = () => {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([]);

  const handleStates = useMemo(() => ({
    init: (users) => {
      setRobots(users);
      setFilteredRobots(users);
    },
    clean: () => {
      setRobots([]);
      setFilteredRobots([]);
    },
  }), []);

  const onFilterRobots = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchText)
    );
    setFilteredRobots(filteredRobots);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => handleStates.init(user));
    return () => {
      handleStates.clean();
    };
  }, [handleStates]);

  if (!robots.length) {
    return (
      <span className="full-center">
        <Loading />
      </span>
    );
  }

  return (
    <>
      <header className="center">
        <h1 className="title">Robots</h1>
        <section>
          <input
            type="search"
            name="searchBox"
            id="searchBox"
            placeholder="search robots name"
            onChange={onFilterRobots}
          />
        </section>
      </header>
      <Scrolling>
        <CardList list={filteredRobots} CardComponent={RobotCard} />
      </Scrolling>
    </>
  );
};

export default Home;
