const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
   
    title: {
        type: String
    },
    author: {
        type: String
    },
    year: {
        type: String
    },
    software_engineering_practice: {
        type: String
    },
    claim:{
        type: String
    },
    strength_of_evidence: {
        type: String
    }

});

module.exports = Article = mongoose.model('article', ArticleSchema);