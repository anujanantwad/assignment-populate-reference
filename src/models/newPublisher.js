const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const PublisherSchema = new mongoose.Schema ( {
    name: String,
    headQuarter: String,
},
)
 


module.exports = mongoose.model('PublisherSchema', PublisherSchema) //publisher
