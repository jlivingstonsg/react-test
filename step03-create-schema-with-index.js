var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

(async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
      console.log('mongoose open for business');
      
      //Define a schema with index at field name
      const studentSchema = new mongoose.Schema({
        name: {type: String, index: true},
        age: Number
      });

      //Creating a model
      const Student = mongoose.model('Student', studentSchema);

      // Create an instance of model 'Student'
      const student1 = new Student({
        name: "Bilal",
        age: 33
      });

      // Save the new model instance
      const result = await student1.save();
      console.log("Result = ", result);
    }
    catch(error) {
      console.log(error);
    }
})();