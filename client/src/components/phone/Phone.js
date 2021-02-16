import React, { useState, useEffect } from "react";
import Navigation from "./../navigationBar/NavigationBar";
import { getPhone } from "../../api/api";
import Card from "../card/Card";
import "./Phone.css";

const Phone = (props) => {
  const [phone, setPhone] = useState({});

  const loadPhone = (phoneId) => {
    getPhone(phoneId).then((data) => {
      if (data.error) {
        console.log("Error during load phone");
      } else {
        setPhone(data);
      }
    });
  };

  useEffect(() => {
    const phoneId = props.match.params.phoneId;
    loadPhone(phoneId);
  }, [props]);

  return (
    <div>
      <Navigation />
      {phone && (
        <div className="container center">
          <Card phone={phone} detail={true} />
        </div>
      )}
    </div>
  );
};

export default Phone;
