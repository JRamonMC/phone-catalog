import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Card.css";
import ShowImage from "../showImage/ShowImage";
import { deletePhoneFromCatalogue } from "../../api/api";

const Card = ({ phone, detail }) => {
  const history = useHistory();

  const deletePhone = (phone) => {
    const phoneId = phone._id;

    deletePhoneFromCatalogue(phoneId)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          history.goBack();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const extraDetail = (phone) => {
    return (
      <div>
        <p className="font-weight-light">Manufacturer: {phone.manufacturer}</p>
        <p className="font-weight-light">Color: {phone.color}</p>
        <p className="font-weight-light">Screen: {phone.screen}</p>
        <p className="font-weight-light">Processor: {phone.processor}</p>
        <p className="font-weight-light">RAM: {phone.ram}</p>
        <button
          className="btn btn-secondary"
          onClick={() => {
            deletePhone(phone);
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  const moreDetail = () => {
    return (
      <div>
        <Link to={`/seephone/${phone._id}`}>
          <button className="btn btn-info mt-2"> More details </button>
        </Link>
      </div>
    );
  };

  return (
    <div className="card m-10 card-cont center">
      <div>
        <ShowImage className="img" item={phone} url=""></ShowImage>
        <h3>{phone.name}</h3>
        <p className="font-weight-light">Price: {phone.price} $</p>
        <p className="font-weight-light">{phone.description}</p>
        {detail === true ? extraDetail(phone) : moreDetail()}
      </div>
    </div>
  );
};

export default Card;
