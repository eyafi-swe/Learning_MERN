const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors())
// var whitelist = ['http://localhost:5000/phones']


// var corsOptions = {
//     origin: function (origin, callback) {
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     }
//   }
const phones = require('./phones.json')

app.get('/', (req, res)=>{
    res.send('Shagotom apnar prothom node project e....')
})

app.get('/phones',(req,res)=>{
    res.send(phones);
})

app.get('/phones/:phoneId',(req,res)=>{
    const id = parseInt(req.params.phoneId);
    const phone = phones.find(ph => ph.id === id) || {};
    res.send(phone);
    console.log(`Looking for phone id ${id}`);
})

app.listen(port, ()=>{
    console.log(`Server chalu hoise ${port} port e`);
})