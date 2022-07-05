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
      
      // find student by it's id
      const result = await Student.findById({_id: "62c3e05007f49738cc487ddb"});
      console.log(`Name: ${result.name} , Age: ${result.age}`);
      
    }
    catch(error) {
      console.log(error);
    }
})();