const mongoose = require('mongoose');

const SuggestArticleSchema = new mongoose.Schema({
   
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
    journal_name:{
        type: String
    },
    DOI: {
        type: String
    },
});

module.exports = SuggestArticle = mongoose.model('suggestArticle', SuggestArticleSchema);