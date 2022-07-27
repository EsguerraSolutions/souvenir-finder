const mongoose = require('mongoose');

const countriesSchema = new mongoose.Schema({
    countryID: {
        type: Number,
        required : true
    },
	name: {
        type: String,
        required: true
    },
	// image: {
	// 	data: Buffer,
	// 	contentType: String
	// },
	rating: {
        type: Number
    }
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model('Country', countriesSchema);
