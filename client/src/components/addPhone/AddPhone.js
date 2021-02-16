import React, { useState, useEffect } from "react";
import Navigation from "./../navigationBar/NavigationBar";
import { createPhone } from "./../../api/api";
import { Modal } from "react-bootstrap";

const AddPhone = ({ phone }) => {
  const [values, setValues] = useState({
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: "",
    screen: "",
    processor: "",
    ram: "",
    imageRaw: "",
    formData: "",
  });

  const {
    name,
    manufacturer,
    description,
    color,
    price,
    screen,
    processor,
    ram,
    formData,
  } = values;

  const [smShow, setSmShow] = useState(false);

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value =
      name === "imageRaw" ? event.target.files[0] : event.target.value;
    formData.append(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "" });
    createPhone(formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          manufacturer: "",
          description: "",
          color: "",
          price: "",
          screen: "",
          processor: "",
          ram: "",
          imageRaw: "",
        });
        setSmShow(true);
      }
    });
  };

  const photoForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
      <h4 className="mb-4">New phone form</h4>
      <div className="form-group">
        <label className="text-muted">Select image: </label>
        <label className="btn btn-primary">
          <input
            onChange={handleChange("imageRaw")}
            type="file"
            name="photo"
            accept="image/*"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Manufacturer</label>
        <input
          onChange={handleChange("manufacturer")}
          type="text"
          className="form-control"
          value={manufacturer}
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Description</label>
        <input
          onChange={handleChange("description")}
          type="text"
          className="form-control"
          value={description}
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Price</label>
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          value={price}
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Color</label>
        <input
          onChange={handleChange("color")}
          type="text"
          className="form-control"
          value={color}
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Screen</label>
        <input
          onChange={handleChange("screen")}
          type="text"
          className="form-control"
          value={screen}
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Processor</label>
        <input
          onChange={handleChange("processor")}
          type="text"
          className="form-control"
          value={processor}
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Ram</label>
        <input
          onChange={handleChange("ram")}
          type="number"
          className="form-control"
          value={ram}
          required
        />
      </div>
      <button className="btn btn-outline-primary mt-4">Create Product</button>
    </form>
  );

  return (
    <div>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Phone has been added</Modal.Body>
      </Modal>
      <Navigation />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>Let's gonna add some phone</h2>
            {photoForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPhone;
