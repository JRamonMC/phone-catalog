import React, { useState, useEffect } from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { getPhones } from "../api/api";
import Card from "../components/card/Card";

const Home = () => {
  const [phones, setPhones] = useState([]);

  const loadPhones = () => {
    getPhones().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPhones(data);
      }
    });
  };

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div className="row mt-4 mb-3">
          {phones.map((phone, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6 mt-3">
              <Card phone={phone} detail={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
