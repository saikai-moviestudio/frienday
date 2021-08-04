import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "./Calendar";
import Footer from "./Footer";

type Users = {
  name: string;
};

const Home: React.FC = () => {
  const { name } = useParams<Users>();
  console.log(name);

  return (
    <div>
      <div className="header">
        <div className="headerImageBox">
          <img src="/images/profile01.png" alt="profile" />
        </div>
        <div className="headerUserBox">
          <h1>{name}</h1>
        </div>
      </div>
      <div className="calendar">
        <Calendar />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
