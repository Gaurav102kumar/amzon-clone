const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://Gaurav04:12345abcde@gauravclustere.xvpmqvo.mongodb.net/?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection done")
}).catch((e)=>{
    console.log("something error")
})
