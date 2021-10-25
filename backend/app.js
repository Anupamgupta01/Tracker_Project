const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const fileuploader = require("express-fileupload");

const app = express();

dotenv.config();
app.use(fileuploader());
app.use(cors());

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
const PORT = process.env.PORT;

app.use("/ngo", require("./routes/ngo"));
app.use("/admin", require("./routes/admin"));
app.use("/factory", require("./routes/factory"));
app.use("/public", require("./routes/public"));
// app.get('/',(req,res,next)=>{
//   res.send("API IS WORKING")
// })
mongoose.connect(process.env.mongoDBUrl, {useNewUrlParser: true, useUnifiedTopology: true},() => {
  console.log(`mongonsee connected ` );
  app.listen(PORT,()=>{
    console.log('Server is up!' + PORT)
  });
});