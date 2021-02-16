const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

const Phone = require("./../models/Phone");

exports.createPhone = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (error, fields, files) => {
    if (error) {
      res.status(400).send("Error en la creacion");
    }
    const {
      name,
      manufacturer,
      description,
      color,
      price,
      screen,
      processor,
      ram,
    } = fields;
    let phone = new Phone(fields);
    if (files.imageRaw) {
      if (files.imageRaw.size > 2000000) {
        res.status(400).send("Image too big");
      }
      phone.imageRaw.data = fs.readFileSync(files.imageRaw.path);
      phone.imageRaw.contentType = files.imageRaw.type;
    }

    phone.save((eror, result) => {
      if (eror) {
        res.status(400).send("ERRORRRR");
      }
      res.json(result);
    });
  });
};
  
exports.listPhones = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";
  Phone.find()
    .select("-imageRaw")
    .sort([[sortBy, order]])
    .exec((error, data) => {
      if (error) {
        return res.status(400).send("Error");
      }
      res.json(data);
    });
};

exports.getPhone = (req, res) => {
  req.phone.photo = undefined;
  return res.json(req.phone);
};

exports.deletePhone = (req, res) => {
  let phone = req.phone;
  phone.remove((err, deletedPhone) => {
    if (err) {
      return res.status(400).send("Error");
    }
    res.json({
      message: "Phone has been deleted",
    });
  });
};

exports.phoneById = (req, res, next, id) => {
  Phone.findById(id).exec((err, phone) => {
    if (err || !phone) {
      return res.status(400).json({
        error: "phone not found",
      });
    }
    req.phone = phone;
    next();
  });
};

exports.phoneImage = (req, res, next) => {
  if (req.phone.imageRaw.data) {
    res.set("Content-Type", req.phone.imageRaw.contentType);
    return res.send(req.phone.imageRaw.data);
  }
  next();
};
