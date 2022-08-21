const express = require('express');
//import {offerRouter} from './routes/Offers';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const offerRouter = require('./routes/Offers');
const productRouter = require('./routes/Products')
    //const dbURI = 'mongodb+srv://nizarkarkar:test1234@mernstack.utxuidk.mongodb.net/?retryWrites=true&w=majority';



const app = express();
dotenv.config()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/offer', offerRouter);
app.use('/api/product', productRouter);
mongoose.connect(process.env.MONGO, () => {
    console.log('connected to db successfully');
});

app.get('/',async(req,res,next)=>{
    console.log(req.headers['authorization'])
    res.send('Hey man !')}
  )


app.listen(3000, () => {
    console.log('listening for requests');

});

//middellware