const express = require('express');
const { httpGetTopCountries , httpPostNewCountry } = require('./countries.controller');

const countriesRouter = express.Router();

countriesRouter.get('/top-rated', httpGetTopCountries );
countriesRouter.post('/', httpPostNewCountry );

module.exports = countriesRouter;