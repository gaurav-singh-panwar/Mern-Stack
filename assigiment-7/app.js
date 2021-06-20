const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const adminRoute = require('./Routes/AdminRoute');
const userRoute = require('./Routes/UserRoute');
const dotenv = require('dotenv');
const User = require('./Models/userModel');
const PORT = 3001;

dotenv.config({path: './config.env'});
app.use(bodyParser.json());

const DB = process.env.DATABASE;
// app.get('/',(req,res) => {
//     res.send(`Hello From Server`);

// });
// console.log(DB);

    app.use('/api/v1/user',userRoute);
    app.use('/api/v1/admin',adminRoute);
    app.use((error,req,res, next)=>{
    
        res.status(error.code);

        res.json({message:error.message || 'Unknown Error Occured',code:error.code});
    });
        // app.get("/getUser/:id",async(req, res)=>{
        //     try{
        //         const {email,firstName} = req.body;
        //                 const userExist = await User.findById(req.params.id);
        //         if(userExist){
        //             // console.log();
        //             return res.send(userExist);
        //         }
            
        //         // const userdata = await User.find({});
                
        //     }catch(e){
        //         res.send("no");
        //     }
        // })


        mongoose.connect(DB,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        }).then(()=>{
            app.listen(PORT,()=>{
                console.log(`App is running on ${PORT}`);
            });


        }).catch(err=>{
            console.log(err);
        })



app.listen(3000,()=>{
    console.log("listening");
})