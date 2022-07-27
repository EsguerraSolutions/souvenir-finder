const { getTopCountries, postNewCountry } = require('../../models/countries.model');

async function httpGetTopCountries(req,res) {
    const topCountries = await getTopCountries();
    return res.status(200).json(topCountries);
}

async function httpPostNewCountry(req, res) {
    const country = req.body;

    if (!country.name) {
        return res.status(400).json({
            error: 'Missing Country Name',
        });
    }

    await postNewCountry(country);
    return res.status(201).json(country);
}

module.exports = {
    httpGetTopCountries,
    httpPostNewCountry
}