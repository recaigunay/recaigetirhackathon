var mongoose = require("mongoose");

var schema = new mongoose.Schema({
    startDate : {type:Date , required:false},
    endDate: {type: Date, required:false},    
    minCount: {type: Number, required:false}, 
    maxCount: {type: Number, required:false}, 
})


module.exports = mongoose.model("records", schema);