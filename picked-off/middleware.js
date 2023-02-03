const express = require("express");
const middleware = express.Router();

middleware.use("/",(req, res, next) => {
const vaccinated = {vaccinated: true}
req.body = vaccinated
next()
})

module.exports = middleware;