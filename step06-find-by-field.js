var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

(async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
      console.log('mongoose open for business');
    

      //Define a schema
      const studentSchema = new mongoose.Schema({
        name: String,
        age: Number
      });

      //Creating a model
      const Student = mongoose.model('Student', studentSchema);
      
      const result = await Student.find({name: "asghar"}); // find name from collection through ORM prvided by mongoose
      //console.log("Result = ", result);

      // use forEach loop over array to find name and age at each object in the array
      result.forEach((item)=>{
        console.log(`Name: ${item.name} , Age: ${item.age}`);
      })
    }
    catch(error) {
      console.log(error);
    }
})();