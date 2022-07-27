const countriesDatabase = require('./countries.mongo');

const DEFAULT_COUNTRY_ID = 1;

async function getTopCountries() {
    return await countriesDatabase
      .find({}, { '_id': 0, '__v': 0 })
      .sort({ rating: -1 })
      .limit(10);
}


// async function getLatestCountryID() {
//     const latestCountry = await countriesDatabase
//     .findOne()
//     .sort('-countryID');

//     if (!latestCountryID) {
//         return DEFAULT_COUNTRY_ID;
//     }

//     return latestCountry.countryID;
// }


async function postNewCountry(country) {
    const newCountryID = 1;
    const newCountry = {
        countryID : newCountryID,
        ...country
    };
    await countriesDatabase.findOneAndUpdate({
        countryID: newCountryID,
    }, newCountry, {
        upsert: true,
    });
}

module.exports = {
    getTopCountries,
    postNewCountry
}

