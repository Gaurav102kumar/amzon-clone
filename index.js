const express=require('express')
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path")
const app=express()
const PORT=process.env.PORT || 5500

require('./db/config')
const authRoute = require("./routes/auth");
const categoryRoute=require('./routes/category')
const productRoute=require('./routes/products')
const orderRouter=require('./routes/cart')


app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});





app.use(cors());
app.use(express.json());









app.get("/",(req,res)=>{
    res.send("hii")
})


app.use("/api/auth", authRoute);
app.use("/api/catg", categoryRoute);
app.use("/api/pdt",productRoute);
app.use("/api/order",orderRouter);


app.listen(PORT,()=>{
    console.log(`App running on ${PORT}`)
})
