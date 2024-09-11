const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    keplerName: { type: String, required: true },
});

// Connects planetsSchema with the "planets" collection
module.exports = mongoose.model('Planet', planetSchema);
