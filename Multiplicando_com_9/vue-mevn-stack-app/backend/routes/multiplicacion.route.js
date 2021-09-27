const express = require("express");
const multiplicacionRoute = express.Router();

//  Multiplicacion  model
let MultiplicacionModel = require("../models/Multiplicacion");

multiplicacionRoute.route("/retos").get((req, res) => {
  MultiplicacionModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

multiplicacionRoute.route("/retos/create-multiplicacion").post((req, res, next) => {
  MultiplicacionModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

multiplicacionRoute.route("/retos/edit-multiplicacion/:id").get((req, res) => {
  MultiplicacionModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//  Update  student
multiplicacionRoute.route("/retos/update-multiplicacion/:id").put((req, res, next) => {
  MultiplicacionModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Multiplicación cargada exitosamente!");
      }
    }
  );
});

//  Delete  student
multiplicacionRoute.route("/retos/delete-multiplicacion/:id").delete((req, res, next) => {
  MultiplicacionModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = multiplicacionRoute;
