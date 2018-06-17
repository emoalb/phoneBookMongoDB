const mongoose = require("mongoose");
const phoneBookSchema = new mongoose.Schema ({
    firstName:{type:mongoose.Schema.Types.String, required:true},
    address:{type:mongoose.Schema.Types.String, required:true},
    phoneNum:{type:mongoose.Schema.Types.String, required:true}
});
module.exports= mongoose.model("phoneBookSchema",phoneBookSchema);


